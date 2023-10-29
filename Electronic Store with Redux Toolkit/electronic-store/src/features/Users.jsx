import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import UserDetailsPopup from "./UserDetailsPopup";

function Users() {
  const users = useSelector((state) => state.content.contents);
  const error = useSelector((state) => state.content.error);

  // const user = contents[0];

  if (error) {
    return error;
  }
  return (
    <>
      <Header />
      <div className="users-list">
        {users.map((items) => (
          <div key={items.id} className="user-profile">
            <img
              src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"
              alt={items.name}
              className="avatar"
            />
            <div className="user-details">
              <h4 className="user-name">{items.name.slice(0,5)}</h4>
              <p className="user-email">{items.email}</p>

              <UserDetailsPopup id={items.id}/>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Users;
