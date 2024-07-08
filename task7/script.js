
timeElement = document.querySelector('.time');

function updateTime(){
    let time = new Date();
    timeElement.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}

setInterval(updateTime,1000);