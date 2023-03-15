const username = document.querySelector("#username");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submit = document.querySelector("#submit");
const hamburger = document.querySelector(".hamburger");
const navsub = document.querySelector(".ul_class");
var error = document.querySelector("#error");
const reset = document.querySelector("#reset");

hamburger.addEventListener("click", () => {
  navsub.classList.toggle("active");
});

document.querySelectorAll(".box").forEach((n) =>
  n.addEventListener("click", () => {
    navsub.classList.remove("active");
  })
);

submit.addEventListener("click", handleClick);

function handleClick(event) {
  console.log("Hello");
  error.textContent = "";


  if (username.value === "" || username.value === null) {
    event.preventDefault();
    error.innerHTML += "Enter Username<br>";
    error.style.color = "red";
  }

  if (email.value === "" || email.value === null) {
    event.preventDefault();
    error.innerHTML += "Enter email<br>";
    error.style.color = "red";
  }

  if (
    message.value.length < 5 ||
    message.value === "" ||
    message.value === null
  ) {
    
    error.innerHTML += "Enter atleast 5 words<br>";
    error.style.color = "red";
  }
  
}
reset.addEventListener("click", handleClick1);
function handleClick1(event) {
  console.log("Hello");
  error.textContent = "";
}
