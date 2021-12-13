// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown.js");

// // // TODO: Create a function to write README file
async function writeToFile(fileName, data) {
  try {
    const fileWritten = await fs.writeFile(`./src/${fileName}.md`, data);
  } catch (error) {}
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
      // Create a folder called assets then images folder inside of it and store the image there
      type: "input",
      name: "image",
      message:
        "Enter the relative filepath for image (./assets/image/screenshot.png)",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Select a license? ",
      choices: ["mit", "apache-2.0", "mpl-2.0", "lgpl-3.0"],
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
      message: "How can contributions be done?",
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
    {
      type: "input",
      name: "test",
      message: "Provide with test instruction",
    },
  ];
  // the answers variable waits for the prompts to be answered
  const answers = await inquirer.prompt(questions);

  // the markdown contains the data that is passed in the generateMarkDown function
  const markdown = generateMarkdown(answers);

  // this creates a new file and the data that was obtained
  writeToFile("myReadMe", markdown);
}

// // // Function call to initialize app
init();
