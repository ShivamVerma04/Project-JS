const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#Height').value)
    const weight = parseInt(document.querySelector('#Weight').value)
    const results = document.querySelector('#results')
    const output = document.querySelector('#output')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please give a valid Height';
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please give a valid weight';
    } else {
        const bmi = (weight/((height * height)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.5){
            output.innerHTML = 'BMI is underweight'
        } else if (bmi < 25){
            output.innerHTML = 'BMI is Normal'
        }else{
            output.innerHTML = 'BMI is overweight'
        }
       }
})