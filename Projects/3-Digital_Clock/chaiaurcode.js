const clock = document.getElementById('clock');

setInterval(function(){ //setInterval calls a function or executes a code snippet, with a fixed time delay between each call.
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);