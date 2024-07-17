function promiseFactory(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(count);
      count = count + 2;
      resolve(count);
    }, 1000);
  });
}

promiseFactory(0)
  .then((count) => {
    return promiseFactory(count);
  })
  .then((count) => {
    return promiseFactory(count);
  })
  .then((count) => {
    return promiseFactory(count);
  })
  .catch((errorCount) => {
    console.error(`エラーに飛びました。現在のカウントは${errorCount}です。`);
  })
  .finally(() => {
    console.log("処理を終了します。");
  });
