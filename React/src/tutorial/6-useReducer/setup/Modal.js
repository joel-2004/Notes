import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setInterval(() => {
      closeModal()
    }, 3000);
  });
  return <div>
    <p>{modalContent}</p>
  </div>;
};

export default Modal;
