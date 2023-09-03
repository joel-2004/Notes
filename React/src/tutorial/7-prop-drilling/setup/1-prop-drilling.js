import React, { useState } from 'react';
import data from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePeople = (id) => {//to pass this function we have to pass it through the list to the Single person and so on, it is hard ,so we go fot useContext
    setPeople((people) => {
      return people.filter((e) => e.id !== id);
    });
  };
  return (<>
    <h1>Prop drilling</h1>
    <List people={people} removePeople={removePeople}></List>
  </>);
};
const List = ({ people, removePeople }) => {
  return (
    <>
      {
        people.map((p) => {
          return (

            <SinglePerson key={p.id} {...p} removePeople={removePeople}></SinglePerson>

          );
        })
      }
    </>
  );
}

const SinglePerson = ({ id, name, removePeople }) => {
  return (<div>
    <p>{name}</p>
    <button type="button" onClick={() => removePeople(id)}>Remove PPl</button>
  </div>);
}
export default PropDrilling;
