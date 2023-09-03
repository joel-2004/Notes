import React, { useState, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const Index = () => {

  const maxPrice = (data) => {
    console.log("max price");
    return (
      data.reduce((total, items) => {
        const price = items.fields.price;
        if (price >= total)
          total = price;
        return total;
      }, 0) / 100 //dividing the total/100
    );
  }


  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0);
  const maxPriceTCReduce = useMemo(() =>
    maxPrice(products), [products] /*the maxPrice function rerenders everytime, so to 
    manage that we are storing it and rerendering only if the product value changes using useMemo*/
  )
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart])//only rerenders only when the cart is updated, now it does not rerender when setCount in products changes
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1>Cart:{cart}</h1>
      <h1>Max:${maxPriceTCReduce}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}

const BigList = React.memo(({ products, addToCart }) => {
  /*React.memo is used to prevent unecessary rerendering
  caused by using hooks, now after using it checks if the value of produt is changed.It rerenders only if it is changed
  
  */
  console.count("BigList");
  return (
    <section className='products'>
      {products.map((product) => {

        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>


      })}
    </section>
  )
});

const SingleProduct = ({ fields, addToCart }) => {

  /* while using React.memo in BigList automatically the SingleProduct also did not re-render.

*/
  console.count("Single Product");
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button type="button" onClick={addToCart}>Add to Cart</button>
    </article>
  )
};
export default Index
