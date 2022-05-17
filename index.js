// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    }, 
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    }, 
    {
        type: "input",
        name: "installation",
        message: "What are the instructions for installation?"
    }, 
    {
        type: "input",
        name: "usage",
        message: "What are the instructions for usage for your project?"
    }, 
    {
        type: "checkbox",
        name: "license",
        message: "Select A License.",
        choices: ["Apache", "MIT", "GNU", "BSD"]
    }, 
    {
        type: "input",
        name: "contributions",
        message: "Enter instructions on how to contribute to your project."
    }, 
    {
        type: "input",
        name: "tests",
        message: "Enter tests information."
    }, 
    {
        type: "input",
        name: "credits",
        message: "Would you like to give any credit(s) to other individuals?"
    }, 
    {
        type: "input",
        name: "author",
        message: "Name(s) of the author(s) of this project."
    }, 
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    }, 
    {
        type: "input",
        name: "email",
        message: "What is the email you would like to use?"
    }
];

// This is the function that writes the README file
function writeInFile(fileName, data) {
    fs.writeFile(fileName + '.md', data, function (error) {
        if (error) {
            console.log(error)
        }
    })
};

// This is the asynchronous function to initialize the application
async function init() {
    const info = await inquirer.prompt(questions);
    writeInFile("README", generateMarkdown(info));
}

// Function call to initialize app
init();
