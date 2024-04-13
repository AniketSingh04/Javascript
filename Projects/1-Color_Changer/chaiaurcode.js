const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        // console.log(event.target.id);
        if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id; //whole background color changes to blue
        }
        if(event.target.id === "grey"){
            body.style.backgroundColor = event.target.id; //whole background color changes to grey
        }
        if(event.target.id === "white"){
            body.style.backgroundColor = event.target.id; //whole background color changes to white
        }
        if(event.target.id === "yellow"){
            body.style.backgroundColor = event.target.id; //whole background color changes to yellow
        }
        if(event.target.id === "red"){
            body.style.backgroundColor = event.target.id; //whole background color changes to red
        }
    });
});


