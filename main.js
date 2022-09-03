//Write your code here
const input = require('sync-input');

let oneUSD = {
    "USD": 1,
    "JPY": 113.5,
    "EUR": 0.89,
    "RUB": 74.36,
    "GBP": 0.75,
}

function intro() {
    console.log("Welcome to Currency Converter!");
    Object.entries(oneUSD).forEach(entry => {
        const [key, value] = entry;
        console.log(`1 USD equals ${value} ${key}`);
    })
}

intro()
alertUser()

function alertUser() {

    let answer = Number(input("What do you want to do?\n1-Convert currencies 2-Exit program\n"))

    while (answer === 1){
        runExchange();
        alertUser();
    }
    if (answer === 2) {
            console.log("Have a nice day!")
        return
    }
    if(answer > 2 || isNaN(answer)) {
        console.log("Unknown input")
            alertUser();
    }
}

function runExchange() {
    console.log("What do you want to convert?");
    let from = input("From: ").trim().toUpperCase();
    if (!(from in oneUSD)) {
        console.log("Unknown currency");
        alertUser()
    }

    let to = input("To: ").toUpperCase();
    if (!(to in oneUSD)) {
        console.log("Unknown currency");
        alertUser()
    }

    let amount = Number(input("Amount: "));
    if (isNaN(amount)) {
        console.log("The amount has to be a number")
        return;
    } else if (!(amount >= 1)) {
        console.log("The amount cannot be less than 1");
        return;
    }

    function switchTo(to) {
        let rate;
        switch (to) {
            case "USD":
                rate = 1;
                break;
            case "JPY":
                rate = 113.5;
                break;
            case "EUR":
                rate = 0.89;
                break;
            case "RUB":
                rate = 74.36;
                break;
            case "GBP":
                rate = 0.75;
                break;
        }
        return rate;
    }

    console.log(`Result: ${amount} ${from} equals ${(amount / switchTo(from) * switchTo(to)).toFixed(4)} ${to}`)
    alertUser()
}


// console.log("What do you want to do?\n" +
//     "1-Convert currencies 2-Exit program")
// What do you want to do?
// 1-Convert currencies 2-Exit program
// 1 or 2
// if 1 true convert currency
// 2 false exit
// unknown input
// wrong input -> keep asking for the input
// exit: false ('Have a nice day!')

