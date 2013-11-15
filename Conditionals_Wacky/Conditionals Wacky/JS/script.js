/**
 * Created by Arlene on 11/14/13.
 */

// Arlene Smith
// November 14, 2013
// Conditionals Wacky

// I want to take my family to Disney world.  I can only afford to go if my christmas bonus and paycheck are $900 or more or
    // the cost of the disney tickets is $400 or less.

var christmasBonus = 200;  //givens
var paycheck = 500;
var disneyTickets = 500;

// if christmas bonus + paycheck are greater than or equal to $900  or  if the disney tickets are $400 or less, I can take my family to disney.
if(christmasBonus + paycheck >= 900 || disneyTickets <= 400){
    console.log("I can take my family to disney!")

    //if they are not, then I will need to save more money
}else{
    console.log("I need to save more money to be able to go to disney.")
}
