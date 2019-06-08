// Added `: string`
// Type annotations in TypeScript are lightweight ways to record the intended contract of the function or variable
function lister(task: string) {
    return "Hello, " + task;
}

let task = "Clean the dishes";

document.body.innerHTML = lister(task);
