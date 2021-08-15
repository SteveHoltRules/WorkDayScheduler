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

var startTime = moment('14:00 +0000', 'hh:mm');
var endTime = moment('17:00 +0000', 'hh:mm Z');

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
  var taskButton = $("<button>")
    .addClass("btn btn-outline-secondary")
    .attr('type', "button")
    .attr('id', "lock")
    .text('🔒');
  

  var schedTime = i;
  var colon = i.search(":");
  var textTime = i.substring(0, colon);
  var nowTime = moment();
  var curTime = nowTime.hour();
  console.log(schedTime);
  console.log(textTime);
  console.log(curTime);

  if (curTime > 12) {
    console.log("In curTime if Statement");
    curTime = curTime-12;
    console.log(curTime);
  }

  // Compare now to the value in the schedule
  if(textTime>curTime){
    var taskInput = $("<input>").addClass("form-control list-group-item-info")
      .attr('id', `${i}`);
  } else if (textTime<curTime){
    var taskInput = $("<input>").addClass("form-control list-group-item-primary")
      .attr('id', `${i}`);
  }else {
    var taskInput = $("<input>").addClass("form-control list-group-item-danger")
      .attr('id', `${i}`);
  }

  taskLi.append(taskTime, taskInput, taskButton);

  //append to ul list on the page
  $("#taskList").append(taskLi);
};

$(document).ready(function(){
  displayHours();
});

