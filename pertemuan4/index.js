// // // //JavaScript function

// // // // function greetings() {
// // // // return "Hello";
// // // // }

// // // console.log(greetings());

// // // function greetings() {
// // //     return "hello";
// // // }
// // const age = 17; //Global

// // const greetings = function (name) {
// //     //Parameter
// //     // console.log(age);
// //     const job = "Teacher";
// //     if (job === "Teacher");
// //     return "Hello";
// // };
// // console.log(job);
// // console.log(greetings("Joxe")); //Argument

// //IIFE (Immediately Invoked Function Expression)
// // Anonymous Function

// // const output = (function () {
// //     //console.log("Hello IIFE");
// //     return "Hello IIFE";
// // })();

// // console.log(output);

// //Callback function

function logGreetings(greetings) {
    console.log(greetings);
}

function createGreetings(name, callback) {
    const greetings = "Hello " + name;
    callback(greetings);
}

createGreetings("Joxe", function (greetings) {
console.log(greetings);
});
 


