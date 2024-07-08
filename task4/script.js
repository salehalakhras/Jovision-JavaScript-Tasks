
function createArr() {
  let arr = Array(101);

  for (let i = 0; i < 101; i++) {
    arr[i] = i;
  }

  return arr;
}

function printSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 == 0)
            sum += arr[i];
    }
    console.log(sum);
}

btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
    arr = createArr();
    printSum(arr);
});
