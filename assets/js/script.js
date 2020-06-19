// This is the main JavaScript file for the work day planner.
let dateTime = moment().format('MMMM Do YYYY, h:mm a');
let now = moment();
let sched = {};
$("#currentDay").append(dateTime);


// onclick event for each save button

$('.saveBtn').click(function () {
    let text = $(this).siblings(".description").val()
    let time = $(this).parent().attr("data-time")
    sched[time] = text;
    let schedString = JSON.stringify(sched);
    localStorage.setItem('sched', schedString)
});

// If local storage has data, get it and parse it back to the textarea via Json.

let storage = localStorage.getItem('sched');

if (storage) {
    sched = JSON.parse(storage);
} else {
    for (let i = 0; i <= 17; i++) {
        sched[i] = ''
    }
};

// Using for loop for items defined with css to change the color of the rows.

for (let key in sched) {

    if (moment(key, 'h').isBefore(now)) {
        $("[data-time=" + key + "]")
            .find('.description')
            .val(sched[key])
            .addClass("past");
    } else if (moment(key, 'h').isAfter(now)) {
        $("[data-time=" + key + "]")
            .find('.description')
            .val(sched[key])
            .addClass("future");
    } else if (moment(key, 'h').isSame(now)) {
        $("[data-time=" + key + "]")
            .find('.description')
            .val(sched[key])
            .addClass("present");
    }
};