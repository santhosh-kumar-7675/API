import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Team = () => {
  const teamMembers = useSelector((state) => state.teamReducer.teamMembers);
  const dispatch = useDispatch();

  const handleRemoveUser = (userId) => {
    dispatch({ type: "REMOVE_FROM_TEAM", payload: userId });
  };

  return (
    <div className="container">
      <h2>Team</h2>
      <div className="card-container">
        <div className="card">
          {teamMembers.map((user) => (
            <div className="card-item" key={user.id}>
              <button onClick={() => handleRemoveUser(user.id)}>-</button>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>
              <p>Company: {user.company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
