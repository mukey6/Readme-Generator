// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs/promises')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
// inquirer.prompt(questions).then((answers) => {
//     console.log(answers)
// }) 


// // // TODO: Create a function to write README file
async function writeToFile(fileName, data) {
   const fileWritten = await fs.writeFile(`./${fileName}.md`,data )
//**look up error handling**
    // fs.writeFile('/Users/joe/test.txt', content, err => {
    //     if (err) {
    //       console.error(err)
    //       return
    //     }
    //     //file written successfully
    //   })
}
  

// // // TODO: Create a function to initialize app
async function init() {
    const questions = [
        {
            type: 'input',
            name:'title',
            message: 'What is the name of your project'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project'
        }, 
        {
            type : 'input',
            name:'instal',
            message:'Provide with steps'
        },
        {
            type : 'input',
            name:'license',
            message:'Provide list of license'
        }
    ];
    const answers = await inquirer.prompt(questions);
console.log(answers)
const markdown = generateMarkdown(answers) 
console.log(markdown)
writeToFile('myReadMe', markdown)
}

// // // Function call to initialize app
init();
