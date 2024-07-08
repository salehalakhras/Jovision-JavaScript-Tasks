

btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
    try {
    let FetchReq = fetch("https://google.com/");
    if(!FetchReq.ok)
        throw new Error(`Error: ${FetchReq.status}`);
    FetchReq.then(res => res.text()).then(data => btn.innerText = data);
    }
    catch(err){
        window.alert(err.message);
    }
});