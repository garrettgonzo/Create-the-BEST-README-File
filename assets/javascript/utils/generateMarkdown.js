function renderLicenseBadge(license) {
  // console.log(license);
  if(license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if(license === "Boost"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  if(license === "BSD"){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } 
  if(license === "Creative Commons"){
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  }
  if(license === "Eclipse"){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
  if(license === "GNU"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if(license === "The Organization for Ethical Source"){
    return `[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)`
  }
  if(license === "IBM"){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  if(license === "ISC"){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(license === "Mozilla"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  if(license === "Open Data Commons"){
    return `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`
  }
  if(license === "Perl"){
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
  }
  if(license === "SIL"){
    return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`
  }
  if(license === "Unlicense"){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
  if(license === "WTFPL"){
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
  }
  if(license === "Zlib"){
    return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
  }
}

function generateMarkdown(data) {
  return`# ${data.name}
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  #### [Description](#description)
  #### [Description](#description)
  #### [Description](#description)
  #### [Description](#description)
  #### [Questions](#questions)
  
## description
#### Flashing lights (lights, lights)
\nFlashing lights (lights, lights)
\nFlashing lights (lights, lights)
\nFlashing lights (lights, lights)
\nFlashing lights (lights, lights)
\nShe don't believe in shooting stars
\nBut she believe in shoes and cars
\nWood floors in the new apartment
\nCouture from the store's department
\nYou more like "love to start shit"
\nI'm more of the, trips to Florida
\nOrdered the hors d'oeuvres, views of the water
\nStraight from the page of your favorite author
\nAnd the weather so breezy
\nMan, why can't life always be this easy
\nShe in the mirror dancing so sleazy
\nI get a call like, "Where are you Yeezy?"
\nAnd try to hit you with the ol-wu-wopte
\n'Til I got flashed by the paparazzi
\nDamn, these niggas got me
\nI hate these niggas more than a Nazi
\nAs I recall, I know you love to show off
\nBut I never thought that you would take it this far
\nBut what do I know?
\nFlashing lights (lights, light)
\nWhat do I know?
\nFlashing lights (lights, lights)
\nI know it's been a while, sweetheart
\nWe hardly talk, I was doing my thing
\nI know I was foul, baby
\nAyy, babe, lately, you've been all on my brain
\nAnd if somebody would've told me a month ago
\nFronting though, yo, I wouldn't wanna know
\nIf somebody would've told me a year ago
\nIt'll go get this difficult
\nFeeling like Katrina with no FEMA
\nLike Martin with no Gina
\nLike a flight with no Visa
\nFirst class with the seat back, I still see ya
\nIn my past, you on the other side of the glass
\nOf my memory's museum
\nI'm just saying, hey, Mona Lisa
\nCome home, you know you can't roam without Caesar
\nAs I recall, I know you love to show off
\nBut I never thought that you would take it this far
\nBut what do I know?
\nFlashing lights (lights, lights)
\nWhat do I know?
\nFlashing lights (lights, lights)
\nAs you recall, you know I love to show off
\nBut you never thought that I would take it this far
\nBut what do you know?
\nFlashing lights (lights, lights)
\nWhat do you know?
\nFlashing lights (lights, lights)
\nFlashing lights (lights, lights)
\nFlashing lights
${data.discription}

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

## questions
My GitHub Profile: https://github.com/${data.questions}
\nMy Email: ${data.email}

`;
}

module.exports = generateMarkdown;
