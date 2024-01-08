Promises are the foundation of asynchronous programming in modern JavaScript. A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

Prerequisites:	A reasonable understanding of JavaScript fundamentals, including event handling.
Objective:	To understand how to use promises in JavaScript.

promise1: It will take 9 seconds (9000 milliseconds) before the "resolve 1" string is passed to the resolve function and the promise is considered resolved.

promise2: It will take 3 seconds (3000 milliseconds) before the "resolve 2" string is passed to the resolve function and the promise is considered resolved.

Promise Execution:

promise1: The executor function is executed immediately, and it schedules the resolve("resolve 1") to be called after a delay of 9000 milliseconds.
promise2: Similarly, the executor function is executed immediately, and it schedules the resolve("resolve 2") to be called after a delay of 3000 milliseconds.
Delay Handling:

The delay in both promises is handled by the setTimeout function. It is a feature of JavaScript that allows asynchronous execution. While the setTimeout is counting down, other parts of your code can continue to execute.
Resolution:

After the specified delay in each setTimeout elapses, the corresponding resolve functions are called, resolving the promises.
