/**
 * Created by Arlene on 11/12/13.
 */

// Arlene Smith
// November 12, 2013
// Conditionals Worksheet


//Example Stuff your face I

//Determine whether an entrant qualifies based on his weight for a pie eating contest.  You must weight 250 lbs or more

var entrantWeight = 260;
var weightReq = 250;

if(entrantWeight > weightReq){
    console.log("The competitor qualifies for the heavyweight division.");

}else{
    console.log("The competitor needs to gain some weight.");

}


//Group 1: Expressions with Conditionals
// Last chance for gas

var gasEfficiency = 25; //in mpg
var gaugeReading = 50; //in %
var gasTankCapacity = 20; //in gallons


 var gallonsOfGas = gaugeReading/100


  if(gallonsOfGas * gasTankCapacity * gasEfficiency > 200){

      console.log("Yes, you can make it without stopping for gas!")
}
  else{
    console.log("You only have" + " " + gallonsOfGas + " "+ "gallons of gas in your tank, better get gas now while you can!");
  }



//Group 2: Multiple Results
//Check the Login

//if the username or password doesn't match then make sure the correct error message appear.

var usernameEntered = ("rsmith");
var passEntered = ("smith12");
var correctUsername = ("A Smith");
var correctPassword = ("smith123");

if(correctUsername === correctUsername && correctPassword === correctPassword){
    //correct username and password
    console.log("Welcome," + " " + correctUsername + "!");


}else if(usernameEntered === correctUsername){
    //incorrect username

    console.log("User not found. Try again");

}else{
    //incorrect password
     console.log("Password does not match our records.");

}


// Group 3: Multiple Conditions
// Movie Ticket Price

//Regular ticket price is $12.  Discounted price of $7 for under 10, 55 nad older and between the hours of 3-5pm
//Which of the 2 price the customer would have to pay?

var movieTime = 8;
var customersAge = 55;
var ticketPrice = 12;
var discountedPrice = 7;

if(movieTime >= 3 && movieTime < 5){
    console.log("The ticket price is $" + discountedPrice);
}else if(customersAge < 10 || customersAge >= 55 ){
    console.log("The ticket price is $" + discountedPrice);

}else{
    console.log("The ticket price is $" + ticketPrice);
}





