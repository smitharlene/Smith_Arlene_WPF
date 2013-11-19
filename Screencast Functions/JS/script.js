/**
 * Created by Arlene on 11/18/13.
 */


//Screencast Functions

//Basic Functions


function outptMsg(){
    console.log("Hello World");

}

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);

}

// Functions Parameters and Arguments

function dogYears(age){ //parameters
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old");

}
var age1 = 4;
dogYears(age1);  //argument
dogYears(5);

