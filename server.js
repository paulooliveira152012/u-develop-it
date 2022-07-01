//connect to MySQL database by importing mysql2 package
const mysql = require('mysql2');

//import express from node_modules
const express = require('express');
//Adding the PORT designation 
const PORT = process.env.PORT || 3001;
//Adding the app expression
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });


//function that will start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });