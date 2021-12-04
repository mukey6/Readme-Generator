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
  console.log("inside gen ", data)
   const finalMarkdown = 
`# ${data.title} 

# Description
   ${data.description}
   
# Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)

# Installation
    ${data.instal}

# Usage

#License
${data.license}

# Contributing

# Tests

# Questions
    ${data.email}
    ${data.github}
    
`;
return finalMarkdown
}

module.exports = generateMarkdown;
