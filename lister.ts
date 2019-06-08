class Job {
    constructor(public tasks: Task[]) {
    }
}

interface Task {
    name: string;
    author: string;
}

function lister(job: Job) {
    return job.tasks.map((task) => "Hello, " + task.name + " and " + task.author).join("\n");
}

let task1 = {"name": "Clean the dishes", "author": "annie"};
let task2 = {"name": "Go to the shops", "author": "annie"};
let job = new Job([task1, task2]);

console.log(lister(job));
