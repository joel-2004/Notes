import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import reducer from "./reducer";
// import { data } from "../../../data";
//when importing "./demo" if there is a index.js then it will be automatically imported without specification
// reducer function
const defaultState = {
  people: [],
  isModal: false,
  modalContent: "modal"
}
const Index = () => {
  // const [people, setPeople] = useState(data);
  // const [modal, setModal] = useState(false); using reducer insted of useState because when the app gets larger, it is ez and better to use reducer
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newName = { id: new Date().getTime().toString(), name: name }
      dispatch({ type: "TESTING", payload: newName }) //"TESTING",payload is naming convention
      setName("");
    }

    else {
      // alert("No name");
      dispatch({ type: "NO_VAL" })
    }
  }
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" })
  }

  return (<>
    {state.isModal && <Modal closeModal={closeModal} modalContent={state.modalContent}></Modal>//if modal is true then <Modal> will work 
    }
    <form onSubmit={handleSubmit}>
      <input type="text" name="ppl" id="ppl" value={name} onChange={(e) => setName(e.target.value)}></input>
      <p>
        <button type="submit">Add</button>
      </p>
    </form>
    {state.people.map((p) => {
      return <div>
        {p.name}
        <button type="button" onClick={() => dispatch({ type: "DLT", payload: p.id })}>Done</button>
      </div>

    })}
    <button type="button" onClick={() => dispatch({ type: "RESET" })}>RESET</button>
  </>);
};

export default Index;
