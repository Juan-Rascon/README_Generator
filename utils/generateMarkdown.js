

function generateMarkdown(data) {
  const title = `# ${data.title}\n`;
  const badge = `\n![Project license badge](https://img.shields.io/badge/license-${data.license[0]}-brightgreen)\n`
  const toc = `## Table of Contents\n* [Description](#description)\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Licenses](#license)\n* [Questions](#questions?)\n\n`;
  const desc = `## Description\n${data.description}\n\n`;
  const ins = `## Installation\n>${data.installation}\n\n`;
  const usg = `## Usage\n>${data.usage}\n\n`;
  const cont = `## Contributing\n${data.contributing}\n\n`;
  const test = `## Tests\n>${data.tests}\n\n`;
  const lic = `## License\n[${data.license[0]}](${data.license[1]})\n\n`;
  const ques = `## Questions?\n If you have any questions, please reach out to me via email.\n##### Email: ${data.email}\n##### Github: [${data.username}](https://github.com/${data.username})`;
  const complete = title + badge + toc + desc + ins + usg + cont + test + lic + ques;
  return complete;
}

module.exports = generateMarkdown;

