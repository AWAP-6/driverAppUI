import React, { useState } from "react";
import Modal from './modal';
import axios from '../axiosInstance';
import { sort } from 'fast-sort';

export const Location = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lockers, setLockers] = useState([]);

  const handleLocationClick = () => {
    axios.get(`/lockers/location/${location.id}/getStatus`)
      .then((response) => {
        const sorted = sort(response.data).asc(u => u.lockNum);
        setLockers(sorted);
        setIsOpen(true);
      })
      .catch((error) => {
        console.error('Error with loading locations', error);
      });
  };

  return (
    <>
      <button onClick={handleLocationClick}>{location.name}</button>
      {isOpen && <Modal lockers={lockers} close={() => setIsOpen(false)} />}
    </>
  );
};