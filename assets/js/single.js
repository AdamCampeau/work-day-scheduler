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
console.log(todaysDate)
currentDay.text(moment(todaysDate).format("dddd, MMMM Do YYYY"));



// 
// class
// create rows as cards
// 24 hour format
// var dailyHours =moment(hour)
    // between hours of 9 - 17
    // assign an hour per rom
    // timeBlock
    // for (i = 0)
    // creating elements 9m - 5pm
    // use logic from class work example

    /* <div class="row">
        <div class ="col time-block card">
          <div class="hour">
            
          </div>
        </div>
    
        <div class="col-10 text-area card">
          Task
        </div>
        <div class ="col">
          <button class="saveBtn card"><i class="fas fa-save"></i>
        </div>
      </div>
    */


// if current hour, highlight current
    //
    //for
        // if the timeBlock = currentHour,
        // present
    
        // else if timeBlock < currentHour
        // past
    
        // else timeBlock > currentHour
        // future

// event.listener "click", timeBlock
    // text area
    // save button, save timeBlock

// save data to local storage
     


//var currentHour = moment().toDate();
// currentDay.text(moment(tofd))

