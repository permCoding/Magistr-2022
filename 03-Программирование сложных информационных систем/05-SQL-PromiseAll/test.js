const log = console.log

var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
// var p5 = new Promise((resolve, reject) => {
//   // Этот промис прервёт Promise.all
//   reject("reject");
// });

// let tasks1 = [p1, p2, p3, p4, p5]
let tasks2 = [p1, p2, p3, p4]

Promise.all(tasks2).then(
  (values) => { log(values); }
//   (reason) => { log(reason); },
); // Выведет: "reject"
