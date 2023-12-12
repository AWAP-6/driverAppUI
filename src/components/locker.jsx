import axios from '../axiosInstance';
import { useState } from 'react';
export const Locker = ({locker, index}) => {
    const [status, setStatus] = useState(locker.status)
    const updateStatus = (lockerId, newStatus) => {
        setStatus(newStatus)
        const params = new URLSearchParams();
        params.append('status', newStatus);
      
        axios.post(`/lockers/${lockerId}/updateStatus`, params)
          .then(response => {
            console.log(`Status updated to ${newStatus}`, response.data);
          })
          .catch(error => {
            console.error('Error updating locker status:', error);
          });
      };
    return(
        <div key={index} className="item">
        <div className="status">
          <div
            className={`status-indicator ${
              status === "available" ? "green-ball" :
              status === "ready for customer pickup" ? "yellow-ball" :
              status === "reserved by customer" ? "yellow-ball" :
              "red-ball"
            }`}
          />
          {`Locker ${locker.lockNum}: ${status}`}
        </div>
        {status === "reserved by driver" && (
          <button onClick={() => updateStatus(locker.id, 'ready for customer pickup')}>
            Ready for customer pickup
          </button>
      )}
        {status === "deliver to warehouse" && (
         <button onClick={() => updateStatus(locker.id, 'available')}>
           Make Available
         </button>
      )}
      </div>
    )
}