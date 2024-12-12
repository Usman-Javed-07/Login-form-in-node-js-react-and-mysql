/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "../src/css/design.module.css"
import { NavLink } from 'react-router-dom';

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
    
      // Inline styles
      const styles = {
        userListContainer: {
          fontFamily: 'Arial, sans-serif',
          padding: '20px',
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        tableWrapper: {
          overflowX: 'auto',  // Allows horizontal scrolling on smaller screens
          WebkitOverflowScrolling: 'touch',
        },
        table: {
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '20px',
        },
        tableHeader: {
          backgroundColor: '#4CAF50',
          color: '#fff',
          textAlign: 'left',
          padding: '10px',
          fontSize: '18px',
        },
        tableRow: {
          borderBottom: '1px solid #ddd',
        },
        tableData: {
          padding: '10px',
          textAlign: 'left',
        },
        tableDataHeader: {
          fontWeight: 'bold',
        },
        noUsersMessage: {
          textAlign: 'center',
          color: '#777',
          fontSize: '18px',
        },
        error: {
          color: 'red',
          textAlign: 'center',
          fontSize: '18px',
        },
        button: {
         marginTop: '15px',
        },
        nav: {
         textDecoration: 'none',
         color: "#fff"
        },
      };
    
      return (
        <div style={styles.userListContainer}>
          <h1 style={{ textAlign: 'center', fontSize: '32px', color: '#333' }}>Users List</h1>
          {error && <p style={styles.error}>{error}</p>}
    
          {users.length > 0 ? (
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr style={styles.tableRow}>
                    <th style={{ ...styles.tableHeader, ...styles.tableDataHeader }}>Username</th>
                    <th style={{ ...styles.tableHeader, ...styles.tableDataHeader }}>Email</th>
                    <th style={{ ...styles.tableHeader, ...styles.tableDataHeader }}>Created At</th>
                    <th style={{ ...styles.tableHeader, ...styles.tableDataHeader }}>Updated At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.username} style={styles.tableRow}>
                      <td style={styles.tableData}>{user.username}</td>
                      <td style={styles.tableData}>{user.email}</td>
                      <td style={styles.tableData}>{user.created_at}</td>
                      <td style={styles.tableData}>{user.updated_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p style={styles.noUsersMessage}>No users found</p>
          )}
           <button style={styles.button}><NavLink to={"/"} style={styles.nav}> go to login page</NavLink> </button> 
        </div>
          

      );
    

    };

export default UserData