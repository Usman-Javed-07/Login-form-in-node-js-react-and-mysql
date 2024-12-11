/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "../src/css/design.module.css"

export const UserData = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch user data from the backend
        axios.get('http://localhost:5000/api/users')
          .then(response => {
            setUsers(response.data); // Save the fetched users to the state
          })
          .catch(error => {
            setError('Error fetching users');
            console.error(error);
          });
      }, []);
    return (
        
        <div className='user-list'>
        <h1>Users List</h1>
        {error && <p>{error}</p>}
        <ol>
          {users.length > 0 ? (
            users.map(user => (
              <li key={user.username}>
              {user.username} - {user.email} 
              </li>
            ))
          ) : (
            <p>No users found</p>
          )}
        </ol>
      </div>
    );
}

export default UserData