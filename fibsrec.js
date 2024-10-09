function fibsrec(n) {
    function fibs(num) {
        if (num === 1) return 0;
        if (num === 2) return 1;
        return fibs(num - 1) + fibs(num -2);
    }

    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(fibs(i+1));
    } return array;
}