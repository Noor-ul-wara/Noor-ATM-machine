#!/usr/bin/env node
import inquirer from "inquirer";
//Initialize user balance and pin code
let myBalance=23000;
let myPin=1999;
//print the message
console.log("noor-ul-wara-Atm machine");
let pinAnswer = await inquirer.prompt([{

    name:"pin",
    type:"number",
    message:"Enter your pin code: "
}

]);
if(pinAnswer.pin===myPin){
    console.log("pin is correct,Login successfully!");
    //console.log("current account balance is ${myBalance}" );
    let operationAns=await inquirer.prompt([
        {
            name:"operation",
            type:"list",
            message:"select an operation:",
            choices:["Withdraw Amount","Check Balance"]
        }
    ]);
    if(operationAns.operation === "Withdraw Amount"){
        let amountAns=await inquirer.prompt([

            {
                name:"amount",
                type:"number",
                message:"Enter the amount to withdraw:"

            }
        ]);
        if(amountAns.amount > myBalance){
            console.log("Insufficient balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount}Withdraw successfully`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }



    }
    else if(operationAns.operation==="Check Balance"){
        console.log(`Your Account Balance is : ${myBalance}`);
    }
        
}
else{
    console.log("pin is Incorrect,Try Again!");
}

