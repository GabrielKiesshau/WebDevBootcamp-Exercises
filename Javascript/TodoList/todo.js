var option;
var todoList = [];

function NewItem()
{
    var newTodo = prompt("Enter a new todo");
    todoList.push(newTodo);
}

function DeleteItem()
{
    var itemIndex = prompt("Enter index of item to delete");
    todoList.splice(itemIndex + 1, 1);
}

function ListItems()
{
    console.log("***********");
    todoList.forEach(function(item) {
        console.log(item);
    });
    console.log("***********");
}

do
{
    option = prompt("What would you like to do?");

    switch(option)
    {
        case "new":
            NewItem();
        break;
        case "delete":
            DeleteItem();
        break;
        case "list":
            ListItems();
        break;
        case "quit":
        break;
        default:
            alert("Invalid option");
        break;
    }
} while(option !== "quit");