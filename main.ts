#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

let myBalance = 10000; //Dollar

let myPin = 1234;

 let pinAnswer = await inquirer.prompt([
    {
      name: "pin" ,
      message: chalk.yellow ("Enter your pin "),
      type: "number"

    }
]);

if (pinAnswer.pin === myPin){
    console.log(chalk.green("Correct pin code!!!"));


     let OperationAns = await inquirer.prompt(
        [
        {
        name:"Operation",
        message: chalk.blueBright("Please select an operation:"),
        type: "list",
        choices: ["withdraw Amount", "check balance"]
    }])
    console.log(OperationAns);

    if (OperationAns.Operation === "withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
         {
            name: "withdrawMethod",
            type: "list",
            message: chalk.blueBright("Select a withdrawal method:"),
            choices: ["Fast Cash" , "Enter Amount"]

        }
    ])
    if(withdrawAns.withdrawMethod === "Fast Cash"){
    let fastCashAns = await inquirer.prompt([
        {
            name: "fastCash",
            type: "list",
            messsage: chalk.blueBright("Select Amount:"),
            choices: [1000, 2000, 5000, 10000, 20000, 50000]
    }
    ])
    if(fastCashAns.fastCash > myBalance){
        console.log(chalk.redBright("Insufficient Balance"))
    }
    else{
        myBalance -= fastCashAns.fastCash
        console.log(chalk.greenBright`${fastCashAns.fastCash} withdraw Successfully`)
        console.log(chalk.cyan`Your Remaining Balance is: ${myBalance}`)
    }
    }
    else if(withdrawAns.withdrawMethod === "Enter Amount"){    
        let amountAns = await inquirer.prompt([
        { name: "amount",
        type:"number",
        message:chalk.blueBright("Enter your amount to withdraw:"),

    
    }])
    if(amountAns.amount > myBalance){
        console.log(chalk.redBright("Insufficient Balance"))
    }
    else
      { myBalance -= amountAns.amount;
        console.log(chalk.greenBright`${amountAns.amount} Withdraw Successfully`)
       console.log(chalk.yellowBright`Your remaining balance is: ${myBalance}`)}
    }
    
    } else if (OperationAns.Operation === "check balance"){
        console.log(chalk.cyan`Your Amount balance is ${myBalance}`)
    }
}   
else{
    console.log(chalk.redBright("Incorrect pin number."))
}