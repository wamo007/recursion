function fibs(n) {
    let array = [];   
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            array = [0];
        } else if (i === 1) {
            array = [0, 1];
        } else {
            let next = array[i-2] + array[i-1];
            array.push(next);
        }
    } return array;
}