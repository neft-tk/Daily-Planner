var nineAm = document.getElementById('block-1');
var tenAm = document.getElementById('block-2');
var elevenAm = document.getElementById('block-3');
var twelveAm = document.getElementById('block-4');
var onePm = document.getElementById('block-5');
var twoPm = document.getElementById('block-6');
var threePm = document.getElementById('block-7');
var fourPm = document.getElementById('block-8');
var fivePm = document.getElementById('block-9');

var timeDisplay = $("#currentDay");

// Moment method that grabs us the current time and then displays it at the id location on our html
function displayTime() {
    var today = moment().format("MMM Do YYYY, h:mm:ss a");
    timeDisplay.text(today);
};


// Changes the color of the text area boxes based on the hour of the day
// get the current hour
// if current hour = id, change to red
function hourColor() {
    if (today.format("h")) {
        onePm.children(1).setAttribute('style', 'background color', 'red');
    }
};


// starts the time and resets it every second so the page has a smooth updated time
setInterval(displayTime,1000);