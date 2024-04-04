/** @format */

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = [["Banana", "Orange"],[ "Apple", "Mango"]];
// let result = fruits.length;
// result = fruits.toString(); // stringe cevirir
// result = fruits.at(3); //menfi eded qebul etmir edede uygun sheyi yazir
// result = fruits.join("   ");
// // result=fruits.pop() //sonuncunu silir ve sildiyini geri qaytarir
// result = fruits.push(); //sona elave edir
// result = fruits.shift(); //birincini silir
// result = fruits.unshift(); //birinciye elave edir
// // result=delete.age()  //birincini silir
// result = fruits.concat(fruit); //birincini silir
// result = fruits.copyWithin(1,0) //defe,index
// result = fruits.flat() //baxarsan buna
// result = fruits.splice(2, 0,"Armud") //oz arrayine tesir edir ilk index
// // tospliced() bax
// result = fruits.slice(1,2)       //1den bashlayib 2sini silir
// console.log(result);

let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];

function Check(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
Check(students);

function name(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("ad-- : ", array[i].name);
  }
}
name(students);

function surname(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("ad soyad--", array[i].name + " " + array[i].surname);
  }
}
surname(students);

function fail(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].fail == true) {
      console.log("kesri var---", array[i].name + " " + array[i].surname);
    }
  }
}
fail(students);

function hobbies(array) {
  let max = "";
  let x;

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element.hobbies.length > max.length) {
      max = element.hobbies;
      x = element;
    }
  }
  console.log("en cox hobbisi olan telebe ve say--", x.name + ": " + x.hobbies);
}
hobbies(students);

function ortalama(array) {
  let max = 0;
  let x;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (element.avgPoint > max) {
      max += element.avgPoint;
      x = element;
    }
  }
  console.log(
    "ortalamasi en boyuk olan--",
    x.name + " " + x.surname + ": " + x.avgPoint
  );
}
ortalama(students);

function parol(array) {
  let max = "";
  let x;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element.loginDetail.password > max) {
      max = element;
      x = element;
    }
  }
  console.log(
    "parol--",
    x.name + " " + x.surname + ": " + x.loginDetail.password
  );
}
parol(students);

function boyfriend(array) {
  let max = "";
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element.boyfriendGirlfriend == true) {
      max = element.boyfriendGirlfriend;
      console.log(
        "boyfriend--",
        element.name +
          " " +
          element.surname +
          ": " +
          element.boyfriendGirlfriend
      );
    }
  }
}
boyfriend(students);

function teacher(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let x;
    if (element.age === 20) {
     x+=element
    }
    console.log(
        "Sevimli muellim--",
        element.name +" "+ element.surname +": " +element.teacher[0].name + " "+element.teacher[1].name +" "+element.teacher[2].name
      );
  }
}
teacher(students);
