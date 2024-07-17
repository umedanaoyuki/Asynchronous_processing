// function delay() {
//   setTimeout(function () {
//     console.log("1秒たちました");
//     setTimeout(function () {
//       console.log("さらに1秒たちました");
//     }, 1000);
//   }, 1000);
// }

// function sayHello(message) {
//   console.log(message);
// }

// function bye(message) {
//   alert(message);
// }

// delay(sayHello, "こんにちは", 1000);

// delay(bye, "さようなら", 2000);

// delay();

let timeInstance = new Promise((resolve, reject) => {
  setTimeout(() => {
    const time = new Date();
    const seconds = time.getSeconds();

    console.log(seconds);

    // 偶数
    if (seconds % 2 === 0) {
      resolve(seconds);
    } else {
      // 奇数
      reject(seconds);
    }
  }, 1000);
});

timeInstance = timeInstance
  .then((number) => {
    console.log(`${number}:成功`);
  })
  .catch((number) => {
    console.log(`${number}:失敗`);
  })
  .finally(() => {
    console.log("処理を終了します");
  });

// timeInstance = timeInstance.catch((number) => {
//   console.log(`${number}:失敗`);
// });

// timeInstance = timeInstance.finally(() => {
//   console.log("処理を終了します");
// });
