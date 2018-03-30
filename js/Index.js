$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})

function hideads() {
  $('#ad1').toggle();
  $('#ad2').toggle();
  $('#ad3').toggle();
}

function dellocalstorage() {
  localStorage.clear();
};

function yurr() {
  var delayInMilliseconds = 1000;
  var delayInMillisecondsnx = 2000;

  setTimeout(function() {
    window.location.replace("index.html");
  }, delayInMillisecondsnx);
  setTimeout(function() {
    alert("localStorage data has been cleared");
  }, delayInMillisecondsnx);
};

// Calender JS
$(document).ready(function() {
  var date_input = $('input[name="date"]');
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  date_input.datepicker({
    startView: 2,
    format: "MM, dd, yyyy",
    container: container,
    orientation: "top left",
    clearBtn: "true",
  })
})

function Birthday() {
  var jsonifyed_data = JSON.stringify($('#date').serializeArray());
  localStorage.setItem('bday', jsonifyed_data);
  // console.log(bday);
};

function SetBday() {
  var bday = JSON.parse(localStorage.getItem('bday'))["0"].value;
  var prtbd = document.getElementById('birtday');
  birtday.innerHTML += "You're birthday is " + bday;
}

function allFilled() {
  var filled = $('#submitbtn').removeAttr('disabled');
  $('body input').each(function() {
    if ($(this).val() == '') filled = $('#submitbtn').attr('disabled', true);
  });
  return filled;
}

// Redirect JS
var time_left = 10;
var cinterval;
var timestatus = 1;
var redirect = "https://www.codepen.io/DeathHackz";

function time_dec() {
  time_left--;
  document.getElementById('countdown').innerHTML = time_left;
  if (time_left <= 0) {
    window.location = redirect;
  }
}

function resumetime() {
  clearInterval(cinterval);
  cinterval = setInterval('time_dec()', 1000);
}

function defaultstart() {
  time_left = 6;
  clearInterval(cinterval);
  cinterval = setInterval('time_dec()', 1000);
}

function stopstarttime() {
  if (timestatus == 1) {
    clearInterval(cinterval);
    document.getElementById('stopbutton').value = "Start";
    timestatus = 0;
  } else {
    clearInterval(cinterval);
    cinterval = setInterval('time_dec()', 1000);
    document.getElementById('stopbutton').value = "Stop";
    timestatus = 1;
  }
}
