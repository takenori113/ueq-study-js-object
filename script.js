const person = {
  firstName: "Ken",
  lastName: "Takahashi",
  age: 29,
};

export const func1 = () => {
  return {};
};

export const func2 = () => {
  return "";
};

const jsonStr = `
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  `;

export const func3 = () => {
  return "";
};

const main = () => {
  // func1の実行例
  const result1 = func1();
  console.log(result1);
  // func2の実行例
  const result2 = func2();
  console.log(result2);
  // func3の実行例
  const result3 = func3();
  console.log(result3);
};

main();
