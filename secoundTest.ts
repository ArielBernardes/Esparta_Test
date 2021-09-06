/* -- that, given a zero-indexed array A consisting of N integers, returns the number of distinct values in array A. -- */

const secoundAnwser = (array: number[]): number => {
    let newArr = array.sort()
    for (let i = 0; i < newArr.length; i++) {
        if(array[i] !== array[i-1] && array[i] !== array[i+1]) {
            return array[i]
        }
    }
}

/* -- that, given a zero-indexed array A consisting of N integers, returns the number of distinct values in array A. -- */