/**
 * Created by Arlene on 11/21/13.
 */


//Arlene Smith
//November 21, 2013
//Functions Wacky Assignment



//If the Texans football team wins are greater than 7 games or score 30 points a game, they keep their current coach.  If not, they will get a new coach.

var texansWins = 10;  //games won
var gamePoints = 14;  //score per game


//for this project I'm using the ternary condition

//If the Texans wins are greater than 7 or if the game points are greater or equal to 30, they get to keep their coach.  If not, they will need a new coach.

(texansWins > 7 || gamePoints >= 30)? console.log("The Texans can keep their current coach!"): console.log("The Texans will need to get a new coach!");



// Also besides figuring out if the Texans will be keeping their coach I need to calculate the number of games that are left in the season?


//For this part of the problem I will use an Anonymous Function

var calcNumberOfGamesLeft = function(season, played){     //setting up my function with my parameters.  Season is for the amount of games per season.  Played is for the number of games they have already played.
    var numberOfGamesLeft = season - played; //calculation

    return numberOfGamesLeft;  //what's giving the info

}
var gamesLeft = calcNumberOfGamesLeft (16,10);  //my function call with my arguments which is providing the numbers for the calculation

console.log(gamesLeft);  //printing out in the console the number of games left in the season
