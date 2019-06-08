var Job = /** @class */ (function () {
    function Job(tasks) {
        this.tasks = tasks;
    }
    return Job;
}());
function lister(job) {
    return "Hello, " + job.tasks[0].name + " and " + job.tasks[0].author;
}
var task1 = { "name": "Clean the dishes", "author": "annie" };
var job = new Job([task1]);
console.log(lister(job));
