/*
 * Concept merge sort:
 *     1. Divide input array into subarrays of length 1
 *     2. Repeatedly merge subarrays using two pointers and sort
 * 
 *     Pseudocode: merge sort
 *
 *     mergeSort(list)
 *     base case: if list.length < 2, return
 *     break the list into halves L & R
 *     Lsorted = mergeSort(L)
 *     Rsorted = mergeSort(R)
 *     return merge(Lsorted, Rsorted)
 *
 * */
function merge(left, right) {
    let result = [];
    let idxLeft = 0;
    let idxRight= 0;
    // Break out of loop if any one of the array gets empty
    while(idxLeft < left.length && idxRight < right.length) {
        if(left[idxLeft] < right[idxRight]) {
            result.push(left[idxLeft]);
            idxLeft++;
        } else {
            result.push(right[idxRight]);
            idxRight++;
        }
    }
    //push remaining index, in case subarrays are not even
    //let lastValue;
    //if(left.length > right.length) {
        //lastValue = left[left.length - 1];
    //} else lastValue = right[right.length - 1];

    return [...result, ...left.slice(idxLeft), ...right.slice(idxRight)];
    
}

function mergeSort(arr) {

    // base case
    if(arr.length === 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right)); 
}

const test = [20, 24, 15, 2];
console.log(mergeSort(test));
