const arr = [
  20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];
let low = 0;
let high = arr.length - 1;
let find_value = 100;
let flag = 0;

while (low <= high) {
  let mid = Math.round((low + high) / 2);

  if (arr[mid] === find_value) {
    console.log('finding value at index', mid);
    flag += 1;
    break;
  }
  if (find_value > arr[mid]) {
    high = mid - 1;
  }
  if (find_value < arr[mid]) {
    low = mid + 1;
  }
}

if (flag === 0) {
  console.log('value is not finding');
}
