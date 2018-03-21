

function reverseArray(arr) {
    let output = [];
    for (let i = arr.length-1; i >= 0; i--) {
        output.push(arr[i]);
    }
    return output;
}

/* function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 0, arr.pop());
    }
} */

function reverseArrayInPlace(arr) {
    for(let i = 0; i < arr.length; i++) {
        let first = arr.shift()
        let sliced = arr.slice(arr.length-i)

        for(let j = 0; j < sliced.length; j++) {
            arr.pop()
        }

        sliced.unshift(first)

        for(let k = 0; k < sliced.length; k++) {
            arr.push(sliced[k])
        }
    }
}
console.log(reverseArray(["A", "B", "C"]));
let foo = reverseArrayInPlace([1, 2, 3, 4, 5]);
console.log(foo);