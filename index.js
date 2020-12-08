var readlinesync = require("readline-sync")
const chalk = require('chalk');

var score = 0;

var userName = readlinesync.question("What is you name? ");
console.log(chalk.blue("Welcome " + userName + ", Lets see how well do you know Manan"))

console.log();

function playQuiz(question, answer){

  var userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Correct"));
    
    ++score;

  } else {
    console.log(chalk.red("wrong"));
  }

  console.log("Your current score is: " + score);
  console.log("--------------------------------")
  console.log();
}

var quizQuestionAnswer = [{
  question: "Where do i live(city)? ", 
  answer: "Ahmedabad"
 }, {
   question: "What do i prefer more icecream or chocolate? ",
   answer: "Icecream"
 }, {

   question: "In which area of techology i am pursuing bachlelor's degree(Provide full form)? ",
   answer: "Electronics and Communication" 
 }, {
   question: "In which university do i study ",
   answer: "Indus University"
 }, {
   question: "Year in which i was born? ",
   answer: "2000"
}];


for (i=0;i<quizQuestionAnswer.length;i++){
  
  playQuiz(quizQuestionAnswer[i].question, quizQuestionAnswer[i].answer)
}

console.log("Your total score is ", score);
console.log();

var scoreList = [{
  name: "Pavan",
  score: "3"

}, {
  name: "Manan",
  score: "5"
}]

var temp = 0;

 for (i=0;i<scoreList.length;i++){
   if (scoreList[i].score <= score){
     console.log("Congrulations " + userName + ", you have made a new high score");

     scoreList[i].name = userName;
     scoreList[i].score = score;

     temp++;
   }

   if (temp == 1){
     i++;
   }
 }

console.log("Score List: ");

for (i=0;i<scoreList.length;i++){
  console.log(scoreList[i].name + ": " + scoreList[i].score)
}