// // import helloWorld, { fullName as namaLengkap, angka, john, hello } from "./utils.js";
// // import sayGreetings from "./sayGreetings.js";


// // console.log(namaLengkap);
// // console.log(angka);
// // console.log(john);
// // hello();
// // sayGreetings();

// // ASYNCHRONOUS JS

// //SYNCHRONOUS -> single thread (1proses) -> blocking
// // console.log("Proses 1");
// // console.log("Proses 2");
// // console.log("Proses 3");
// // console.log("Proses 4");

// //ASYNCHRONOUS -> multi threads -> non blocking
// //ada 2 jenis asynchronous

// //1. Parallel
// // setTimeout(() => {
// //     console.log("Proses 1");
// // }, 3000);
// // console.log("Proses 2");
// // setTimeout(() => {
// //     console.log("Proses 3");
// // }, 4000);
// // console.log("Proses 4");

// //2. concurrency
// //2.1 callback
// // setTimeout(() => {
// //     console.log("Proses 1");
// //     setTimeout(() => {
// //         console.log("Proses 2");
// //         setTimeout(() => {
// //             console.log("Proses 3");
// //             setTimeout(() => {
// //                 console.log("Proses 4");
// //             }, 3000);
// //         }, 3000);
// //     }, 3000)
// // }, 3000);

// //2.2 Promise (ES6)
// //-Buat promise
// const newPromise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("Berhasil")
//     } else {
//         reject("Gagal");
//     }
// });

// //-Pakai promise
// // 1. then - catch
// newPromise.then((result) => {
//     console.log(result);
// })
// .catch((error) => console.error());
// .finally 

// //2. async - await (ES7)
// // async - await itu digunakan didalam fungsi

// const consumePromise = async () => {
//     try {
//         let result = await newPromise;
//         console.log(result);
//     } catch (error) {
//         console.log(error)
//     } 
//     finally {
//         console.log("Ini pasti jalan");
//     }
// };

// consumePromise();