const inquirer = require('inquirer');
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
// const questions = ['Name?'];
const mediaArray = ["MIT", "GNU", "APACHE"];
const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your project title name?",
  },
  {
    name: 'discription',
    type: 'input',
    message: "Provide a short description explaining the what, why, and how of your project.",
  },
  {
    name: 'tableOfContents',
    type: 'input',
    message: "If your README is long, add a table of contents to make it easy for users to find what they need.",
  },
  {
    name: 'installation',
    type: 'input',
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    name: 'usage',
    type: 'input',
    message: "Provide instructions and examples for use. Include screenshots as needed.\n To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.",
  },
  {
    name: 'license',
    type: "list",
    message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
    choices: mediaArray,
    default: "Medium",
  },
  {
    name: 'contributing',
    type: 'input',
    message: "List your collaborators, if any, with links to their GitHub profiles. \n If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. \n If you followed tutorials, include links to those here as well.",
  },
  {
    name: 'tests',
    type: 'input',
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
  },
  {
    name: 'questions',
    type: 'input',
    message: "Any contact information?",
  },
  // {
  //   name: "fav_media",
  //   type: "list",
  //   message: "What is your favorite source for info?",
  //   choices: mediaArray,
  //   default: "Medium",
  // },
];
inquirer.prompt(questions).then(answers => {
  console.log(`Created ${answers.name}!`);
  // console.log(answers.discription);
  const markDown = generateMarkdown(answers)
  console.log(markDown)
  fs.writeFile(path.join(__dirname, "README.md"), `# ${answers.name} \n\n## ${answers.discription} \n\n## ${answers.tableOfContents} \n\n## ${answers.installation} \n\n## ${answers.usage} \n\n## ${answers.license} \n\n## ${answers.contributing} \n\n## ${answers.tests} \n\n## ${answers.questions}`, function(err){
      if(err) throw err
      // console.log(answers.name);
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



// function add (a,b){
//   return a+b
// }

// var someNum = 55

// add(someNum,2)