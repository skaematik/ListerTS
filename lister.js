function lister(task) {
    return "Hello, " + task.name;
}
var task = { "name": "Clean the dishes" };
document.body.innerHTML = lister(task);
