#! usr/bin/env node

import inquirer from "inquirer"

let to_dos = []
let condition = true;
while(condition){

let addTask = await inquirer.prompt(
    [{
        name : "todo",
        type : "input",
        message : "What do you want to add in your to_dos?",
    },
    {
        name : "add_more",
        message : "Would you like to add more in your to dos?",
        type : "confirm",
        default : "true",
    }]
);
to_dos.push(addTask.todo);
// condition = addTask.addMore;
console.log(to_dos);
condition = addTask.addMore;
}