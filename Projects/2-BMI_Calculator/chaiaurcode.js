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
