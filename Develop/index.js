//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//Create an array of questions for user input
//const questions = [];
inquirer
    .prompt ([
        {
            type: "input",
            message: "What is the title of your project? (Required)",
            name: "title", 
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    return false;
                }
            }  
        },
        {
            type: "input",
            message: "Why did you build this project?",
            name: "why",
        },
        {
            type: "input",
            message: "What problem does it solve?",
            name: "problem",
        },
        {
            type: "input",
            message: "What did you learn?",
            name: "learn",
        },
        {
            type: "input",
            message: "How can a user install this application?",
            name: "install",
        },
        {
            type: "input",
            message: "Add a screenshot using ![alt text](.png)",
            name: "screenshot",
        },
        {
            type: "input",
            message: "What are the key features of the application?",
            name: "features",
        },
        {
            type: "input",
            message: "List all collaborators and links to their Github Profile",
            name: "contributors",
        },
        {
            type: "input",
            message: "Were any third-party assets or tutorials used that require attribution?",
            name: "thirdparty",
        },
        {
            type: "input",
            message: "How can a user test the application?",
            name: "test",
        },
        {
            type: "list",
            message: "Choose a license for the application",
            name: "license",
            choices: ['Unlicense', 'Apache', 'GNU General Public License', 'MIT License' ]
        },
        {
            type: "input",
            message: "How can other developers contribute?",
            name: "contribute",
        },
        {
            type: "input",
            message: "Email address:",
            name: "email",
        },
        {
            type: "input",
            message: "Github username:",
            name: "github",
        }
    ]).then((data) => {
        console.log(data);
        fs.writeFile('README.md', generateMarkdown(data),
        error => {
            if (error) {
                console.log('Input all the data')
            }
            console.log('Your README was generated')
        }
        )
    })

function writeToFile(fileName, data) {}

// Function to initialize app
function init() {}

// Function call to initialize app
init();
