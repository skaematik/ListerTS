var Job = /** @class */ (function () {
    function Job(task) {
        this.task = task;
    }
    return Job;
}());
function lister(job) {
    return "Hello, " + job.task.name + " and " + job.task.author;
}
var task1 = { "name": "Clean the dishes", "author": "annie" };
var job = new Job(task1);
console.log(lister(job));
