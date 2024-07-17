// import "./sample.json";

console.log("実行");

const func = async () => {
  const response = await fetch("sample.json");
  const data = await response.json();

  for (const { key, value } of data) {
    console.log(key + " " + value);
  }
  console.log("完了");
};

func();
