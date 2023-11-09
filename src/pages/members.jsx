import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Members = () => {
  const users = useSelector((state) => state.userReducer.users);
  const teamMembers = useSelector((state) => state.teamReducer.teamMembers);
  const dispatch = useDispatch();

  const handleAddUser = (user) => {
    const isUserInTeam = teamMembers.some((member) => member.id === user.id);
    if (isUserInTeam) {
      alert("This user is already in the team!");
    } else {
      dispatch({ type: "ADD_TO_TEAM", payload: user });
    }
  };
  const handleRemoveUser = (user) => {
    dispatch({ type: "REMOVE_FROM_TEAM", payload: user.id });
  };

  return (
    <div className="container">
      <h2>Members</h2>
      <p>Displayed using State in Reducer</p>
      <div className="card-container">
        <div className="card">
          {users.map((user) => (
            <div
              className={`card-item ${teamMembers.some(
                (member) => member.id === user.id
              ) && "selected-member"}`}
              key={user.id}
            > 
            <div className="card-buttons">
              <button onClick={() => handleAddUser(user)}>+</button>
              <button onClick={() => handleRemoveUser(user)}
               disabled={!teamMembers.some((member) => member.id === user.id)}>-</button>
            </div>
              
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

export default Members;
