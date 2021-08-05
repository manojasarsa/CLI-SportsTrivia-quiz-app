var readlineSync = require("readline-sync");
const chalk = require('chalk');

const log = console.log

var score = 0;

log("\t\t"+ chalk.green("Welcome to Sports Trivia!!") + "\n" );

var userName = readlineSync.question("What is your name? : ");


log("\nHello " + chalk.yellow(userName) + ", the quiz will have" + chalk.yellow(" 5 ") + "questions and each question will have" + chalk.yellow(" 4 ") + "options. \n ");

log(chalk.red("For each correct ans => +5 \nFor each wrong ans => -2"));
log("\nPlease choose one option from" + chalk.green(" [a/b/c/d] ") + ".. Let's go!!");
log("\n-----------------------------------------------------\n");

// function 

function sportsQuiz(ques,ans,opt) {
  log(ques);
  log("\n"+chalk.green(opt) + "\n");
  var userAns = readlineSync.question("Your response : ");

  if (userAns.toUpperCase() === ans.toUpperCase())
  {
    log(chalk.blue("\t\t             You're Right!"));
    score+=5;
  }
  else {
    log(chalk.red("\t\t             Oops! You're Wrong!"));
    score-=2;
  }
  log("Your score is : "+ chalk.yellow(score));
  log("\n -----------------------------------------------------\n");
}

// array of objects

var quizQues = [
  {question: "1. The National Game of Japan is : ", 
  options: "a) Tennis   b) Karate   c) Ice Hockey   d) Sumo Wrestling",
  answer: "d"},

  {question: "2. Where did MS Dhoni make his ODI debut? : ", 
  options: "a) Chiitagong   b) Dhaka   c) Hyderabad   d) Ranchi" ,
  answer: "a"},

  {question: "3. Double Fault is associated with which game : ", 
  options: "a) Golf   b) Tennis   c) Chess   d) Football",
  answer: "b"},

  {question: "4. Boat race is a famous festival game of : ", 
  options: "a) Tamil Nadu   b) Goa   c) Kerala   d) Assam",
  answer: "c"},

  {question: "5. The term 'Gambit' is associated with : ", 
  options: "a) Basket Ball   b) Karate   c) Baseball   d) Chess",
  answer: "d"}
]

for (var i=0; i<quizQues.length ; i++)
{
  sportsQuiz(quizQues[i].question, quizQues[i].answer, quizQues[i].options);

}
log(chalk.yellow("CONGRATS! You SCORED : ") + chalk.yellow(score));

log("Thank you for playing, hope you liked it! Check out the high scores below. If you want to be there, ping me and I'll update it.\n ")

log(chalk.green("Jhanvi : ") + chalk.yellow("18 "));

log(chalk.green("Ankit : ") + chalk.yellow("25 "));
