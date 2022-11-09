// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `What is the title of your project?`,
        name: `title`,
    },
    {
        type: `input`,
        message: `Please enter a description of your project`,
        name: `description`,
    },
    {
        type: `input`,
        message: `What are the installation instructions?`,
        name: `installation`,
    },
    {
        type: `input`,
        message: `How is the project used?`,
        name: `use`,
    },
    {
        type: `input`,
        message: `Are there any contribution guidelines?`,
        name: `contribution`,
    },
    {
        type: `input`,
        message: `What are the test instructions?`,
        name: `test`,
    },
    {
        type: `list`,
        message: `What license is used?`,
        name: `license`,
        choices: ["MIT", "Apache", "GPLv2", "None"],
    },
    {
        type: `input`,
        message: `What is your Github username?`    ,
        name: `username`,
    },
    {
        type: `input`,
        message: `What is your e-mail address?`,
        name: `e-mail`,
    },
];

// TODO: Create a function to write README file
// fileName???
function writeToFile(data) {
    const readMe = generateMarkdown(data);
    fs.writeFile(`README.md`, readMe, (err) =>
    err ? console.error(err) : console.log(`README generated`));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        writeToFile(generateMarkdown(data));
    })
}

// Function call to initialize app
init();
