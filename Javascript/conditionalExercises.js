var age = 25;

if (age < 0)
{
    console.log("Age is negative");
}
else if (age === 21)
{
    console.log("Happy 21st birthday");
}

if (age % 2 == 1)
{
    console.log("Your age is an odd number");
}

if (age % Math.sqrt(age) === 0)
{
    console.log("Your age is a perfect square");
}