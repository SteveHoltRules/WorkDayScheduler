var displayTime = function() {
  //Local date format displayed using the shorthand 'L' from the moment library
  var curDate = moment().format('L');
  $('#currentDay').html(curDate);
}

//Document ready is a jquery state that checks if the page is ready to load the js file
$(document).ready(function () {
  displayTime();
});

//Design the function to compare each input field by the current time
//If the hour = now, then blue, if before, then grey, if after, green.

var startTime = moment('08:00 +0000', 'HH:mm');
var endTime = moment('17:00 +0000', 'HH:mm Z');

var startTime2 = moment(startTime).add(1, 'h').format('LT');
console.log("Start Time: " + startTime2);

var displayHours = function () {
  for (var i = 0; i < 10; i++) {
    createSchedule((moment(startTime).add(i, 'h').format('LT')));
  }
}

//create schedule - select a start time and an end time 
var createSchedule = function (i) {
  var taskLi = $("<li>").addClass("input-group mb-3");
  var taskTime = $("<label>")
    .addClass("col-sm-2 col-form-label")
    .attr('id', `${i}`)
    .text(i);
  var taskInput = $("<input>").addClass("form-control list-group-item-primary")
    .attr('id', `${i}`);
  var taskButton = $("<button>")
    .addClass("btn btn-outline-secondary")
    .attr('type', "button")
    .attr('id', "lock")
    .text('🔒');

  taskLi.append(taskTime, taskInput, taskButton);

  //append to ul list on the page
  $("#taskList").append(taskLi);
};

$(document).ready(function(){
  displayHours();
});

