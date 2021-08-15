function displayTime() {
  //Local date format displayed using the shorthand 'L' from the moment library
  var time1 = moment().format('L');
  $('#currentDay').html(time1);
}

//Document ready is a jquery state that checks if the page is ready to load the js file
$(document).ready(function(){
  displayTime();
});

//Next steps (put static information in the form)
//Design the function to compare each input field by the current time
//If the hour = now, then blue, if before, then grey, if after, green.

//I can set it up with bulk code, but I want to learn how to do more with loops.

var startTime = moment('08:00 +0000', 'HH:mm');
var endTime = moment('17:00 +0000', 'HH:mm Z');
// var timeRange = moment().range(startTime, endTime);

var startTime2 = moment(startTime).add(1,'h').format('LT');
console.log("Start Time: " + startTime2);

// var displayHours = function () {
//   var hours = [];

//   for (var i = 1; i < 9; i++) {
//     hours[i] = i;
//   }
//   return hours
// }

var displayHours = function () {
  var hours = [];

  for (var i = 0; i < 10; i++) {
    hours[i] = moment(startTime).add(i, 'h').format('LT');
  }
  return hours
}

//create schedule - select a start time and an end time 
var createSchedule = function(){
  var taskLi = $("<li>").addClass("input-group mb-3");
  var taskTime = $("<label>")
    .addClass("col-sm-2 col-form-label")
    .attr('id',"time1");
  var taskInput = $("<input>").addClass("form-control list-group-item-primary")
    .attr('id',"time1");
  var taskButton = $("<button>")
    .addClass("btn btn-outline-secondary")
    .attr('type',"button")
    .attr('id',"lock")
    .text('🔒');
  
  taskLi.append(taskTime, taskInput, taskButton);

  //append to ul list on the page
  $("#taskList").append(taskLi);
};

createSchedule();

console.log(displayHours());


var displayHour1 = function() {
  // var hour1 = moment().hour(8).format('LT');
  var startTime = moment('08:00 +0000', 'HH:mm').format('LT');
  $('#time1').html(startTime);
}

$(document).ready(function(){
  displayHour1();
})


var startTime = moment('09:00 +0000', 'HH:mm Z');
moment.duration(1, 'hours')




