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

// create rows as cards

// var dailyHours =moment(hour)
    // between hours of 8am - 5pm
    // assign an hour per rom
    // timeBlock
    

// if the timeBlock = currentHour,
    // present
    
    // else if timeBlock < currentHour
    // past
    
    // else timeBlock > currentHour
    // future
    
// event.listener "click", timeBlock
    // text area
    // save button, save timeBlock
    // save timeBlock to local storage
    // prevent default of page refresh 


var currentHour = moment().toDate();
currentDay.text(moment(tofd))

