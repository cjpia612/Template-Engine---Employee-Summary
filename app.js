const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questions = [
    {
        type: "list",
        name: "role",
        message: "Enter the team member's role",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "name",
        message: "Enter team member's name"
    },
    {
        type: "input",
        name: "id",
        message: "Enter team member's ID number"
    },
    {
        type: "input",
        name: "email",
        message: "Enter team member's email address"
    },
];

const manager = {  
    type: "input",
    name: "officeNumber",
    message: "Enter Manager's office number"
};
const engineer = {  
    type: "input",
    name: "github",
    message: "Enter Engineer's GitHub username"
};
const intern = {  
    type: "input",
    name: "school",
    message: "Enter school Intern attends"
};

const addEmployee = {
    type: "confirm",
    name: "newEmployee",
    message: "Add another employee if desired"
}
const teamMember = [];

async function init() {
    const regAnswers = await inquirer.prompt(questions);
    const {name, id, email, role} = regAnswers;
    if(role === "Manager") {
        const managerResponse = await inquirer.prompt(manager);
        const officeNumber = managerResponse.officeNumber;
        const theManager = new Manager(name, id, email, officeNumber);

        teamMember.push(theManager);
    } else if(role === "Engineer") {
        const engineerResponse = await inquirer.prompt(engineer);
        const github = engineerResponse.github;
        const theEngineer = new Engineer(name, id, email, github);

        teamMember.push(theEngineer);
    }else if(role === "Intern") {
        const internResponse = await inquirer.prompt(intern);
        const school = internResponse.school;
        const theIntern = new Intern(name, id, email, school);

        teamMember.push(theIntern);
    } 



};

init();
