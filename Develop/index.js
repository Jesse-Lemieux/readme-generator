//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer to generate questions
inquirer.prompt(
  [
    {
      type: 'input',
      message: "What is the title of your project?",
      name: 'title',
      validate: (value)=> { if(value){return true} else {return 'You must enter a value.'}},
    },
    {
      type: 'input',
      message: "Breifly describe your project.",
      name: 'desc',
      validate: (value)=> { if(value){return true} else {return 'You must enter a value.'}},
    },
    {
      type: 'input',
      message: "How can I install your project?",
      name: 'install',
      validate: (value)=> { if(value){return true} else {return 'You must enter a value.'}},
    },
    {
      type: 'input',
      message: "Describe information for usage of you project.",
      name: 'usage',
      validate: (value)=> { if(value){return true} else {return 'You must enter a value.'}},
    },
    {
      type: 'input',
      message: "Describe the contribution guidelines of your project.",
      name: 'cont',
      validate: (value)=> { if(value){return true} else {return 'You must enter a value.'}},
    },
    {
      type: 'input',
      message: "Provide some intructions for testing for your project.",
      name: 'test',
      validate: (value)=> { if(value){return true} else {return 'You must enter a value.'}},
    },
    {
      type: 'input',
      message: "Github username:",
      name: 'git',
      validate: (value)=> { if(value){return true} else {return 'You must enter a value.'}},
    },
    {
      type: 'input',
      message: "Email:",
      name: 'email',
      validate: (value)=> { if(value){return true} else {return 'You must enter a value.'}},
    },
    {
      type: 'list',
      message: "What license did you use?",
      name: 'lisc',
      choices: ['MIT', 'GNU', 'Apache', 'ISC', 'N/A']
    }
  ]
  
).then(({
  title,
  desc,
  install,
  usage,
  cont,
  test,
  git,
  email,
  lisc,
  liscLink
})=>{
  
const template = 
`# ${title} [![License: ${lisc}](${generateLiscLink(lisc)})
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#Usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)

## Description
${desc}

## Installation
${install}

## Usage
${usage}

## Contribution
${cont}

## Testing
${test}

## Questions
Contact me at:
My Github: ${git}
Email: ${email}`;
createNewFile(title, template);
}
)
function generateLiscLink(lisc){
  if(lisc = 'MIT'){const liscLink = 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'; return liscLink}
      if(lisc = 'GNU'){const liscLink = 'https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0'; return liscLink}
      if(lisc = 'Apache'){const liscLink = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0'; return liscLink}
      if(lisc = 'ISC'){const liscLink = 'https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC'; return liscLink}
      else{}
}
function createNewFile(fileName,data){
  fs.writeFile(`./dist/${fileName.toLowerCase().split(' ').join('')}.md`,data, (err)=>{
    if(err){
      console.log(err)
    }
    console.log('Your readme has been generated!')
  })
}


