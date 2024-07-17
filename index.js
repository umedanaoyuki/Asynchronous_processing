// function sleep(ms) {
//   //const startTime = new Date();
//   // while (new Date() - startTime < ms );

//   setTimeout(function () {
//     alert("sleep関数を完了しました。");
//   }, ms);

//   alert("sleep関数が完了しました");
// }

// // sleep(3000);

// const btn = document.querySelector("button");
// function clickHandler() {
//   alert("ボタンがクリックされました。");
// }
// btn.addEventListener("click", clickHandler);

// let val = 0;

// setTimeout(() => {
//   val = 1;
//   console.log(val);
// }, 0);

// console.log(val);

val = -1;

function timer(callback) {
  setTimeout(function () {
    val = Math.floor(Math.random() * 11);
    callback(val);
  }, 1000);
}

// timer();

function operations(val) {
  console.log(val);
}

timer(operations);

console.log("こちらは先に実行される");
