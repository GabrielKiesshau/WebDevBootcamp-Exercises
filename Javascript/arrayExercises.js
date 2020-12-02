function printReverse(array)
{
    for(let i = array.length-1; i > 0; i--)
    {
        console.log(array[i]);
    }
}

function isUniform(array)
{
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i-1])
            console.log("Array is not uniform");
            return false;
    }
    console.log("Array is uniform");
    return true;
}

function sumArray(array)
{
    var sum = 0;
    array.forEach(element => {
        sum += element;
    });
    console.log(sum);
    return sum;
}

function max(array)
{
    var maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue)
            maxValue = array[i];
    }
    console.log(maxValue);
    return maxValue;
}

var myList = [1, 3, 6, 4];
var myListTwo = [2, 2, 2, 2];

//printReverse(myList);
//isUniform(myListTwo);
//isUniform(myListTwo);
//sumArray(myList);
//max(myList);