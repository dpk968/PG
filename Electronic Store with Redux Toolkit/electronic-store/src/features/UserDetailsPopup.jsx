import React, { useState } from "react";
import { useSelector } from "react-redux";

const UserDetailsPopup = (items) => {
  const users = useSelector((state) => state.content.contents);
  const [isOpen, setIsOpen] = useState(false);
  const {id} = items;
  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Know More</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <h2>User Details</h2>
            <img
              src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"
              height={200}
              width={200}
              alt="User Avatar"
            />
            <p>
              <strong>Name:</strong> {users[id-1].name}
            </p>
            <p>
              <strong>Phone Number:</strong> {users[id-1].phone}
            </p>
            <p>
              <strong>Address:</strong> {users[id-1].address.street}, {users[id-1].address.city}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailsPopup;
