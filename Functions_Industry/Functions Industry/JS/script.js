/**
 * Created by Arlene on 11/21/13.
 */


//Arlene Smith
//November 21, 2013


//Customer Service- Inbound calls

//Calculate the amount of calls I take per month

//Parameters (daily calls, days of the week, number of weeks)

//Return: the average call per month

//Result for the console: The average number of calls per month are X.


var total = calcAverageMonthlyCalls(60, 7, 4);

function calcAverageMonthlyCalls (dailycalls , daysoftheweek, numberofweeks){
    var averageMonthlyCalls = dailycalls * daysoftheweek / numberofweeks;

    return averageMonthlyCalls;

}
console.log("The average number of calls a month is " + total + " calls.");



