

btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
    let x = fetch("https://api.ipify.org");
    x.then(res => res.text()).then(data => {console.log(data)});
});