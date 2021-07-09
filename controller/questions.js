
const fs = require('fs');

const getquestions =(req, res, next) =>
{
    const questions = fs.readFileSync("DrivingQuestions.json", "utf8")
    console.log(questions)
    // const data = JSON.parse(questions)
    
    res.send(questions);
} 
const getquestions_2 =(req, res, next) =>
{
    const questions = fs.readFileSync("DrivingQuestions.json", "utf8")
    console.log(questions)
    // const data = JSON.parse(questions)
    
    res.send(questions);
} 



module.exports = {getquestions,getquestions_2};
