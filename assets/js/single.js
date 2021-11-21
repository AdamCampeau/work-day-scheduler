/* current date */

var currentDay=$("#currentDay");
var todaysDate = moment().toDate();
console.log(todaysDate)
currentDay.text(moment(todaysDate).format("dddd, MMMM Do YYYY"));

var currentHour = moment().
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


    

var i = moment().format('h a');

    for (i = 8; i < 15; i++) {
        console.log(i)

        // ROW

        var buildRow = document.createElement('row');
       
        var buildCardA = buildRow.createElement('col');
        buildCard.classList.add('col time-block card');

        var buildHour = buildCard.createElement('hour');   
        buildHour.classList.add('hour');

        var buildText = buildRow.createElement('col-10');
        buildText.classList.add('textarea card') 

        // create task input

        var buildCardB = buildRow.createElement('col');
            
        var buildSave = buildCard.createElement('button');
        button.classList.add('saveBtn card');
                
        /* 
        
        element.addEventListener("click", myFunction);
        
        function myFunction() {
            alert ("Hello World!");
        }
        
        */
        
        // store task
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