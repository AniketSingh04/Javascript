# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1
```javascript
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
```
## project 2
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault(); // to stop the form from submitting
    
    // console.log(event);
    // console.log(event.target);

    const height =parseInt(document.querySelector('#height').value); //to convert string to integer
    const weight = parseInt(document.querySelector('#weight').value); 
    const result = document.querySelector('#results');

    if(height === "" || height <0 || isNaN(height)){
        result.innerHTML = "Please enter a valid height";
    }

    else if(weight === "" || weight <0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight";
    }

    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); //toFixed i used to round the value upto 2 decimal places
        //show the reuslts
        if (bmi<18.6) result.innerHTML = `<span>Under Weight, ${bmi}</span>`;
        else if (bmi > 18.6 && bmi < 24.9) result.innerHTML = `<span>Normal weight, ${bmi}</span>`;
        else result.innerHTML = `<span>Over weight,${bmi}</span>`;
    }
});
```

## project 3
```javascript
const clock = document.getElementById('clock');

setInterval(function(){ //setInterval calls a function or executes a code snippet, with a fixed time delay between each call.
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


## project 4
```javascript




```