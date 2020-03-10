


var today = moment().format('DDD');
var hour = moment().format('hh');
var todaysAgenda = localStorage.getItem(today);
localStorage.setItem(today, '{"hr9": "get up","hr10":"past my alarm"}');

console.log("today's agenda " + todaysAgenda);
console.log("hour " + hour);
console.log("today " + today);
console.log(JSON.parse(todaysAgenda));




// check the activities w the adding lists using jQuery
// Use moment.js & jQuery
// use bootstrap
    // create column for each day?
    // create rows for each hour?
    // columns for the hour, task then add button




// launch application
// display current day
// scroll down, display hours
// timeblock for each hour
    // past timeblock - different color

//click on event - event listener? for time block
// take text input from user
// click on enter button to save - need event listener for enter button


// click button
    // create ul

    //


