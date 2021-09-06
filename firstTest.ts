/* -- returns the value of the unpaired element. -- */

const firstAnwser = (array: number[]) : number => {
    let objResult = {};
    for ( let item of array) {
        if (!objResult[item]) {
            objResult[item] = 1
        }
        else {
            objResult[item] += 1
        }
    }

    for ( let [key,value] of Object.entries(objResult)) {
        if( Number(value) % 2 !== 0) {
            return Number(key)
        }
    }
}

/* -- returns the value of the unpaired element. -- */

