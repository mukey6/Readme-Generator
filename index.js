// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
// inquirer.prompt(questions).then((answers) => {
//     console.log(answers)
// })

// // // TODO: Create a function to write README file
async function writeToFile(fileName, data) {
  try {
    const fileWritten = await fs.writeFile(`./${fileName}.md`, data);
    console.log("yay it worked", fileWritten);
  } catch (error) {
    console.log(err);
  }
}

// // // TODO: Create a function to initialize app
async function init() {
  const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the name of your project",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use ",
    },
    {
      type: "input",
      name: "imageDescription",
      message: "Enter description of the image ",
    },
    {
      type: "input",
      name: "image",
      message: "Enter the relative filepath for image (eassets/images/screenshot.png)",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Select a license? ",
      choices: ["mit", "apache-2.0 "],
    },

    {
      type: "confirm",
      name: "confirmContribute",
      message: "would you like to add contribution details?",
      default: true,
    },
    {
      type: "input",
      name: "contribution",
      message: "enter contributor names",
      when: ({ confirmContribute }) => confirmContribute,
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your github username",
    },
  ];

  const answers = await inquirer.prompt(questions);
  console.log(answers);
  const markdown = generateMarkdown(answers);
  console.log(markdown);
  writeToFile("myReadMe", markdown);
}

// // // Function call to initialize app
init();
