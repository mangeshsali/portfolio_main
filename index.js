var typed = new Typed("#auto-type", {
  strings: ["Web Developer", "Frontend Developer"],
  startDelay: 50,
  typeSpeed: 50,
  backSpeed: 50,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
});

// const hamburger = document.getElementById("hamburger");
const hamburger = document.querySelector("#hamburger");
const iclose = document.querySelector("#close");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

iclose.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Contact- form

var firebaseConfig = {
  apiKey: "AIzaSyCRdGGt9Nr5Uc2yJA6uISnJLGnoUPlM2lM",
  authDomain: "contactform-68901.firebaseapp.com",
  databaseURL: "https://contactform-68901-default-rtdb.firebaseio.com",
  projectId: "contactform-68901",
  storageBucket: "contactform-68901.appspot.com",
  messagingSenderId: "658065288439",
  appId: "1:658065288439:web:807c738924f5d8c12cf7f2",
  measurementId: "G-PBWRSZGB5P",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database().ref("contactForm");

var form = document.getElementById("contactForm");
form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log("je");
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  saveMessage(name, email, message);
  var alert = document.querySelector(".alert");
  alert.style.display = "block";
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
  form.reset();
}

const saveMessage = (name, email, message) => {
  var newDB = database.push();
  newDB.set({
    name: name,
    email: email,
    message: message,
  });
};
