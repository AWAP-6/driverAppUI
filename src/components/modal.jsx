import React from 'react';
import "../App.css";
import { Locker } from './locker';

const Modal = ({ lockers, close }) => {
  return (
    <>
      <div className="modal-layout"></div>
      <div className="modal">
        <div className="modal-container">
          <button className="close-button" onClick={close}>X</button>
          <h1>Location Lockers</h1>
          {lockers && lockers.length > 0 ? (
            lockers.map((locker, index) => (
                <Locker index={index} key={index} locker={locker} />
            ))
          ) : (
            <p>No items found for this location.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;