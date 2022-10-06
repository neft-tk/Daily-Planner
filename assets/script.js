var blockOneValue = $('#09');
var blockTwoValue = $('#10');
var blockThreeValue = $('#11');
var blockFourValue = $('#12');
var blockFiveValue = $('#13');
var blockSixValue = $('#14');
var blockSevenValue = $('#15');
var blockEightValue = $('#16');
var blockNineValue = $('#17');


var saveButton = $('.saveBtn');
var timeDisplay = $("#currentDay");

// Moment method that grabs us the current time and then displays it at the id location on our html
function displayTime() {
    var today = moment().format("MMM Do YYYY, h:mm:ss a");
    timeDisplay.text(today);
};


// Color changing function
// gets the current hour in military time 
// grabs all the id's with text-area
// runs a loop based on how many items were grabbed and gives a class depending on the id of that text-area
// if the text-area id is less than the current value of the hour (military time) then it is given the past class which changes the background to gray, if the text-area id is greater then it turns the background green, and if they're equal it'll turn the background red.
// NOTE: the id's were given double-digit values (ex: 9am is 09) so that the military time can accurately compare itself to the hour values 
let getTime = function () {
    var currentTime = moment().format("HH");
    var textAreaEl = $(".text-area");


    for (var i = 0; i < textAreaEl.length; i++) {
        var elID = textAreaEl[i].id;
        console.log(elID);
        var getID = document.getElementById(textAreaEl[i].id);

        $(textAreaEl[i].id).removeClass(".present .past .future");

        if (elID < currentTime) {
            $(getID).addClass("past");
        } else if (elID > currentTime) {
            $(getID).addClass("future");
        } else {
            $(getID).addClass("present");
        }
    }
}


// TODO: local storage stuff


// Save blocks - grabs the contents of the textareas at the specified locations and creates an object with them
// saves the object to local storage
function saveBlocks() {

    var blockOneValue = $('#09');
    var blockTwoValue = $('#10');
    var blockThreeValue = $('#11');
    var blockFourValue = $('#12');
    var blockFiveValue = $('#13');
    var blockSixValue = $('#14');
    var blockSevenValue = $('#15');
    var blockEightValue = $('#16');
    var blockNineValue = $('#17');

    var user = {
        block1: blockOneValue.val(),
        block2: blockTwoValue.val(),
        block3: blockThreeValue.val(),
        block4: blockFourValue.val(),
        block5: blockFiveValue.val(),
        block6: blockSixValue.val(),
        block7: blockSevenValue.val(),
        block8: blockEightValue.val(),
        block9: blockNineValue.val()
    };

    localStorage.setItem("user", JSON.stringify(user));

};

// loadBlocks - turns user back into an object
// if there is nothing in the object or no object to return, then nothing happens
// if there -is- something in the object/if there is an object, then if there are any values saved locally for each block should appear on the page again
function loadBlocks() {
    var lastUser = JSON.parse(localStorage.getItem("user"));
    if (lastUser !== null) {
        $('#09').val(lastUser.block1);
        $('#10').val(lastUser.block2);
        $('#11').val(lastUser.block3);
        $('#12').val(lastUser.block4);
        $('#13').val(lastUser.block5);
        $('#14').val(lastUser.block6);
        $('#15').val(lastUser.block7);
        $('#16').val(lastUser.block8);
        $('#17').val(lastUser.block9);
    } else return;
};


// calls on loadBlocks when the page loads
$(document).ready(function(){
    loadBlocks();
});


// starts the time and resets it every second so the page has a smooth updated time
setInterval(displayTime,1000);
//checks every 2 minutes what the time is so it can refresh the background colors of the text areas
setInterval(getTime(), (1000 * 60) * 2);


// addEventListener to run saveBlocks when the save button is clicked/submitted
saveButton.on('click', saveBlocks);
