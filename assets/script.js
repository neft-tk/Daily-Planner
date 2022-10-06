var blockOneInput = $('#09');
var blockTwoInput = $('#10');
var blockThreeInput = $('#11');
var blockFourInput = $('#12');
var blockFiveInput = $('#13');
var blockSixInput = $('#14');
var blockSevenInput = $('#15');
var blockEightInput = $('#16');
var blockNineInput = $('#17');


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
// make an object, user
// give object 9 elements
// map them to the right locations
// make save button?

saveButton.on('click', saveBlocks) 

function saveBlocks() {

    var user = {
        block1: blockOneInput,
        block2: blockTwoInput,
        block3: blockThreeInput,
        block4: blockFourInput,
        block5: blockFiveInput,
        block6: blockSixInput,
        block7: blockSevenInput,
        block8: blockEightInput,
        block9: blockNineInput
    };

    console.log(user);


    localStorage.setItem("user", JSON.stringify(user));

};

// block1.textContent = localStorage.getItem('user');
// input_textarea.value = localStorage.getItem('content');

// function updateOutput() {
// 	localStorage.setItem('content', input_textarea.value);
	
// 	output_div.textContent = input_textarea.value;
// }



// starts the time and resets it every second so the page has a smooth updated time
setInterval(displayTime,1000);
//checks every 2 minutes what the time is so it can refresh the background colors of the text areas
setInterval(getTime(), (1000 * 60) * 2);
