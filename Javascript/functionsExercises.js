function isEven(number)
{
    return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

function factorial(number)
{
    var result = 1;
    while(number !== 0) {
        result *= number;
        number--;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

function kebabToSnake(kebab)
{
    return kebab.replace("-","_");
}

console.log(kebabToSnake("hello-world"));