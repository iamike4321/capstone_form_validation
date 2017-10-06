/*
    Project 01_06_02

    Author:  Quinn Sehenuk
    Date:    9/21/17

    Filename: order.js
 */
"use strict"
var formValidity = false;

//QJS 9.29.17 this will be used to validate the checkboxes
function validateCheckBoxes(){
  var fieldsetValidity = true;
  var box = document.getElementsByClassName("checkBX");
  var errorDiv = document.getElementById("errorMsg");
  alert("my validation works")
  //QJS 9.29.17 this will look for errors
  try {
    // 9.29.17 this is to make sure that atleast one of the checkboxes is checked
    alert("my try works");
    if (!box [0].checked && !box[1].checked && !box[2].checked && !box[3].checked && !box[4].checked && !box[5].checked) {
      for (var i = 0; i < box.length; i++) {
        box[i].style.outline = "1px solid red";
      }
      fieldsetValidity = false;
    } else {
      for (var i = 0; i < box.length; i++) {
        box[i].style.outline = "";
      }
    }

    if (fieldsetValidity === false) {
      throw "please check atleast one product";
    } else {
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
    }
  }
    catch (msg) {
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      formValidity = false;
    }

}

//QJS 9.22.17 this will make sure that the form is valid and if not what it should do
function validateForm(evt) {
  console.log("my form");
  if (evt.preventDefault) {
    evt.preventDefault();
  } else {
    evt.returnValue = false;
  }
  formValidity = true;

  //QJS 9.29.17 this will listen for the functions
  validateCheckBoxes();

  if (formValidity === true) {
    document.getElementsByTagName("form")[0].submit();
    document.getElementById("errorMsg").innerHTML = "";
  }
  // form is not valid
  else {
    document.getElementById("errorMsg").innerHTML = "Please fix the indicated problems then resubmit.";
    document.getElementById("errorMsg").style.display = "block";
    scroll(0, 0);
  }
}

function createEventListeners() {
  console.log("eventlistener");
  //Event for the sumbit button(validation)
  var form = document.getElementsByTagName("form")[0];
  if (form.addEventListener) {
    form.addEventListener("submit", validateForm, false);
  } else if (form.attachEvent) {
    form.attachEvent("onsubmit", validateForm);
  }
}



//This will listen for events
  if (window.addEventListener) {
  window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", createEventListeners);
}
