//This is the main JavaScript file for the work day planner

//This function takes in and displays the local date and time in real-time using moment.js
function realTime() {
    var dateTime = moment().format("LLLL");
    console.log(dateTime);
    $("#currentDay").append(dateTime);
}
realTime();
console.log(realTime);