interface Task {
    name: string;
    author: string;
}

function lister(task: Task) {
    return "Hello, " + task.name + " and " + task.author;
}

let task = {"name": "Clean the dishes", "author": "annie"};

document.body.innerHTML = lister(task);
