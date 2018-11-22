/**
 *   @author Murdock, Matthew (murdockm@student.ncmich.edu)
 *   @version 0.0.1
 */

/*
Drive-Rite Insurance Company provides automobile insurance policies for drivers. Code the following:
A program that accepts insurance policy data, including a policy number, customer last name, customer first name,
birth date, premium due date (month, day, and year), and number of at-fault driver accidents
in the last three years. Calculate customer age and set monthly insurance premium using the following criteria:

Base price = $100
Age >15 && < 30 = + $20
Age >= 30 && < 45 +10
Age >=60 +30
Each at-fault accident = + 50
*/

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let custFn, custLn, custPolyN, bMonth, bDay, bYear, custAge, curMonth, curDay, curYear, dueMonth, dueYear, dueDay, aFdA, chargeAgeA, chargeAgeB, chargeAgeC, estimate;
const BASE_PRICE = 100;

function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    while (continueResponse === 1) {
        printWelcome();
        setCustFn();
        setCustLn();
        setCurMonth();
        setCurDay();
        setCurYear();
        printGreat();
        printNext();
        setBMonth();
        setBDay();
        setBYear();
        setCustAge();
        printGreat2();
        setAFdA();
        setContinueResponse();
    }
    setCustPolyN();
    setDueDay();
    setDueMonth();
    setDueYear();
    setChargeAgeA();
    setChargeAgeB();
    setChargeAgeC();
    setEstimate();
    printBio();
    printReport();
    printBye();
}

main();

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nGreat all done! Would you like to go back and correct anything? [0=no, lets finish!, 1=yes, I made a mistake somewhere.]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            return setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
}

function printWelcome() {
    console.log("Hello, welcome to Murdock's Auto-Insurance. The best rates around for low budget households!");
    console.log("Lets begin!")
}

function setCustFn() {
    custFn = PROMPT.question(`\nPlease type your first name: `)
}

function setCustLn() {
    custLn = PROMPT.question(`\nPlease type your last name: `)
}

function setCurMonth() {
    curMonth = Number(PROMPT.question("\nPlease insert the current month: [XX] "))
}

function setCurDay() {
    curDay = Number(PROMPT.question("\nPlease insert the current day: [XX] "))
}

function setCurYear() {
    curYear = Number(PROMPT.question("\nPlease insert the current year: [XXXX] "))
}

function printGreat() {
    console.log("\nGreat I'll get that into the system")
}

function printNext() {
    console.log("When prompted to, please complete the following fields.")
}

function setBMonth() {
    bMonth = Number(PROMPT.question("\nPlease insert the month you were born: [XX] "))
}

function setBDay() {
    bDay = Number(PROMPT.question("\nPlease insert the day you were born: [XX] "))
}

function setBYear() {
    bYear = Number(PROMPT.question("\nPlease insert the year you were born: [XXXX] "))
}

function setCustAge() {
    custAge = Number(PROMPT.question("\nTo verify, please insert your current age: "))
}

function printGreat2() {
    console.log("\nGreat we're almost there!")
}

function setAFdA() {
    aFdA = Number(PROMPT.question("\nWithin the past three years how many At-Fault-Driving Accidents have you been in? "))
}

function setCustPolyN() {
    custPolyN = PROMPT.question("\nPlease create a 4-12 digit Identification number, This number will be used later to access your information." +
        "An estimated report will then be printed after. ")
}

function setDueDay() {
    dueDay = 1
}

function setDueMonth() {
    if (curMonth === 12) {
        dueMonth = 1
    } else dueMonth = curMonth +1
}

function setDueYear() {
    if (curMonth === 12 && dueMonth === 1) {
        dueYear = curYear + 1
    } else  dueYear = curYear
}

function printBio() {
    console.log(`
    |=====Murdock's Auto-Insurance=====|
    
    Applicant:  ${custLn}, ${custFn}
    DOB:        ${bMonth}-${bDay}-${bYear}
    Age:        ${custAge}
    Date:       ${curMonth}-${curDay}-${curYear}
    AFDA:       ${aFdA}
    PlyNmb:     ${custPolyN}
    `)
}

function printReport() {
    console.log(`\n${custFn} ${custLn},Your estimated expense would be $${estimate}, and would be due on: ${dueMonth}-${dueDay}-${dueYear}`)
}

function setChargeAgeA() {
    if (custAge > 15 && custAge < 30) {
        chargeAgeA = 20
    } else chargeAgeA = 0
}

function setChargeAgeB() {
    if (custAge >= 30 && custAge < 60) {
        chargeAgeB = 10
    } else chargeAgeB = 0
}

function setChargeAgeC() {
    if (custAge >= 60) {
        chargeAgeC = 30
    } else chargeAgeC = 0
}

function setEstimate() {
    estimate = BASE_PRICE + chargeAgeC + chargeAgeA + chargeAgeB + (aFdA * 50)
}

function printBye() {
    console.log("Have a nice day!")
}
