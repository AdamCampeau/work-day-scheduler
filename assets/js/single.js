/* current date */

var currentDay=$("#currentDay");
var todaysDate = moment().toDate();
console.log(todaysDate)
currentDay.text(moment(todaysDate).format("dddd, MMMM Do YYYY"));

// var currentHour = moment().
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


    

//var i = moment().format('h a');

    for (var i = 8; i < 18; i++) {
        console.log(i)

        // ROW

        //var buildRow = document.createElement('row');
       
        //var buildCardA = buildRow.createElement('col');
        var buildCardA = $("<div>");
        buildCardA.addClass('col-md-1 hour-text');
        if(i<=12){
          buildCardA.text(i + "AM")
        }
        else{
          buildCardA.text((i-12) + "PM");
        }

        var buildHour = $('<textarea>');   
        buildHour.addClass('col-md-10 time-block');
        buildHour.attr("id", i);

        //var buildText = buildRow.createElement('col-10');
        //buildText.classList.add('textarea card') 

        // create task input

        //var buildCardB = buildRow.createElement('col');
            
        var buildSave = $('<button>');
        buildSave.addClass('saveBtn');
        buildSave.text("Save");
        buildSave.attr("data-time", i);


        $("#time-row").append(buildCardA, buildHour, buildSave);
                
        /* 
        
        element.addEventListener("click", myFunction);
        
        function myFunction() {
            alert ("Hello World!");
        }
        
        */
      // get local storage 
        // store task
        
    }
   
    $(document).on("click", ".saveBtn", function(){
      console.log("inside button click");
      var hour = $(this).attr("data-time");
      console.log(hour);

      var t = $("#"+hour).val();
      console.log(t);

      //crete an object with an hour and text
      //store that object in localStorage

      // local storage for every hour
      // getItem needs setItem
    })

function local(){
  localStorage.setItem("textarea");
        
        // retrieve task
        document.getElementById("edit").innerHTML = localStorage.getItem("textarea")

        // save task when saveBtn clicked
        document.getElementById("saveBtn").addEventListener("click", "textarea");

        buildRow.appendChild(buildCardA)
        buildRow.appendChild(buildHour)
        buildRow.appendChild(buildText)
        buildRow.appendChild(buildCardB)
        buildRow.appendChild(buildSave)


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