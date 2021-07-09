const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
const {getquestions} = require('../controller/questions');
const fs = require('fs');

router.get('/', (req, res) => {
    res.send('Welcome To Driving Test Api');
})


module.exports = router;