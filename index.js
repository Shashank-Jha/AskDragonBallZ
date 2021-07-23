
var readlinesync = require('readline-sync');
var figlet = require('figlet');
var chalk = require('chalk');

console.log(chalk.bgRedBright(figlet.textSync("DragonBall Z \n")));
//Input userName
var userName = readlinesync.question("What is your Name ? ");

var score = 0;

console.log(chalk.bgYellow("\nWelcome " + userName + " to DBZ \n"));
//quiz game function
function play(question, answer) {
  
  var ans = readlinesync.question(question);
  if (ans.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreenBright("Correct Answer !!!"));
    score = score + 1;

  }
  else {
    console.log(chalk.bgRedBright("Wrong Answer X !!!"));

  }
  console.log(chalk.bgBlue("Current Score : " + score));
  console.log(chalk.red("\n=========================\n"));
}

var questions = [
  {
    question: "How many DragonBalls are there? ",
    answer: "7"
  },
  {
    question: "First Saiyan to become SuperSaiyan 2? (choose from a,b,c,d) \n a. Goku \n b.Vegeta \n c.Gohan \n d. Trunks\n Your Ans : ",
    answer: "c"
  },
  {
    question: "On Which Planet Goku learnt Instant Transmission? (choose from a,b,c,d) \n a. Planet Vegeta \n b.Planet Namek \n c.Planet Earth \n d. Planet Yardrat\n Your Ans : ",
    answer: "d"
  }
  
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i].question;
  var currentAnswer = questions[i].answer;
  play(currentQuestion, currentAnswer);
}

console.log(chalk.yellow("Your Score : " + score)+"\n");
console.log(chalk.red(figlet.textSync("Thanks For Playing ! \n")));