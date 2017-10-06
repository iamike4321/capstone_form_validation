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

// NOTE: VTT 9/20/17 function that makes sure the name input is filled in
function nameFilled() {
  var name = document.getElementById("name");
  var errorDiv = document.getElementById("nameError");
  var fieldsetValidity = true;

  try {
    //when the name value is empty, create an error for it
    if (name.value === "") {
      name.style.background = "rgb(255,150,150)";
      fieldsetValidity = false;
    } else {
      name.style.background = "white";
    }

    // checks if fieldset is correct, otherwise throw the error into nameError
    if (fieldsetValidity === false) {
      throw "please fill in your name in the box below";
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

// NOTE: VTT 9/20/17 checks to see if the message is filled and not empty
function messageFilled() {
  var message = document.getElementById("msg");
  var errorDiv = document.getElementById("msgError");
  var fieldsetValidity = true;

  try {
    //when the message is empty, create an error for it
    if (message.value === "") {
      message.style.background = "rgb(255,150,150)";
      fieldsetValidity = false;
    } else {
      message.style.background = "white";
    }

    // checks if fieldset is correct, otherwise throw the error into msgError
    if (fieldsetValidity === false) {
      throw "please insert a message in the box below";
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

  // NOTE: VTT 9/20/17 verifies the email to have a "@" and a "."
  function validateEmail() {
    var email = document.getElementById("email");
    var errorDiv = document.getElementById("emailError");
    var fieldsetValidity = true;

    try {
      //when email does not have an "@" or a "." with 2-3 letters after, create an error for it
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        email.style.background = "rgb(255,150,150)";
        fieldsetValidity = false;
      } else {
        email.style.background = "white";
      }

      // checks if fieldset is correct, otherwise throw the error into emailError
      if (fieldsetValidity === false) {
        throw "please fill in a proper email";
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


  // NOTE: VTT 9/19/17 checks to see if the telephone input is proper 10 digits
  function numVerify() {
    var phoneNum = document.getElementById("tel");
    var errorDiv = document.getElementById("telError");
    var fieldsetValidity = true;


    try {
      //NOTE: VTT 9/20/17 when phone # doesn't have 10 numbers, create an error for it
      if (!(/^\d{10}$/.test(phoneNum.value))) {
        phoneNum.style.background = "rgb(255,150,150)";
        fieldsetValidity = false;
      } else {
        phoneNum.style.background = "white";
      }

      // checks if fieldset is correct, otherwise throw the error into telError
      if (fieldsetValidity === false) {
        throw "please put in a proper phone number";
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



  // VTT 9/19/17 form validation for contact page
  function validateForm(obj) {
    //prevents default behavior for the object (submit event)
    if (obj.preventDefault) {
      obj.preventDefault();
    } else {
      obj.returnValue = false;
    }
    formValidity = true;

    //where form validition will take place
    nameFilled();
    messageFilled();
    validateEmail();
    numVerify();
    //checks if form is given valid inputs for all fieldsets
    if (formValidity === true) {
      document.getElementsByTagName("form")[0].submit();
      document.getElementById("errorMsg").innerHTML = "";
    } else {
      document.getElementById("errorMsg").innerHTML = "please fill in the fields properly";
    }
  }





  // NOTE:  VTT 9/19/17 creates event listeners to activate once submit button is hit
  function createEventListeners() {
    //listener for form to submit, shoots it up to validateForm()
    var submitListen = document.getElementsByTagName("form")[0];
    if (submitListen.addEventListener) {
      submitListen.addEventListener("submit", validateForm, false);
    } else if (submitListen.attachEvent) {
      submitListen.attachEvent("onsubmit", validateForm);
    }
  }

  // VTT 9/19/17 loads createEventListeners() once the page has completed loading
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
    document.getElementById('ogImg').innerHTML = "";
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
