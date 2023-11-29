const inquirer = require('inquirer');
const fs = require("fs")
const path = require("path")
// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
// const questions = ['Name?'];
const mediaArray = ["Facebook", "Wikipedia", "Medium"];
const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your README file title?",
  },
  {
    type: 'input',
    name: 'discription',
    message: "What's your Discription?",
  },
  {
    name: "fav_media",
    type: "list",
    message: "What is your favorite source for info?",
    choices: mediaArray,
    default: "Medium",
  },
];
inquirer.prompt(questions).then(answers => {
  console.log(`Created ${answers.name}!`);
  console.log(answers.discription);
  fs.writeFile(path.join(__dirname, "README.md"), `# ${answers.name} \n # ${answers.discription}`  , function(err){
      if(err) throw err
      console.log(answers.name);
    //   console.log("sucess")
  })
//   console.log(answers);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



