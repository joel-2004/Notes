import React from 'react';
import PropTypes from "prop-types"

const Product = ({ name, price, image }) => {
  //console.log(props.image, props.name);
  return <article className='product'>

    <h1>{name || "default name"}</h1>
    <h1>${price || "0.00"}</h1>
    {/* the last name in the props does not have a price in the API and so prints just $  */}
    {/* <img src={image || images} alt="sry"></img> */}
    {/* we get a error because the last prop.name does not have a image obj(check api) ,so now prop types comes in handy  */}


  </article>;
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

// Product.defaultProps = {
//   //if the prop is undefined it comes here
//   name: "default name",
//   price: 0.00,
//   image: {
//     url: "https://source.unsplash.com/user/c_v_r/1900x800"
//   }
// }

export default Product;
