Array.prototype.map = function (cb) { 
    let newArray = [];
    for (i = 0; i < this.length; i++){
        newArray.push(cb(this[i]));
    }
    return newArray;
}

const arr = [1,2,3];
console.log(arr.map((val) => val * val))