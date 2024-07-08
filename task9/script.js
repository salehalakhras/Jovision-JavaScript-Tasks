

btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
    let FetchReq = fetch("https://api.ipify.org");
    let ip;
    FetchReq.then(res => res.text()).then(data => btn.innerText = data);

});