var button = document.querySelector("button");
var color = "white";

button.addEventListener("click", function ChangeColor()
{
    if (color == "white")
        color = "green";
    else
        color = "white";

    document.body.style.backgroundColor = color;
});