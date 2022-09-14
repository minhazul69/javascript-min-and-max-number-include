function rearrange(arr, n) {
  let temp = new Array(n);
  let small = 0,
    large = n - 1;
  let flag = true;
  for (let i = 0; i < n; i++) {
    if (flag) temp[i] = arr[large--];
    else temp[i] = arr[small++];

    flag = !flag;
  }
  for (let i = 0; i < n; i++) arr[i] = temp[i];
}

let arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;

rearrange(arr, n);

// document.write("<br>Modified Array<br>");
for (let i = 0; i < n; i++) console.log(arr[i] + " ");
