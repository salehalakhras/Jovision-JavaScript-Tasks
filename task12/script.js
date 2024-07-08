let nameInput = document.getElementById('name');
let ageInput = document.getElementById('age');
let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', e => {

    let obj = {
        "name" : nameInput.value,
        "age" : ageInput.value,
        "timestamp" : new Date()
    }
    window.alert(`Yout name is: ${obj.name},\nYour age is: ${obj.age}, \nTimestamp is : ${obj.timestamp}`);
})
