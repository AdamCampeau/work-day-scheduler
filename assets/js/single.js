// Trying to understand how moment.js works when compared to chapter example

// The example used in the chapter is:

// var californiaTime=document.querySelector("#time-california");
// californiaTime.textContent=currentTime.format("...")

//var currentDate = document.getElementById("#currentDay"); {
    //moment();
    //console.log()
    //currentDay.format('DDDD, MMMM Do YYYYY')
//}

// var currentDay = moment();
// console.log();
// currentDay.format('DDDD, MMMM Do YYYYY')
// );


var currentDay=$("#currentDay");
var todaysDate = moment().toDate();
currentDay.text(moment(todaysDate).format("dddd, MMMM Do YYYY"));

// if the time = currentHour,
    //display current task
    // display alert, task
    // red

    // else if time < currentHour
    // display completed task
    // grey

    // else time > currentHour
    // display future task 
    // green


var currentHour = moment().toDate();
currentDay.text(moment(tofd))

