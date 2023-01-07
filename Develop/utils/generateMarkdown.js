// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  if (license === 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
  if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'GNU General Public License') {
    return `[![License: GNU General Public License](https://www.gnu.org/graphics/gplv3-127x51.png)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

  ${data.why}
  ${data.problem} 
  ${data.learn}

 ## Table of Contents

 - [License](#license)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Features](#features)
 - [Credits](#contributors--credit)
 - [Tests](#tests)
 - [Questions](#questions)

 ## Installation

To install this application, follow these steps:
 ${data.install}

## Usage

## License

 ${renderLicense(data.license)} 

## Contributors & Credit

 ${data.contributors}
 ${data.thirdparty}

## Tests

${data.test}

## Questions
 Please email me, if you have any questions
${data.email}, or visit my GitHub account at
[${data.github}](https://github.com/${data.github})

## Features

 ${data.features}

## How to Contribute

 ${data.contribute}

`;
}

module.exports = generateMarkdown;
