#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Initial balance in dollars
const myPin = 1234; // User's PIN



const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your 4 digit pin",
        type: "number"
    }
]);

// Checking if the entered PIN is correct
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!"); // Displaying a success message if the PIN is correct

    const operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["Fast Cash", "Custom Cash", "Check Balance"] // Providing options for the user
        }
    ]);

    console.log(operationAnswer); // Displaying the user's selected operation

    // Handling the 'Fast Cash' operation
    if (operationAnswer.operation === "Fast Cash") {
        // Defining predefined amounts for fast cash
        const fastCashOptions = [1000, 3000, 5000];

        const fastCashAnswer = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select fast cash amount",
                type: "list",
                choices: fastCashOptions // Providing predefined fast cash options
            }
        ]);

        const amount = fastCashAnswer.fastCash;
        if (amount > myBalance) {
            console.log("Insufficient balance!"); // Displaying an error message for insufficient balance
        } else {
            myBalance -= amount; // Deducting the fast cash amount from the balance
            console.log("Your remaining balance is " + myBalance); // Displaying the updated balance
        }
    } 
    // Handling the 'Custom Cash' operation
    else if (operationAnswer.operation === "Custom Cash") {
        const customCashAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter custom cash amount",
                type: "number"
            }
        ]);

        const amount = customCashAnswer.amount;
        if (amount > myBalance) {
            console.log("Insufficient balance!"); // Displaying an error message for insufficient balance
        } else {
            myBalance -= amount; // Deducting the custom cash amount from the balance
            console.log("Your remaining balance is " + myBalance); // Displaying the updated balance
        }
    }
    // Handling the 'Check Balance' operation
    else {
        console.log("Your current balance is " + myBalance); // Displaying the current balance for the 'Check Balance' operation
    }
} 
else {
    console.log("Wrong pin code"); // Displaying an error message for incorrect PIN
}