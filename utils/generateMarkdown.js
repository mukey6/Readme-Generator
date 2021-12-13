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

  licenseSection += licenseLink;

  return licenseSection;
}

function renderTest(test) {
  if (!test) {
    return "";
  } else {
    return `## test 
${test}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let finalMarkdown = `# ${data.title} 
${data.license.length !== 0 ? renderLicenseBadge(data.license) : ""}
## Description
   ${data.description}
   
## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Questions](#Questions)

## Installation
  ${data.installation}

${data.license.length !== 0 ? renderLicenseSection(data.license[0]) : ""}

## Usage

${data.usage}
![${data.imageDescription}](${data.image})


## Questions
If you have any Questions, reach me at [Email](${data.email}), [Github](https://github.com/${data.github})
    
${renderTest(data.test)} 
`;

  if (data.confirmContribute) {
    finalMarkdown += `## Contributing 
  ${data.contribution}`;
  }

  return finalMarkdown;
}

module.exports = generateMarkdown;
