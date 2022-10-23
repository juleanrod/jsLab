
function binarySearch(arr, target) {
    // assuming we receive a sorted array of integers
    // if we can't find the target, return -1
    // else we return the index where we found the target value

    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        if(arr[middle] === target)
            return middle;
        else {
            if(arr[middle] < target) {
                min = middle + 1;
            } else {
                max = middle - 1;
            }
        }
    }

    // if we exit the loop and we didnt find a match
    return -1;
}

const array = [1,2,3,4,5,6,7,8,9];
console.log(array)
console.log(binarySearch(array, 7))
console.log(binarySearch(array, 1))
console.log(binarySearch(array, 10))



