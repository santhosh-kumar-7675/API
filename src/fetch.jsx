import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const UsingFetch = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUsers(data);
        dispatch({ type: "SET_USERS", payload: data });
      });
  };
  
  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <div className="card-container">
      {users.length > 0 && (
        <div className="card">
          {users.map(user => (
            <div className="card-item" key={user.id}>
              <h2>{user.name}</h2>
              <p>Email : {user.email}</p>
              <p>Username : {user.username}</p>
              <p>Phone : {user.phone}</p>
              <p>Website : {user.website}</p>
              <p>Comapany : {user.company.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsingFetch;
