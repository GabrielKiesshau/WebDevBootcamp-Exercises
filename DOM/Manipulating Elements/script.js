
function changeText()
{
  var p = document.querySelector("p");

  p.textContent = "...you have to select the element and change its value";
}

function changeImage()
{
  var image = document.querySelector("img");

  image.setAttribute("src", "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
}