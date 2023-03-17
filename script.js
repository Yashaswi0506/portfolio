const form = document.querySelector("form");
const username = form.querySelector("#username");
const email = form.querySelector("#email");
const message = form.querySelector("#message");
const submit = form.querySelector("#submit");
const hamburger = document.querySelector(".hamburger");
const navsub = document.querySelector(".ul_class");
let error = form.querySelector("#error");
const reset = form.querySelector("#reset");

hamburger.addEventListener("click", smallscreen);

function smallscreen(event) {
  navsub.classList.toggle("active");
  document.querySelectorAll(".box").forEach((list_item) =>
    list_item.addEventListener("click", () => {
      navsub.classList.remove("active");
    })
  );
}

submit.addEventListener("click", handleClick);

function handleClick(event) {
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
    event.preventDefault();
    error.innerHTML += "Enter atleast 5 words<br>";
    error.style.color = "red";
  }

  if (error.textContent === "") {
    event.preventDefault();
    error.innerHTML = "Form Submitted Successfully";
    error.style.color = "green";
  }
}
reset.addEventListener("click", handleClick1);
function handleClick1(event) {
  error.textContent = "";
}
