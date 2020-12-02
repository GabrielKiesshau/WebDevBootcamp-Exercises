var number = -10;
while(number < 19)
{
    console.log(number);
    number++;
}

number = 10;
while(number < 40)
{
    console.log(number);
    number += 2;
}

number = 300;
while(number < 333)
{
    if (number % 2 === 1)
        console.log(number);
    number++;
}

number = 5;
while(number < 50)
{
    if (number % 3 === 0 && number % 5 === 0)
        console.log(number);
    number++;
}