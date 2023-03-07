const username = document.querySelector('#username');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const submit = document.querySelector('#submit');


submit.addEventListener('click', handleClick);


function handleClick(event){
    console.log("Hello");
    
    if(username.value === '' || username.value === null){
        alert('Name is required');
    }

     if(email.value === '' || email.value === null){
        alert('Email required');
     }
     

    if(message.value.length <30|| message.value === '' || message.value === null ){
        alert('Message should contain atlease 30 words');
    }

}