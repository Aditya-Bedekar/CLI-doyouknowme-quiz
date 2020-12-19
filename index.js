// DO YOU KNOW ME QUIZ//
var readlineSync = require('readline-sync');
var  username = readlineSync.question('Whats your name?');
console.log("Hey "+username+'! welcome to DO YOU KNOW ADITYA');
var score =0;


var highscore =
{
  name:'Gayatri',
  score:'14',
  name2:'Ashish',
  score2:'12',
  name3:'Meghna',
  score3:'10',
}

function quiz(question,answer)
{
  var useranswer=readlineSync.question(question);
if(useranswer == answer){
  console.log('Correct!');
  score=score+2;
  }
else{
  console.log('Incorrect');
}
 console.log("Current score is",score);
 console.log("----------------------------------------");
}


var questions = [
  {question:"Who is my favourite cricketer?\n",
  answer:"ajinkya rahane"},

  {question:"Which city do I live in?\n",
  answer:"thane"},
  
  {question:"Which series do i relate to the most?\n",
  answer:"big bang theory"},
  
  {question:"Whats my nickname?\n",
  answer:"bedu"},
  
  {question:"I listen to songs from this language the most,which is it?\n",
  answer:"hindi"},

  {question:"Am I a dog lover?\n",
  answer:"yes"},
   
  {question:"Which engineering college do study at?\n",
  answer:"vesit"},

  {question:"Whats  my dogs name?\n",
  answer:"mani"},  
  ];
  
for(i=0;i<questions.length;i++)
{
var currentq = questions[i];

quiz(currentq.question,currentq.answer);

}
console.log('COOL,you completed the quiz,your score was '+score);
console.log('Check out these high scores!\n');
console.log('Highest scorer:'+highscore.name);
console.log('High score:'+highscore.score);
