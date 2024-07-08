let nameInput = document.getElementById('name');
let sumbitBtn = document.getElementById('submit');

sumbitBtn.addEventListener('click',e => {
    var obj = {
        'name' : nameInput.value,
        'age' : fetch('https://api.agify.io?name='+nameInput.value,{ method:'GET'}).then(res => res.json()).then(data => data.age)
    }
    window.alert(`Your name is: ${obj.name},\nYour age is: ${obj.age}`);
});

// the website is down or i got blocked, i will continue this task later.