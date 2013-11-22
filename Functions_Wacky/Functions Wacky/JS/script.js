/**
 * Created by Arlene on 11/21/13.
 */


//Arlene Smith
//November 21, 2013
//Functions Wacky Assignment



//If the Texans football team wins are greater than 7 games or score 30 points a game, they keep their current coach.  If not, they will get a new coach.

var texansWins = 10;
var gamePoints = 15;

(texansWins > 7 || gamePoints >= 30)? console.log("The Texans can keep their current coach!"): console.log("The Texans will need to get a new coach!");



// Also besides figuring out if the Texans will be keeping their coach I need to calculate the number of games that are left in the season?


//For this part of the problem I will use an Anonymous Function

var calcNumberOfGamesLeft = function(season, played){
    var numberOfGamesLeft = season - played;

    return numberOfGamesLeft;

}
var gamesLeft = calcNumberOfGamesLeft (16,10);

console.log(gamesLeft);
