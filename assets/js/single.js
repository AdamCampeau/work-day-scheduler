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
// if for loop semantics
// if current hour, highlight current
    //
    

var i = moment().format('h a');

    for (i = 8; i < 15; i++) {
        console.log(i)

        // dynnamically created content

    /* ROW ORIGINAL CODE BLOCK
    
    <div class="row">
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
        var buildRow = document.createElement('row');
       
            var buildCard = buildRow.createElement('col');
            buildCard.classList.add('col time-block card');

                var buildHour = buildCard.createElement('hour');   
                buildHour.classList.add('hour');
c
            var buildText = buildRow.createElement('col-10');
            buildText.classList.add('text-area card') 

                // create task input

            var buildCard = buildRow.createElement('col');
            
                var buildSave = buildCard.createElement('button');
                button.classList.add('saveBtn card')
                
        
        // if the timeBlock = currentHour,
        // present
    
        // else if timeBlock < currentHour
        // past
    
        // else timeBlock > currentHour
        // future
    
    /* i EXAMPLE
        let str = '';
        for (let i = 8; i < 15; i++) {
        }*/
    
        if (currentHour == i) {
            present;
            
        } else if 
            (currentHour < i) {
            past;
        

        } else if 
            ( i > currentHour) {
            future;
        
        
         } 
    }
   



// event.listener "click", timeBlock
    // text area
    // save button, save timeBlock

// save data to local storage
     


//var currentHour = moment().toDate();
// currentDay.text(moment(tofd))

