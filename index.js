const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of your project?',
        default: 'My Project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of your project?',
        default: 'This is my current project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use it? ',
    
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install it?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license should it be under?',
        choices: ["MIT", "Apache","GPL", "None", "Other"],
        filter: (val) =>{
            switch(val) {
                case 'MIT':
                  return [val, 'https://choosealicense.com/licenses/mit/'];
                case "Apache":
                  return [val, 'https://choosealicense.com/licenses/apache-2.0/' ];
                case 'GPL':
                    return [val, 'https://choosealicense.com/licenses/gpl-3.0/'];
                default:
                   return [val, '#license']
              }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contributing guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err) => {
        if (err) throw err;
        console.log('README.md has been created!')
});
};

// function to initialize program
function init() {
    console.log("Let's create a README.md:")
   inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile('README.md',generateMarkdown(answers))
            })
        .catch(error => {
            if(error.isTtyError){

            } else {

            }
        });

}

// function call to initialize program
init();


