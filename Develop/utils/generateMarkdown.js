// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("inside gen ", data);
  let finalMarkdown = `# ${data.title} 

## Description
   ${data.description}
   
## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)

## Installation
  ${data.installation}

## Usage
${data.usage}

## License
![badge](https://img.shields.io/badge/License-${data.license}-green)

This project uses the following license: [${data.license}](https://choosealicense.com/licenses/${data.license}/)



## Tests

## Questions
If you have any Questions, reach me at [Email](${data.email})

[My Github](${data.github})
    

`;
  if (data.confirmContribute) {
    finalMarkdown += `## Contributing 
  ${data.contribution}`;
  }
  return finalMarkdown;
}

module.exports = generateMarkdown;
