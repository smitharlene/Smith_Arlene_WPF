/**
 * Created by Arlene on 11/6/13.
 */

//Arlene Smith
//November 6, 2013
//Expressions Worksheet



//Problem Dog Years

// Givens:   Dog age (Sparky) = 1
// Dogs age 7 times faster than humans



var sparkyAge = 1;

var dogYears = 7 ;

var sparkyDogYears = sparkyAge * dogYears;

console.log("Sparky is" + " " + sparkyAge + " " + "human years old which is" + " " + dogYears + " " +"in dog years.");


//Slice of Pie Part 1

//Givens:  How much pizza each party goer will get at the party?
// Number of slices per pizza = 8
// Number of people at the party = 20
// Number of pizzas ordered = 10

var numberOfSlicesPerPizza = 8;
var numberOfPeople = 20;
var pizzasOrdered = 11;

var slicesPerPerson = pizzasOrdered * numberOfSlicesPerPizza / numberOfPeople;

console.log("Each person ate" + " "+ slicesPerPerson + " " + "slices of pizza at the party.");

//Slice of Pie Part II


var numberOfSlicesPerPizza = 8;
var numberOfPeople = 20;
var pizzasOrdered = 11;

var totalSlices = pizzasOrdered * numberOfSlicesPerPizza;

var sparkyEats = totalSlices % numberOfPeople;


console.log("Sparky got" + " " + sparkyEats + " " + "slices of pizza.");


//Average shopping bill

//Givens: an array with 5 weekly grocery totals

var groceryTotals = [40, 65, 35, 55, 68];

var totalAmount = groceryTotals[0] + groceryTotals [1] + groceryTotals [2] + groceryTotals [3] + groceryTotals [4];

var weeklyAverage = totalAmount / 5 ;

console.log("You have spent a total of" + " " + totalAmount + " " + "on groceries over 5 weeks." + " " + " That is an average of" + " " + weeklyAverage + " " + "per week.");


//Discounts
//Calculate the discounted price with tax and without


var originalPrice = 60;
var discountPercentage = 10;
var item = "bag";
var taxPercentage = 6;

var discount = originalPrice * (discountPercentage / 100);

var priceWithOutTax = originalPrice - discount;

var priceWithTax = priceWithOutTax * (taxPercentage / 100) + priceWithOutTax;


console.log("Your" + " " + item + " " + "was originally $" + originalPrice + ", but after a" + " " + discountPercentage + "% discount, it is now $" + priceWithOutTax +
' '+ "without tax, and $" + priceWithTax + " " + "with tax.");











































