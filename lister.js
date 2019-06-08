var Job = /** @class */ (function () {
    function Job(tasks) {
        this.tasks = tasks;
    }
    return Job;
}());
function lister(job) {
    return job.tasks.map(function (task) { return "Hello, " + task.name + " and " + task.author; });
}
var task1 = { "name": "Clean the dishes", "author": "annie" };
var task2 = { "name": "Go to the shops", "author": "annie" };
var job = new Job([task1, task2]);
console.log(lister(job));
