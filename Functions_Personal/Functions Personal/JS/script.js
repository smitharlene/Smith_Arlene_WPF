/**
 * Created by Arlene on 11/20/13.
 */


// Arlene Smith
// November 20, 2013
// Functions Personal


//I was invited to a dinner and a comedy show.  I have a budget for the night expenses.  I could only spend $30 for the comedy show tickets.
    //I was also given a $5 off coupon that I can apply to the price of the tickets. If the tickets are more than $30,
    // I will need to save more money.



var price = 35;   //This variable represents the price of the ticket
var discount = 5;  //$5 off discount coupon


if(price <= 30){     //If the price of the ticket is less or equal to $30 then I can go to the comedy club
    console.log("With a price of $" + price + ", I can go to the comedy club.");

}else if(price - discount <= 30){   //If the price of the ticket minus the $5 off discount is less than $30, then I can go
    console.log("After the $" + discount + " off discount, I can afford to go to the comedy club.")


}else {  //If the price of the ticket are more that $30 after using the discount then I would have to save more money
    console.log("The ticket is $" +price + ", I need to save more money.")


}

// This function calculates my total expenses for the night including my $30 comedy club ticket and $50 for dinner

var budgetTotal = calcNightExpenses ( 30,50);  //This variable is use to be able to print out the function info into the console which = to the function call

function calcNightExpenses (ticket, dinner){ //This contains my function name and parameters

    var expenses = ticket + dinner; // calculating my expense

    return expenses; //this is what gives the information out
}
console.log("My total expenses for the night are $"+ budgetTotal); //what's printing out in my console
