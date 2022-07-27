console.log('hello!');

// DECLARE Current time

// DECLARE Current Day Element

// DECLARE Time Entries Container Element

// Render a block for each hour of the day
var myArray = ["adsf", "asdf"];
for(var i = 9; i <= 17; i++){

    // Attempt to get the saved data for the hour of the loop
    var data = "";

    var template = `
    <div class="row">
        <div>
          ${i}AM
        </div>
        <div>
          <textarea>${data}</textarea>
        </div>
        <div>
          <button data-hour="${i}">Save</button>
        </div>
      </div>
    </div>
    `;

    // Append the html to page
}
// Save an hour to local storage

