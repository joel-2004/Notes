import React, { useState, useEffect } from 'react';
import data from "../../../data";
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  console.log(useParams());
  const [name, setName] = useState("default name");
  const { id } = useParams();//destructuring id from useParam
  /* note that the useParams is an oject that has a object paramter based on the given link,for now we passed /people/:id
   as which can ONLY have string  i.e id:"1" ,if we modify id as anything else it becomes that 
  exameple: /people/:orange
  orange:"1"
  the useParama also holds a function paramter
  */
  // useEffect(() => {
  //   const newPerson = data.find((person) => person.id === parseInt(id));

  //   setName(newPerson.name);

  // }, []);

  console.log(data);
  return (
    <div>
      <h1>{name}</h1>
      <h4>{id}</h4>
      <Link to="/people">Back to ppl</Link>
    </div>
  );
};

export default Person;
