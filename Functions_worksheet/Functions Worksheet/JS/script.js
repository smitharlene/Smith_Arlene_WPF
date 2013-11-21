/**
 * Created by Arlene on 11/19/13.
 */


// Arlene Smith
// November 19, 2013
// Functions Worksheet Assignment



// Circumference
// Calculate the circumference of a circle


var pie= 3.14;
var total = calcCircle(pie,10) //This variable equals the function so it can be printed in the console.

function calcCircle (pie,radius){      //normal function
    var circumferenceCircle = (2 * pie * radius);  //calculating the circumference of a circle

    return circumferenceCircle;   //return value
}
console.log("The circumference of the circle is " + total); //what's going to print out in the console



// Stung
//Calculate how many bee stings are needed to kill an animal



var beeStingPerPound = 8.666666667;


var total = victimWeight(beeStingPerPound, 80);

function victimWeight (beeStingPerPound, animalWeight){

    var totalNumbOfBeeStings = beeStingPerPound * animalWeight;

    return totalNumbOfBeeStings;

}


console.log("It takes " + total + " bee stings to kill this animal.");



