export default function bs_list(haystack: number[], needle: number): boolean {

    let min: number = 0;
    let max: number = haystack.length - 1;
    
    while(min <= max) {
        let middle = Math.floor((min +  max) / 2);
        if(haystack[middle] === needle) return true;
        else {
            if(haystack[middle] < needle)
                min = middle + 1;
            else 
                max = middle - 1;
        }
    }

    return false;

}
