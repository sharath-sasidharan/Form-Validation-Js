const form = document.querySelector("form");
(uField = form.querySelector(".user")),
  (uInput = uField.querySelector("input"));
(eField = form.querySelector(".email")),
  (eInput = eField.querySelector("input")),
  (nField = form.querySelector(".phone")),
  (nInput = nField.querySelector("input")),
  (pField = form.querySelector(".password")),
  (pInput = pField.querySelector("input"));
(cpField = form.querySelector(".cpassword")),
  (cpInput = cpField.querySelector("input"));

form.onsubmit = (e) => {
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  uInput.value == "" ? uField.classList.add("shake", "error") : checkUser();
  eInput.value == "" ? eField.classList.add("shake", "error") : checkEmail();
  nInput.value == "" ? nField.classList.add("shake", "error") : checkNumber();
  pInput.value == "" ? pField.classList.add("shake", "error") : checkPass();
  cpInput.value == "" ? cpField.classList.add("shake", "error") : confirmPass();

  setTimeout(() => {
    //remove shake class after 500ms
    uField.classList.remove("shake");
    eField.classList.remove("shake");
    nField.classList.remove("shake");
    pField.classList.remove("shake");
    cpField.classList.remove("shake");
  }, 500);

  uInput.onkeyup = () => {
    checkUser();
  }; //calling checkEmail function on email input keyup
  eInput.onkeyup = () => {
    checkEmail();
  }; //calling checkEmail function on email input keyup
  nInput.onkeyup = () => {
    checkNumber();
  }; //calling checkEmail function on email input keyup
  pInput.onkeyup = () => {
    checkPass();
  }; //calling checkPassword function on pass input keyup
  cpInput.onkeyup = () => {
    confirmPass();
  }; //calling checkPassword function on pass input keyup

  // Validating Username
  function checkUser() {
    let username = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

    if (!uInput.value.match(username)) {
      uField.classList.add("error");
      uField.classList.remove("valid");
      let userError = uField.querySelector(".error-txt");
      uInput.value != ""
        ? (userError.innerText = "Enter valid username")
        : (userError.innerText = "Username can't be blank");
    } else {
      uField.classList.remove("error");
      uField.classList.add("valid");
    }
  }

  // Validating Email
  function checkEmail() {
    //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if (!eInput.value.match(pattern)) {
      //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      eInput.value != ""
        ? (errorTxt.innerText = "Enter a valid email address")
        : (errorTxt.innerText = "Email can't be blank");
    } else {
      //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  // Validating Phone Number
  function checkNumber() {
    let number = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (!nInput.value.match(number)) {
      nField.classList.add("error");
      nField.classList.remove("valid");
      let phoneError = nField.querySelector(".error-txt");
      nInput.value != ""
        ? (phoneError.innerText = "Enter valid Phone Number")
        : (phoneError.innerText = "Number can't be blank");
    } else {
      nField.classList.remove("error");
      nField.classList.add("valid");
    }
  }

  // Validating Password
  function checkPass() {
    //checkPass function
    if (pInput.value == "") {
      //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    } else {
      //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  // Validating Confirm Password with above Password
  function confirmPass() {
    if (pInput.value !== cpInput.value) {
      cpField.classList.add("error");
      cpField.classList.remove("valid");
      let passError = cpField.querySelector(".error-txt");
      pInput.value !== cpInput.value
        ? (passError.innerText =
            "Confirm password should be same as above password")
        : (passError.innerText = "Password can't be blank");
    } else {
      cpField.classList.remove("error");
      cpField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if (
    !uField.classList.contains("error") &&
    !eField.classList.contains("error") &&
    !nField.classList.contains("error") &&
    !pField.classList.contains("error")
  ) {
    // window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
    // console.log("form submitted");
    uInput.value = "";
    eInput.value = "";
    nInput.value = "";
    pInput.value = "";
    cpInput.value = "";
  }
};
