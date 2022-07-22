const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const err1 = document.getElementById("err1");
const err2 = document.getElementById("err2");
const success = document.getElementById("success");

firstName.addEventListener("input", check1);
lastName.addEventListener("input",check2);
//add entry

form.addEventListener("submit", addEntry);

function check1(event) {
  if (firstName.value) {
    err1.innerText = "";
  }
}

function check2(event){
    if (lastName.value) {
        err2.innerText = "";
      }
}



function addEntry(event) {
  event.preventDefault();
  if (!firstName.value || !lastName.value) {
    event.preventDefault();
    if (!firstName.value) {
      err1.innerText = "Missing First name";
      err1.style.color = "red";
      success.innerText = "";
    }
    if (!lastName.value) {
      err2.innerText = "Missing Last name";
      err2.style.color = "red";
      success.innerText = "";
    }
  } else {
    success.innerText =  firstName.value + ' '+ lastName.value + ' '+ "Form successfully submitted";
    success.style.color = "green";
    form.reset();
  }
}

/* 

function addEntry(event){
    event.preventDefault()
    if( !firstName.value){
        err1.innerText = 'Missing First name'
        err1.style.color = "red"
    }
    if(!lastName.value){
        
        err2.innerText = 'Missing Last name'
        err2.style.color = "red"

    }
    if(firstName.value && lastName.value){
        err2.innerText = 'Form successfully submitted'
        form.reset()
    }

} */
