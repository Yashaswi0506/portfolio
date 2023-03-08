const username = document.querySelector('#username');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const submit = document.querySelector('#submit');
const hamburger = document.querySelector(".hamburger");
const navsub = document.querySelector(".ul_class");

hamburger.addEventListener('click', () => {
    console.log("changing");
    navsub.classList.toggle("active");
});

document.querySelectorAll(".box").forEach(n => n.addEventListener("click", () => {
    navsub.classList.remove("active");
  }))




window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    navsub.style.top = '0';
    
    
  } else {
    navsub.style.top = '-50px';
  }
} 


submit.addEventListener('click', handleClick);


function handleClick(event){
    console.log("Hello");
    
    if(username.value === '' || username.value === null){
        alert('Name required');
    }

     if(email.value === '' || email.value === null){
        alert('Email required');
     }
     

    if(message.value.length <30|| message.value === '' || message.value === null ){
        alert('Message should contain atlease 30 words');
    }


}

