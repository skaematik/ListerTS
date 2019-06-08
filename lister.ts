interface Task {
    name: string;
}

function lister(task: Task) {
    return "Hello, " + task.name;
}

let task = {"name": "Clean the dishes"};

document.body.innerHTML = lister(task);
