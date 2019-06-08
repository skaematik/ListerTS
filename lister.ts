class Job {
    constructor(public tasks: Task[]) {
    }
}

interface Task {
    name: string;
    author: string;
}

function lister(job: Job) {
    return "Hello, " + job.tasks[0].name + " and " + job.tasks[0].author;
}

let task1 = {"name": "Clean the dishes", "author": "annie"};
let job = new Job([task1]);

console.log(lister(job));
