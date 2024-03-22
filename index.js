#! user/bin/node 
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 100 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 100 : "
    },
]);
if (answer.userGuessedNumber === randomnumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number!");
}
console.log(randomnumber);
