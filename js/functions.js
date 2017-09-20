// ===========================================
//                 CONTACT PAGE
// ===========================================

// wait time for chat, contact page
function waitTime() {
  //array that holds integers of random amounts
  var time = [13, 16, 12, 20, 31, 37, 28, 10, 5, 1, 39, 14, 22, 59, 2];
  //randomizer to pick a number from 1-14, rounds a random math number and multiples it by 14, adds 1, (14 is the number same to the array's length.)
  var x = Math.floor((Math.random() * 14) + 1);
  //pops an alert on how long you will have to wait in chat
  alert("Your Approximate Wait time is " + time[x] + " minute(s)." +
    "Please click okay to continue and wait...");
}

function filledIn() {
  var contactInputs = document.querySelectorAll(".form-group input");
  var errorDiv = document.getElementById("errorMsg");
  var fieldsetValidity = true;
  var elementAmount = contactInputs.length;
  var currentElement;
  try {
    for (var i = 0; i < elementAmount; i++) {

      currentElement = contactInputs[i];
      //checks if the inputs are empty, shoots back an error
      if (currentElement.value === "") {
        currentElement.style.background = "rgb(255,150,150)";
        fieldsetValidity = false;
      } else {
        currentElement.style.background = "white";
      }
    }

    //checks for textarea's value and if its filled in
    var currentElement = document.getElementById("msg");
    if (currentElement.value === "") {
      currentElement.style.background = "rgb(255,150,150)";
      fieldsetValidity = false;
    } else {
      currentElement.style.background = "white";
    }


    if (fieldsetValidity === false) {
      throw "please fill in the inputs properly and completely";
    } else {
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
    }

  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }


}

function negativeNum() {
  var phoneNum = document.getElementById("tel");
  var errorDiv = document.getElementById("errorMsg");
  fieldsetValidity = true;

  try {
    if (phoneNum.value <= 0) {
      phoneNum.style.background = "rgb(255,150,150)";
      fieldsetValidity = false;
    } else {
      phoneNum.style.background = "white";
    }


    if (fieldsetValidity === false) {
      throw "please put in a non-negative number in";
    } else {
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
    }
  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }
}



//form validation for contact page
function validateForm(obj) {
  //prevents default behavior for the object (submit event)
  if (obj.preventDefault) {
    obj.preventDefault();
  } else {
    obj.returnValue = false;
  }
  formValidity = true;

  //where form validition will take place
  filledIn();
  negativeNum();

  //checks if form is given valid inputs for all fieldsets
  if (formValidity === true) {
    document.getElementsByTagName("form")[0].submit();
    document.getElementById("errorMsg").innerHTML = "";
  } else {
    document.getElementById("errorMsg").innerHTML = "please fill in the fields properly";
  }
}






function createEventListeners() {
  //listener for form to submit, shoots it up to validateForm()
  var submitListen = document.getElementsByTagName("form")[0];
  if (submitListen.addEventListener) {
    submitListen.addEventListener("submit", validateForm, false);
  } else if (submitListen.attachEvent) {
    submitListen.attachEvent("onsubmit", validateForm);
  }
}
//loads createEventListeners() once the page has completed loading
if (window.addEventListener) {
  window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", createEventListeners);
}
// ===========================================
//                 MENU PAGE
// ===========================================

// showing and removing image in menu page

//function shows image displayed on span tag
function showImage() {
  //sets the span tag's innerHTML to an image html tag with src filled in.
  document.getElementById('ogImg').innerHTML = "<img src='images/cImg.jpeg'>";
}

//function removes image from the span tag
function removeImage() {
  //removes span tags innerHTML so the image disappears.
  document.getElementById('ogImg').innerHTML = " ";
}

// //menu page on setInterval command
// var increment = window.setInterval(counter, 1500);
//
// function counter(inc) {
//   //set var inc to the value of the counter,
//   // adds 1 to it, then sets that value to inc to repeat
//   var inc = document.getElementById('counter').value;
//   inc++;
//   document.getElementById('counter').value = inc;
// }
