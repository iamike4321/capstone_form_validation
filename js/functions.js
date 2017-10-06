// am Quinn
// ===========================================
//                 CONTACT PAGE
// ===========================================

// wait time for chat, contact page
function waitTime() {
  //array that holds integers of random amounts
  var time = [13, 16, 12, 20, 31, 37, 28, 10, 5, 1, 39, 14, 22, 59];
  //randomizer to pick a number from 1-14, rounds a random math number and multiples it by 14, adds 1, (14 is the number same to the array's length.)
  var x = Math.floor((Math.random() * 14) + 1);
  //pops an alert on how long you will have to wait in chat
  alert("Your Approximate Wait time is " + time[x] + " minute(s)." +
    "Please click okay to continue and wait...");
}

//form validation for contact page
function validateForm() {
  //var x is the value taken from a form named form1,with an id of tel.
  var x = document.forms["form1"]["tel"].value;
  // checks if x or telephone value is a number or not.
  if (isNaN(x)) {
    alert("Please fill out a proper phone number with ONLY numbers");
    return false;
  } else {
    return true;
  }
}

// ===========================================
//                 MENU PAGE
// ===========================================

// showing and removing image in menu page
function showImage() {
  //sets the span tag's innerHTML to an image html tag with src filled in.
  document.getElementById('ogImg').innerHTML = "<img src='images/cImg.jpeg'>";
}

function removeImage() {
  //removes span tags innerHTML so the image disappears.
  document.getElementById('ogImg').innerHTML = " ";
}

//p.s. I love you Clawson - The Lead Developer. <3
