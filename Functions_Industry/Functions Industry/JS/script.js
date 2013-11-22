/**
 * Created by Arlene on 11/21/13.
 */


//Arlene Smith
//November 21, 2013
    //Functions Industry



//Customer Service- Inbound calls

//I work at a customer service call center and I need to calculate my average calls per month with the information I have.
//Which is I take 60 calls a day, I work 5 days of the week and I work 4 weeks a month.

//Calculate the amount of calls I take per month

//Parameters (daily calls, days of the week, number of weeks)

//Return: the average calls per month

//Result for the console: The average number of calls per month are X.


var total = calcAverageMonthlyCalls(60, 5, 4);

function calcAverageMonthlyCalls (dailycalls , daysoftheweek, numberofweeks){
    var averageMonthlyCalls = dailycalls * daysoftheweek * numberofweeks;

    return averageMonthlyCalls;

}
console.log("The average number of calls I take a month are " + total + " calls.");



