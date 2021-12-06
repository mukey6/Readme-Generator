// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  ![badge](https://img.shields.io/badge/License-${license}-green)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `
  This project uses the following license: [${license}](https://choosealicense.com/licenses/${license}/)
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = `## License
  `;

  let licenseLink = renderLicenseLink(license);
  let licenseBadge = renderLicenseBadge(license);

  licenseSection += licenseLink;
  licenseSection += licenseBadge;

  return licenseSection;
}

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

## Tests

## Questions
If you have any Questions, reach me at [My Email](${data.email})

[My Github](https://github.com/${data.github})
    

`;

  if (data.confirmContribute) {
    finalMarkdown += `## Contributing 
  ${data.contribution}`;
  }

  if (data.license.length !== 0) {
    let license = data.license[0];
    let licenceSection = renderLicenseSection(license);
    finalMarkdown += licenceSection;
  }
  return finalMarkdown;
}

module.exports = generateMarkdown;

// How would i add the badge to the top of the page ?
