const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json());

// IMPORT ROUTES

const postsRoute = require('./routes/posts');
const indexRoute = require('./routes/index');

app.use('/posts', postsRoute);

// ROUTES
app.get('',indexRoute );


// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
 {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  () =>   
    console.log('connected to MongoDB!')
);


// Listerning to server
app.listen(process.env.PORT || 5000);