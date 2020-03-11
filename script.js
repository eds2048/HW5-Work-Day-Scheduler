
// Create variables from moment API
var fulldate = moment().format("MMM Do YY"); 
var currentDay = moment().format('DDD');
var currentHour = moment().format('hh');

// Store day into local storage
var todaysAgenda = localStorage.getItem(currentDay);
//localStorage.setItem(currentDay, '{"hr9": "get up","hr10":"past my alarm"}');
console.log("today's agenda " + todaysAgenda);
console.log("hour " + currentHour);
console.log("today " + currentDay);
console.log(JSON.parse(todaysAgenda));

// Display current day at top
$("#todays-date").append(fulldate);
// check the activities w the adding lists using jQuery
// Past timeblock should be different color

var testForHour = document.getElementById("hour-9").getAttribute("value");
console.log("TEST FOR VALUE " + testForHour);


//On click event of saveBtns
$(".btn").on("click", function(){
// Save entered text in description into local storage
// var userInput = $("#textarea").val();
// console.log("User Input " + userInput);

var textInput = JSON.parse(localStorage.getItem("textarea"));
console.log("text input "+  textInput);

//var userInput = localStorage.getItem("textarea".value);

// console.log(userInput);
// console.log("button worked")
});


// save input text from text area into local storage
// - event listener? for time block
    



// take text input from user
// click on enter button to save - need event listener for enter button


// click button
    // create ul

    //


