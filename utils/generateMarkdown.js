// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  license ? badge = `https://shields.io/badge/license-${data.license}-green` : "none"
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let licenseLink;

  switch(license) {
    case MIT: 
      licenseLink = "https://mit-license.org";
      break;
    case Apache:
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case GPLv2:
      licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
      break;
    case None:
      licenseLink = ""
      break
  }
  return licenseLink;
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
 ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
 ${data.installation}
  
  ## Usage
  
  ${data.use}

  Active URL:

  Screenshot:
  
  
  ## License

  ${data.license}
  
  
  ## Badges
  
  ![License Badge](https://shields.io/badge/license-${data.license}-green)
  
  
  
  ## How to Contribute
  
 ${data.contribution}
  
  ## Tests
  
  ${data.test}

`;
}

module.exports = generateMarkdown;
