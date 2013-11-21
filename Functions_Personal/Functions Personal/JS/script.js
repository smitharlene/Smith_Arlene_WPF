/**
 * Created by Arlene on 11/20/13.
 */


// Arlene Smith
// November 20, 2013
// Functions Personal



var price = 35;
var discount = 5;


if(price <= 30){
    console.log("With a price of $" + price + ", I can go to the comedy club.");

}else if(price - discount <= 30){
    console.log("After the $" + discount + " off discount, I can afford to go to the comedy club.")


}else {
    console.log("The ticket is $" +price + ", I need to save more money.")


}

var budgetTotal = calcNightExpenses ( 30,50);

function calcNightExpenses (ticket, dinner){

    var expenses = ticket + dinner;

    return expenses;
}
console.log("My total expenses for the night are $"+ budgetTotal);
