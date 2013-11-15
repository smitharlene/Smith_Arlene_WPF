/**
 * Created by Arlene on 11/14/13.
 */

//Arlene Smith
//November 14, 2013
//Conditionals Industry


//Banking Industry

//A customer comes in to open an account.  He tells me that he would like either a checking, savings or money market account.
//Per balance requirements, he will need to keep a certain amount of money in the account.
//With his balance which account would be best for him?

var customerBalance = 200;
var reqBalanceChecking = 100;
var reqBalanceSavings = 500;

// If balance is less than $100 the customer should open a checking account.
if(customerBalance <= reqBalanceChecking ){
    console.log("With a balance of $" + customerBalance + ", the customer should open a checking account.");

// if the customers balance is between $101 to $500, he should open a savings account.
}else if(customerBalance <= reqBalanceSavings ){
    console.log("With a balance of $" + customerBalance + ", the customer should open a savings account.");

//if his balance is more than $500, then he should open a money market account.

}else{
    console.log("With a balance of $" + customerBalance + ", the customer should open money market account.");
}
