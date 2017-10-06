/*
   Capstone Projects
   Author: Christian A. Fernandez
   Date:   8.23.17
   Filename: payment.html
*/
"use strict"
// Validates the form
// formValidity = true;


var formValidity = true;

function removeSelectDefaults() {
   var emptyBoxes = document.getElementsByTagName("select"); // CAF 8.24.17 gets all the selects in the html
   for (var i = 0; i < emptyBoxes.length; i++) {
     emptyBoxes[i].selectedIndex = -1; // CAF 8.24.17 makes it so that the boxes that have a default months ect... have nothing set to them
   }
 }

function setUpPage() {
  removeSelectDefaults();

  createEventListeners();
}

function validatePayment() { // Sets the validing for the billingAddress and for input elements not the button
  var errorDiv = document.querySelectorAll("#paymentInfo .errorMessage")[0];
  var fieldsetValidity = true;
  var invColor = "rgb(148,0,211)"
  var ccNumElement = document.getElementById("cardNum");
  var selectElements = document.querySelectorAll("#paymentInfo select");
  var elementCount = selectElements.length;
  var cvvElement = document.getElementById("ccv");
  var cards = document.getElementsByName("paymentType");
  var currentElement;
  // This will display a error message in the box if something wrong is put in the fieldset
  try {
    if (!cards[0].checked && !cards[1].checked && !cards[2].checked && !cards[3].checked) { // error conditions no card checked
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.outline = "1px solid purple";
      }
      fieldsetValidity = false;
    } else { // one of them is checked

        cards[i].style.border = "";
      

    }
    // Checkes the ccnum and makes sure it is valid changing the colors if they are wrong
    if (ccNumElement.value === "") {
      ccNumElement.style.background = invColor;
      fieldsetValidity = false;
    } else {
      ccNumElement.style.background = "white";
    }
    for (var i = 0; i < elementCount; i++) {
      currentElement = selectElements[i];
      if (currentElement.selectedIndex === -1) {
        currentElement.style.background = "1px solid blue";
        fieldsetValidity = false;
      } else {
        currentElement.style.background = "";
      }
    } // Checkes the ccv and makes sure it is valid changing the colors if they are wrong

    if (cvvElement.value === "") {
      cvvElement.style.background = invColor;
      fieldsetValidity = false;
    } else {
      cvvElement.style.background = "white";
    }

    if (fieldsetValidity === false) {
      throw "Please complete all payment information";
    } else {
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
    }
  } catch (msg) { // if an error accures send the custom message showing what is wrong with the fieldset
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }
}

function validateForm(evt) {
  if (evt.preventDefault) {
    evt.preventDefault();
  } else {
    evt.retunValue = false;
  }
  formValidity = true;

  validatePayment();


  // validating the vars needed in the page none global

  if (formValidity === true) { // form is valdid
    document.getElementById("errorText").innerHTML = "";
    document.getElementById("errorText").style.display = "none";
    document.getElementsByTagName("form")[0].submit();

  } else { //form is not valid
    document.getElementById("errorText").innerHTML = "Please fix the indicated problems and them resubmit your order ";
    document.getElementById("errorText").style.display = "block";
    scroll(0, 0);
  }
}

function createEventListeners() {
  //submit button validates the form
  var form = document.getElementsByTagName("form")[0];
  if (form.addEventListener) {
    form.addEventListener("submit", validateForm, false)
  } else if (form.attachEvent) {
    form.attachEvent("onsubmit", validateForm)
  }
}

// adds the eventlisteners to the page when it is loaded
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false)
} else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage)
}
