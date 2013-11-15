/**
 * Created by Arlene on 11/14/13.
 */

// Arlene Smith
// November 14, 2013
// Conditionals Wacky

// I want to take my family to Disney world.  I can only afford to go if my christmas bonus and paycheck are $900 or more or
    // the cost of the disney tickets is $400 or less.

var christmasBonus = 200;
var paycheck = 500;
var disneyTickets = 500;


if(christmasBonus + paycheck >= 900 || disneyTickets <= 400){
    console.log("I can take my family to disney!")
}else{
    console.log("I need to save more money to be able to go to disney.")
}
