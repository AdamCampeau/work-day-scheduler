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