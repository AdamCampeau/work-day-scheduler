/* current date */

var currentDay = $("#currentDay");
var todaysDate = moment().toDate();
console.log(todaysDate)
currentDay.text(moment(todaysDate).format("dddd, MMMM Do YYYY"));

/* var currentHour=$("#currentHour");
var thisHour = moment().toHour();
console.log(thisHour)
currentHour.text(moment(thisHour).format("h"));
*/
// var currentHour = today.getHours();
var currentHour = moment().hour();
// 24 hour format

// if for loop 

// i = hour (AM/PM) 
// for i = 8am =< 5pm, add increment of 1

// dynamically generated ROWs for every hour(i)

// when row clicked, edit textarea

// when saveBtn clicked, save to localStorage
// when textarea clicked, retrieve data from localStorage

// if the timeBlock = currentHour,
// present

// else if timeBlock < currentHour
// past

// else timeBlock > currentHour
// future

for (var i = 8; i < 18; i++) {
  console.log(i)
  var card = $('<div>')
  card.addClass('row')

  var buildCardA = $("<div>");
  buildCardA.addClass('col-md-1 hour-text');

  if (i <= 12) {
    buildCardA.text(i + " AM");

  }
  else {
    buildCardA.text((i - 12) + " PM");
  }

  var buildHour = $('<textarea>');
  buildHour.addClass('col-md-10 time-block');
  buildHour.attr("id", i);
  if (currentHour > buildHour.attr('id')) {
    buildHour.addClass('past');
  }
  else if (currentHour == buildHour.attr('id')) {
    buildHour.removeClass('past')
    buildHour.addClass('present');
  }
  else if (currentHour < buildHour.attr('id')) {
    buildHour.removeClass('present')
    buildHour.removeClass('past')
    buildHour.addClass('future');
  }

  var buildSave = $('<button>');
  buildSave.addClass('saveBtn col-md-1');
  buildSave.attr("data-time", i);
  buildSave.addClass("fas fa-save")


  card.append(buildCardA, buildHour, buildSave);
  $("#time-row").append(card)
}

$(".saveBtn").on("click", function () {
  console.log("inside button click");
  var hour = $(this).attr("data-time");
  var task = $(this).siblings('textarea').val()

  console.log('hour', hour);
  console.log('task', task);

  window.localStorage.setItem(hour, task);
  getTasks()

})

function getTasks() {
  for (var i = 8; i < 18; i++) {
    var storage = window.localStorage.getItem(i)
    $('#' + i).text(storage)
  }
}

getTasks()