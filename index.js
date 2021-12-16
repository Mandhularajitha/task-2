var readline=require("readline-sync");
var chalk=require("chalk")
var username=readline.question(chalk.cyan("what is your name:"))
var score=0
console.log(chalk.yellow("welcome to Rajitha's quiz"))
console.log(chalk.blue("welcome: "+username))
function check(question,answer,options){
  console.log(chalk.red(question))
  for(var i=0;i<options.length;i++){
  console.log(chalk.blue(i+1,options[i]))
}
  var useranswer=readline.questionInt("select your options:")
  if (useranswer===currentquestion.answer){
    console.log(chalk.yellowBright("you are right"))
    score++
  }
  else{
    console.log(chalk.red("you are wrong"))
  }
    console.log(chalk.bgGreen(" your current score "+score))
    console.log("____")
  }

  var questionBank=[
    {question:"Entomology is the science that studies",
        options:["Behavior of human beings","Insects","The origin and history of technical and scientific terms","The formation of rocks"],
        answer:2
    
  },
  {
    question:"Eritrea, which became the 182nd member of the UN in 1993, is in the continent of?",
        options:["Asia","Africa","Europe","Australia"],
        answer:2
  
  },
  {
    question:"Garampani sanctuary is located at?",
        options:["Gangtok, Sikkim","Kohima, Nagaland","Diphu, Assam","Junagarh, Gujarat"],
        answer:3

  },{
    question:"For which of the following disciplines is Nobel Prize awarded??",
          options:["Physics and Chemistry","Physiology or Medicine","Literature, Peace and Economics","All of the above"],
          answer:4
  },
{
  question:"Hitler party which came into power in 1933 is known as?",
      options:["Labour Party","Nazi Party","Ku-Klux-Klan","Democratic Party"],
      answer:2

}]
for (var i=0;i<questionBank.length;i++){
var currentquestion=questionBank[i]
check(currentquestion.question,currentquestion.answer,currentquestion.options)

}

console.log(chalk.blueBright("boom!,if your get  high score send me a screenshot tell me i will update"))
console.log(chalk.bgYellowBright("your current scoreis",score))