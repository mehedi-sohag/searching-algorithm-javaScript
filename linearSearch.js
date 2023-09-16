const arr = [1, 2, 3, 4, 5, 6];

let flag = 0;
let value = 5;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === value) {
    console.log('value is finding');
    flag++;
    break;
  }
}

if (flag === 0) {
  console.log('value is not finding');
}
