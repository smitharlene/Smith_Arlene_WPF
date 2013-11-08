/**
 * Created by Arlene on 11/7/13.
 */

// Arlene Smith
// November 7, 2013
// Expressions Industry


//Industry: Banking
//Scenario: A customer has a balance of $100 in his account.  Writes 3 checks in the amount of $50, $60 and $40 and overdraws his account. \n
// the bank has a $5 fee per day.  How much would the customer need to deposit after 3 days to have the account no longer negative.

var balance = 100;                      //givens
var checks = [50, 60, 40];
var fee = 5;
var daysOverdrawn = 3;

// Need to figure out how much he's overdrawn?  Amount need it to bring account out of negative ?

var amountOfChecksWritten = checks[0] + checks [1] + checks[2];  //adding the checks that the customer wrote using an array

var amountOverdrawn = amountOfChecksWritten - balance;          //figuring out the amount the customer is overdrawn the account

var result = amountOverdrawn + (fee * daysOverdrawn);          // calculating the amount of money the customer needs to deposit to have his account no longer negative.

balance = prompt("Customer Account Overdrawn Calculator \nWhat\'s the customer\'s previous balance?"); //prompt for customer to put his previous balance

checks = prompt("What\'s the amount of checks written since the previous balance?");  //prompt for customer to input the amount of checks written since his previous balance

fee = prompt("Amount of Bank Fees");   // prompt to input bank fee

daysOverdrawn = prompt("How many days has the account been overdrawn?");  //prompt to input amount of days overdrawn

console.log("The customer is overdrawn by $" + amountOverdrawn + ".00" + ". He will need to deposit $"+ result + ".00" + " "+ "to bring his account out of a negative balance.");



