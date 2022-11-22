
function merge(left, right) {

    let leftIdx = 0;
    let rightIdx = 0;

    let result = [];

    while(leftIdx < left.length && rightIdx < right.length) {
        if(left[leftIdx] < right[rightIdx]) {
            result.push(left[leftIdx]);
            leftIdx++;
        }
        if(left[leftIdx] > right[rightIdx]) {
            result.push(right[rightIdx]);
            rightIdx++;
        }
    }

    return [...result, ...left.slice(leftIdx), ...right.slice(rightIdx)];

}

function mergeSort(arr) {
    
    //base case
    if(arr.length === 1) return;

    const middle = Math.floor(arr.legnth / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
