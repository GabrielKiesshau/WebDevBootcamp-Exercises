function average(values) {
    sum = 0;
    values.forEach(value => {
        sum += value;
    });
    return Math.round(sum / values.length);
}

console.log(average([9, 3, 1, 5]));