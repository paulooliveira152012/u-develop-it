//importing connection to database
const db = require('./db/connection')
//import imputCheck module
const inputCheck = require('./utils/inputCheck');
// requesting routes on apiRoutes 
const apiRoutes = require('./routes/apiRoutes');

//import express from node_modules
const express = require('express');
//Adding the PORT designation 
const PORT = process.env.PORT || 3001;
//Adding the app expression
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// using apiRoutes
app.use('/api', apiRoutes);



  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });



//function that will start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });