function renderLicenseBadge(license) {
  if(license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
}

function renderLicenseBadge(license) {
  if(license === "Boost"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
}

function renderLicenseBadge(license) {
  if(license === "BSD"){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
}

function renderLicenseBadge(license) {
  if(license === "Creative Commons"){
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  }
}

function renderLicenseBadge(license) {
  if(license === "Eclipse"){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
}

function renderLicenseBadge(license) {
  if(license === "GNU"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
}

function renderLicenseBadge(license) {
  if(license === "The Organization for Ethical Source"){
    return `[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)`
  }
}

function renderLicenseBadge(license) {
  if(license === "IBM"){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
}

function renderLicenseBadge(license) {
  if(license === "ISC"){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
}

function renderLicenseBadge(license) {
  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}

function renderLicenseBadge(license) {
  if(license === "Mozilla"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

function renderLicenseBadge(license) {
  if(license === "Open Data Commons"){
    return `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`
  }
}

function renderLicenseBadge(license) {
  if(license === "Perl"){
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
  }
}

function renderLicenseBadge(license) {
  if(license === "SIL"){
    return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`
  }
}

function renderLicenseBadge(license) {
  if(license === "Unlicense"){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
}

function renderLicenseBadge(license) {
  if(license === "WTFPL"){
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
  }
}

function renderLicenseBadge(license) {
  if(license === "Zlib"){
    return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
  }
}

function generateMarkdown(data) {
  return`# ${data.name}
${renderLicenseBadge(data.license)}

## Description
${data.discription}

## Table of Contents
${data.tableOfContents}
${data.discription}
${data.usage}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licenced under the ${data.license} license

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
My GitHub Profile: https://github.com/${data.questions}
\nMy Email: ${data.email}

`;
}

module.exports = generateMarkdown;
