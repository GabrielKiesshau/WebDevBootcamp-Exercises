// Built-in For each
var colors = ["red", "orange", "yellow", "green"];

//colors.forEach(function(color) {
//    console.log(color);
//});

myForEach(colors, function(color) {
    console.log(color);
});

function myForEach(array, callback)
{
    for (let i = 0; i < array.length; i++) {
        callback(colors[i]);
    }
}