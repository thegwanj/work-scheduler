//console.log('hello!');
// moment.js docs https://momentjs.com/
var currentDayEl = document.getElementById("currentDay");
var timeEntries = document.getElementById("timeEntries");

// DECLARE Current time
var currentTime = moment().format('LT');
console.log(currentTime);

// DECLARE Current hour
var currentHour = moment().hour();
console.log(currentHour);

// DECLARE Current Day HTML Element (Day of Week, Month, Date)
var currentDay = moment().format('LL');
currentDayEl.textContent = currentDay;
console.log(currentDay);

// DECLARE Time Entries Container HTML Element
var containerEl;

// Render a block for each hour of the day
var myArray = ["adsf", "asdf"];
for(var i = 9; i <= 17; i++){

    var key = `hour-${i}`;
    // Attempt to get the saved data for the hour of the loop
    var data = "";

    // Compare i to current hour to determine if this hour is in the past, present, or future
    //variable for past, present, or future
    var time = '';
    //variable for hours under 10
    var earlyHour = '';

    if(currentHour > i){
      //if i is in the past
      time = 'past';
    } else if(currentHour < i) {
      //if i is in the future
      time = 'future';
    } else{
      //if i is in the present
      time = 'present';
    }

    if(i < 10){
      earlyHour = 'earlyHour';
    }
    // var template = `
    // <div class="row ${time}">
    //     <div>
    //       ${i}AM
    //     </div>
    //     <div>
    //       <textarea>${data}</textarea>
    //     </div>
    //     <div>
    //       <button data-hour="${i}">Save</button>
    //     </div>
    //   </div>
    // </div>
    // `;

    // Append the html to page
    // id = 'timeEntries'
    var outputHTML = document.createElement('div');
    outputHTML.innerHTML = `
    <div class="row">
        <div class="hour ${earlyHour}">
          ${i}AM
        </div>
        <textarea class="${time}" cols="95">${data}</textarea>
        <button class="saveBtn" data-hour="${i}">Save</button>
      </div>
    </div>
    `;
    timeEntries.appendChild(outputHTML);
}

// Set up a "click" event listener on the container
containerEl.on("click", "button", function(event){
  
  // Fetch the hour from the clicked button's (event.target) "data-hour" attribute

  // Use the hour to create the key for local storage

  // From the clicked button, traverse the DOM to the nearby <textarea> to fetch its value

  //Use the key and the value to save into localStorage
});

  // Save an hour to local storage
