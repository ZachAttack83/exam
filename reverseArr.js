module.exports = function reverseArr(arr) { 
    for (var i = 0; i <= arr.length-i-1; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-i-1]
        arr[arr.length-i-1] = temp;
    }
    return arr;
}

// tests:
// const arr = [1,2,3,4,5,6,7, 8];
// reverseArr(arr);
// console.log(arr);
// const arr = [1,2,3,4,5,6,7];
// console.log(arr);