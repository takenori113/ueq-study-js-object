const person = {
  firstName: "Ken",
  lastName: "Takahashi",
  age: 29,
};

export const func1 = () => {
  const personDetail = {
    ...person,
    gender: "male",
    interests: [
      {
        name: "programming",
        emoji: "💻",
      },
      {
        name: "motorcycle",
        emoji: "🏍",
      },
    ],
  };
  return personDetail;
};

export const func2 = () => {
  return JSON.stringify(person);
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
//   const obj = JSON.parse(jsonStr);

//   const result = Object.entries(obj).filter((element) => {
//     return element[0] === "name" || element[0] === "email" ||element[0]==="company"
//   }).map((element) => {
//     if(element[0]==="name"||element[0]==="email"){
//       return element[1];
//     }else{
//      return element[1].name;
//     }
    
//   });
//  return result.join(',');
const obj = JSON.parse(jsonStr);
return obj.name + "," + obj.email +","+ obj.company.name;
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
