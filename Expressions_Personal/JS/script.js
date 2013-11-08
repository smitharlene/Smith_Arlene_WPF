/**
 * Created by Arlene on 11/6/13.
 */

//  Arlene Smith
//  November 6, 2013
//  Expressions Personal


//Calculate how much baby formula Katie drinks in 30 days.

//Givens:
// Katie drinks 6oz 5 times a day. How many ounces would she drink in 30 days?

var bottle = 6;   //given

var quantity = 5;  //given

var totalDays = 30;  // given

quantity = prompt("Calculating how much baby formula Katie drinks in 30 days. \nHow many bottles a day does Katie has? ");

bottle = prompt("How many ounces is in each bottle?");

totalDays = prompt("How many days?");

var result = (bottle * quantity) * 30; /* multiplying the amount of bottles per day and the amount of ounces per bottle. /n

 Then multiplying that total by the amount of days. */

console.log("Katie would drink" + " " + result + " " + "ounces of baby formula in" + " " + totalDays + " " + "days.");



