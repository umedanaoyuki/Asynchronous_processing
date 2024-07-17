function delay() {
  setTimeout(function () {
    console.log("1秒たちました");
    setTimeout(function () {
      console.log("さらに1秒たちました");
    }, 1000);
  }, 1000);
}

// function sayHello(message) {
//   console.log(message);
// }

// function bye(message) {
//   alert(message);
// }

// delay(sayHello, "こんにちは", 1000);

// delay(bye, "さようなら", 2000);

delay();
