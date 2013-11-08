/**
 * Created by Arlene on 11/7/13.
 */

// Arlene Smith
// November 7, 2013
// Expressions Wacky


// This scenario is wacky because it's something I have thought about doing but I can't imagine myself pushing the mower.
// My front yard is 50 ft wide and 20 ft long. If I can mow 25 sq ft per minute.
// How many minutes will it take me to finish mowing the yard?
    // Need to figure out how many sq ft is the yard?


//givens
var length = 20;
var width = 50;
var time = 1;
var speed = 25;

var totalSqFt = width * length;  //calculating the sq footage of the front yard

var perMinute = speed * time;   //calculating how long it takes me to mow 25 sq ft.

var minutesToFinish = totalSqFt / perMinute;  //calculating how many minutes to finish the yard

length = prompt("Calculating how long it would take me to mow the front yard. \nWhat\'s the length?");

wide = prompt("What\'s the width?");

perMinute = prompt("How long does it take me to mow 25 sq. ft.?");

console.log("It takes me" + " " + time + " "+ "minute to mow" + " " + speed + " "+ "square feet. It will take me" + " "+
minutesToFinish + " "+ "minutes to mow the front yard, which is" + " "+ totalSqFt + " "+ "square feet.");

