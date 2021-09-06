/* -- that, given two positive integers N and M, returns the number of chocolates that you will eat. -- */

const thirdAnwser = (n : number , m: number ) : number => {
    let current = 0

    for(let i = 1; i <= n; i++) {

        if((current + m) % n !== 0) {
            current = (current + m) % n 
        }
        else {
            return i 
        }

    }
}

/* -- that, given two positive integers N and M, returns the number of chocolates that you will eat. -- */