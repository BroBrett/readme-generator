let licenseBadge = '';

function licenseRender(data) {
  for (const license of data.license) {
    if (license === 'MIT') {
      licenseBadge += '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
    } else if (license == 'Apache') {
      licenseBadge += '[![License: Apache v2](https://img.shields.io/badge/License-Apache%202.0-red.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license == 'BSD') {
      licenseBadge += '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-yellow.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else if (license == 'GNU') {
      licenseBadge += "[![License: GNU v2](https://img.shields.io/badge/License-GNU%20v2-green.svg)](https://opensource.org/licenses/GPL-2.0)";
    }
  }
  return licenseBadge;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${licenseRender(data)}

  ## Description
  ${data.descritpion}


  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)


  # Installation:
  ${data.installation}


  ## Usage:
  ${data.usage}


  ## License:
  ${data.license}


  ## Contributions:
  ${data.contributions}


  ## Tests:
  ${data.tests}


  ## Questions?
  If you have any questions regarding the application, feel free to reach out to me directly at ${data.email}.
  To view some of my other applications, check out my Github page at [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
