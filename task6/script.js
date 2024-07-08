var btnArr = Array(5);

for(let i=0;i<5;i++){
    btnArr[i] = document.createElement('button');
    btnArr[i].innerText = `Button ${i}`
}

function createArr(){
    let arr = Array(100);
    for(let i=0;i<100;i++){
        arr[i] = i
    }

    return arr;
}

function printArr(arr, start, end){
    for(let i=start;i<end;i++){
        console.log(arr[i]);
    }
}

function removeDivisableBy3(arr){
    return arr.filter(num => num % 3);
}

function extendArr(arr){

    for(let i=0;i<50;i++){
        arr[i+100] = i+100;
    }
    return arr;
}

function addThree(arr){
    for(let i=0;i<arr.length;i++){
        arr[i] += 3;
    }
    return arr;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
}

function compareator(a,b){
    if(a < b)
        return 1;
    else if(a > b)
        return -1;
    else
        return 0;
}

btnArr[0].addEventListener('click', e => {
    let arr = createArr();
    arr = removeDivisableBy3(arr);
    printArr(arr,0,arr.length);
})

btnArr[1].addEventListener('click', e => {
    let arr = createArr();
    arr = extendArr(arr);
    printArr(arr,0,arr.length);
})

btnArr[2].addEventListener('click', e => {
    let arr = createArr();
    arr = addThree(arr);
    printArr(arr,0,arr.length);
})

btnArr[3].addEventListener('click', e => {
    let arr = createArr();
    printArr(arr,20,40);
})

btnArr[4].addEventListener('click', e => {
    let arr = createArr();
    shuffleArray(arr);
    printArr(arr,0,arr.length);
    arr.sort(compareator);
    printArr(arr,0,arr.length);
})


body = document.querySelector('body');

for(let i=0;i<5;i++){
    body.appendChild(btnArr[i]);
}
