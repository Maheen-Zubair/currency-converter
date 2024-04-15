#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1, //base currency
    EUR: 0.91,
    INR: 74.57,
    GBP: 0.76,
    PKR: 280
};
let user_Answer = await inquirer.prompt([
    {
        name: "from",
        message: "Choose currency you want to convert",
        type: "list",
        choices: ["USD", "EUR", "INR", "GBP", "PKR"]
    },
    {
        name: "to",
        message: "Choose the currency you want to convert to.",
        type: "list",
        choices: ["USD", "EUR", "INR", "GBP", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number"
    }
]);
let from_Amount = currency[user_Answer.from];
let to_Amount = currency[user_Answer.to];
let baseAmount = user_Answer.amount / from_Amount; // convert into base currency 
//its like, desire value (divided) by in which you have currency.
let convertedAmount = baseAmount * to_Amount;
// multiply the previous answer that you want to change into.
console.log("The amount you have enter=", user_Answer.amount);
console.log(`Convert currency into ${user_Answer.to}= ${Math.floor(convertedAmount)}`);
