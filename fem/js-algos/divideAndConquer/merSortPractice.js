// This function will be called recursivelly
// will merge arrays passed and return an array in non-decending order
function merge(left, right) {
    let idxLeft = 0;
    let idxRight = 0;
    const result = [];

    while(idxLeft < left.length && idxRight < right.length) {
        if(left[idxLeft] < right[idxRight]) {
            result.push(left[idxLeft]);
            ++idxLeft;
        } else {
            result.push(right[idxRight]);
            ++idxRight;
        }
    }

    return [...result, ...left.slice(idxLeft), ...right.slice(idxRight)];

}

function mergeSort(arr) {
    //base case
    if(arr.length === 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}


const test = [3, 2, 1];
console.log(mergeSort(test)); // => [1, 2, 3];
