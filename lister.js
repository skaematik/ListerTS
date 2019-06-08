function lister(task) {
    return "Hello, " + task.name + " and " + task.author;
}
var task = { "name": "Clean the dishes", "author": "annie" };
document.body.innerHTML = lister(task);
