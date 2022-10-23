
// the array you pass to this funciton most be SORTED
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let middle = Math.floor((start + end) / 2);

        if(arr[middle] === target) {
            return middle;
        } else {
            if(arr[middle] < target) {
                start = middle + 1;
            } else {
                end  = middle - 1;
            }
        }
    }

    return -1;
}

const test = [3, 5, 20, 21, 99];
console.log(binarySearch(test, 5));
