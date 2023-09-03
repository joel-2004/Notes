import React, { useState, useContext } from 'react';
import data from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
//use of context is to use a function or value without the need to pass it down every components of a  list
const PersonContext = React.createContext();
//has two components producer,consumer
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      {/* using .provider from context */}
      <h3>Context API/UseContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = ({ people }) => {
  const forPeople = useContext(PersonContext);
  return (
    <>
      {forPeople.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const toRemove = useContext(PersonContext);//storing in toRemove 

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => toRemove.removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
