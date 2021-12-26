import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>React course</h1>
        </div>
        <div className="body">
          <p>Here You will learn the basics of React! Course is all in English. For the evalution 
              You will have to present project of website, all the details will be given during lectures.</p>
          
        </div>
        <Link to="/Course" className="readmore">Read more</Link>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    
  );
}

export default Modal;