function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalValid = document.querySelector(".bground2");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// launch modal valid form
const launchValid = () => {
  modalValid.style.display = "block";
  document.getElementById("subscribe").reset(); //empty the form
};
//close modal event
let closeModalBtn = document.querySelector(".close-modal");
closeModalBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalValid.style.display = "none";
}

function closeValidModal(){
  modalValid.style.display = "none";
}
// close valid modal (with X)
let closeXBtn = document.querySelector(".close-modal2");
closeXBtn.addEventListener("click", closeValidModal);
// close valid modal (with button)
let closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", closeValidModal);


// validation of form.
document.querySelector("#submit").addEventListener("click", (event) => {
  event.preventDefault();

  /* - - - - - - - - - - -  first name validation - - - - - - - - - - - */
  let firstName = document.forms["reserve"]["firstname"];
  // trim()  delete spaces at the beginning and the end of a string
  let firstNameLength = firstName.value.trim().length;
  let firstNameMess = document.getElementById("firstname-mess");
  let firstNameValidationState = false;
  let exp = /^([a-zA-Z]+[ ]?|[a-z]+['-]?)+$/;
  // if first name is empty
  if (firstNameLength == 0) {
    // error message in red
    firstNameMess.style.color = "red";
    // text in the element
    firstNameMess.innerHTML = "<p>Ce champ est obligatoire.</p>";
    // field'border in red
    firstName.style.border = "2px red solid";
    //alert("Le prénom est obligatoire.");
    firstName.focus();
    return false;
  } else if (firstNameLength < 2) {
    // first name is not empty but have less than 2 letters
    firstNameMess.style.color = "red";
    firstNameMess.innerHTML =
      "<p>Ce champ doit contenir au moins 2 caractères.</p>";
    firstName.style.border = "2px red solid";
    firstName.focus();
    return false;
  } else if (!exp.test(firstName.value) == true){
    // first name has numbers or special characters
    firstNameMess.style.color = "red";
    firstNameMess.innerHTML =
      "<p>Ce champ ne doit pas contenir de caractères spéciaux ou des chiffres. </p>";
    firstName.style.border = "2px red solid";
    firstName.focus();
    return false;
  } else {
    firstNameMess.innerHTML =""
    firstName.style.border = "2px green solid";
    firstNameValidationState = true;
  }

  /* - - - - - - - - - - -  last name validation - - - - - - - - - - - */
  var lastName = document.forms["reserve"]["lastname"];
  let lastNameValue = lastName.value;
  let lastNameLength = lastNameValue.trim().length;
  let lastNameMess = document.getElementById("lastname-mess");
  let lastNameValidationState = false;
  // if last name is empty
  if (lastNameLength == 0) {
    lastNameMess.style.color = "red";
    lastNameMess.innerHTML = "<p>Ce champ est obligatoire.</p>";
    lastName.style.border = "2px red solid";
    lastName.focus();
    return false;
  } else if (lastNameLength < 2) {
    // last name is not empty but have less than 2 letters
    lastNameMess.style.color = "red";
    lastNameMess.innerHTML =
      "<p>Ce champ doit contenir au moins 2 caractères.</p>";
    lastName.style.border = "2px red solid";
    lastName.focus();
    return false;
  } else if (!exp.test(lastNameValue) == true){
     // last name has numbers or special characters
     lastNameMess.style.color = "red";
     lastNameMess.innerHTML =
       "<p>Ce champ ne doit pas contenir de caractères spéciaux ou des chiffres. </p>";
     lastName.style.border = "2px red solid";
     lastName.focus();
     return false;
  }else {
    lastNameMess.innerHTML = ""
    lastName.style.border = "2px green solid";
    lastNameValidationState = true;
  }

  /* - - - - - - - - - - -  email validation - - - - - - - - - - - */
  var email = document.forms["reserve"]["email"];
  let emailLength = email.value.trim().length;
  let emailMess = document.getElementById("email-mess");
  let emailValidationState = false;
  // if email is empty
  if (emailLength == 0) {
    emailMess.style.color = "red";
    emailMess.innerHTML = "<p>Ce champ est obligatoire.</p>";
    email.style.border = "2px red solid";
    email.focus();
    return false;
  } else if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value) == false) { // test of the email with a regex
    emailMess.style.color = "red";
    emailMess.innerHTML = "<p>Ce champ n'est pas valide.</p>";
    email.style.border = "2px red solid";
    email.focus();
    return false;
  } else {
    emailMess.innerHTML = ""
    email.style.border = "2px green solid";
    emailValidationState = true;
  }

  /* - - - - - - - - - - -  birthdate validation - - - - - - - - - - - */
  var birthdate = document.forms["reserve"]["birthdate"];
  let birth = birthdate.value; // format yyyy-MM-dd
  let birthdateMess = document.getElementById("birthdate-mess");
  let birthdateValidationState = false;
  let today = new Date();
  // Date.parse()  renvoie le nombre de millisecondes écoulées 
  // entre cette date et le premier janvier 1970, 00:00:00 UTC
  let birthTime = Date.parse(birth);
  let todayTime = Date.parse(today);
  // if birth date is empty
  if (birth == "") {
    birthdateMess.style.color = "red";
    birthdateMess.innerHTML = "<p>Ce champ est obligatoire.</p>";
    birthdate.style.border = "2px red solid";
    birthdate.focus();
    return false;
  } else if(birthTime > todayTime){
    birthdateMess.style.color = "red";
    birthdateMess.innerHTML = "<p>La date est supérieure à la date du jour.</p>";
    birthdate.style.border = "2px red solid";
    birthdate.focus();
    return false;
  }else {
    birthdateMess.innerHTML = "";
    birthdate.style.border = "2px green solid";
    birthdateValidationState = true;
  }

  /* - - - - - - - - - - -  number of tournaments validation - - - - - - - - - - - */
  let quantity = document.forms["reserve"]["quantity"];
  let quantityValue = quantity.value;
  let quantityMess = document.getElementById("quantity-mess");
  let quantityValidationState = false;

  if (quantityValue == "") {
    // if quantity is empty
    quantityMess.style.color = "red";
    quantityMess.innerHTML = "<p>Ce champ est obligatoire.</p>";
    quantity.style.border = "2px red solid";
    quantity.focus();
    return false;
  }
  // if quantity is under 0 .
  else if (quantityValue < 0) {
    quantityMess.style.color = "red";
    quantityMess.innerHTML = "<p>Ce champ n'est pas valide.</p>";
    quantity.style.border = "2px red solid";
    quantity.focus();
    return false;
  } else {
    quantityMess.innerHTML = "";
    quantity.style.border = "2px green solid";
    quantityValidationState = true;
  }

  /* - - - - - - - - - - -  location validation - - - - - - - - - - - */
  let locationsMess = document.getElementById("locations-mess");
  let locationValidationState = false;
  // number oflocations checked
  var boutons = document.getElementsByName("location");
  var nblocations = 0;

  for (var i = 0; i < boutons.length; i++) {
    if (boutons[i].checked) {
      nblocations += 1;
    }
  }

  // Si aucune ville n'est cochée.
  if (quantityValue == 0) {
    if (nblocations > 0) {
      locationsMess.style.color = "red";
      locationsMess.innerHTML =
        "<p>Aucune participation dans le champ précédent: aucune ville ne doit être cochée.</p>";
    } else {
      locationsMess.innerHTML = "";
      locationValidationState = true;
    }
  } else if (quantityValue > 0) {
    if (nblocations == 0) {
      locationsMess.style.color = "red";
      locationsMess.innerHTML =
        "<p>Au moins une des villes doit être sélectionnée.</p>";
      return false;
    } else if (nblocations > quantityValue) {
      locationsMess.style.color = "red";
      locationsMess.innerHTML =
        "<p>Le nombre de villes sélectionnées est supérieur au nombre de participation.</p>";
    } else {
      locationValidationState = true;
    }
  }
  /* - - - - - - - - - - -  checking conditions validation - - - - - - - - - - - */
  let checkbox = document.forms["reserve"]["checkbox1"]; // Input de la case.
  let checkboxMess = document.getElementById("checkbox-mess");
  let checkboxValidationState = false;

  if (checkbox.checked == false) {
    // Si la case des conditions est décochée.
    checkboxMess.style.color = "red";
    checkboxMess.innerHTML =
      "<p>Vous devez lire et accepter les termes et conditions.</p>";
    return false;
  } else {
    checkboxMess.innerHTML = "";
    checkboxValidationState = true;
  }

  // if all the required fields are valid
  // delete messages of validation
  //close the modal and launch the valid modal
  if (
    firstNameValidationState == true &&
    lastNameValidationState == true &&
    emailValidationState == true &&
    quantityValidationState == true &&
    locationValidationState == true &&
    checkboxValidationState == true
  ) {
    messArray = document.getElementsByClassName("mess");
    for (let i = 0; i < messArray.length; i++) {
      messArray[i].innerHTML = "";
    }

    closeModal();
    launchValid();
  }

});