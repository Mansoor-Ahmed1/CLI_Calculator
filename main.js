#! /usr/bin/env node
import inquirer from "inquirer";
let user_input = await inquirer.prompt([
    {
        "message": "Enter any Number",
        "type": "number",
        "name": "firstNum",
    },
    {
        "message": "Enter another Number",
        "type": "number",
        "name": "secondNum",
    },
    {
        "message": "What operation would you like to get performed between both numbers?",
        "type": "list",
        "name": "operation",
        "choices": ["Addition", "Multiplication", "Subtraction", "Division"]
    }
]);
if (user_input.operation == "Addition") {
    let output = user_input.firstNum + user_input.secondNum;
    console.log("The Sum of both numbers would be " + output);
}
else if (user_input.operation == "Multiplication") {
    let output = user_input.firstNum * user_input.secondNum;
    console.log("The Product of both numbers would be " + output);
}
else if (user_input.operation == "Subtraction") {
    let output = user_input.firstNum - user_input.secondNum;
    console.log("The Difference of both numbers would be " + output);
}
else if (user_input.operation == "Division") {
    let output = user_input.firstNum / user_input.secondNum;
    console.log("The Quotient of both numbers would be " + output);
}
else {
    console.log("Error, Try again Please");
}
