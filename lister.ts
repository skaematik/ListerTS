class Job {
    constructor(public task: Task) {
    }
}

interface Task {
    name: string;
    author: string;
}

function lister(job: Job) {
    return "Hello, " + job.task.name + " and " + job.task.author;
}

let task1 = {"name": "Clean the dishes", "author": "annie"};
let job = new Job(task1);

console.log(lister(job));
