// console.log("Hello World");
// const usernmae = "Ahmed";
// usernmae * 3;


// =============================================== 

// let usernmae = "codeawy";

// const userProfile: { username: string, age: number, isMarried: boolean } = {
//   username: "Ahmed",
//   age: 25,
//   isMarried: true,
// }

// const newUser = { ...userProfile, country: "Egypt" };
// console.log(newUser);
// console.log(userProfile);


// interface IUser {
//   username: string,
//   age: number,
//   isMarried: boolean,
// }

// interface INewUser extends IUser {
//   address: string,
//   ImageUrl?: string,
// }


// const user1: IUser = {
//   username: "Ahmed",
//   age: 25,
//   isMarried: true
// }
// const user2: INewUser = {
//   username: "Ahmed",
//   age: 25,
//   isMarried: true,
//   address: "Omak"
// }
// console.log(user1)
// console.log(user2)


// interface IUser {
//   username: string,
//   age: number,
//   address: string
// }

// type userKeys = keyof IUser;


// const user: IUser = {
//   username: "Ahmed",
//   age: 18,
//   address: "Roma, Italy"
// }

// function getProperty(obj: IUser, key: userKeys) {
//   return obj[key];
// }

// console.log(getProperty(user, "age"))
// console.log(getProperty(user, "username"))


// function printLanguages(langarr: string[]) {
//   return `First Langauge ${langarr[0]}, Second Lang is ${langarr[1]}`;
// }

// console.log(printLanguages(['PHP', 'JS', 'C#']));


// enum Direction {
//   Up,
//   Right,
//   Bottom,
//   Left
// }
// const playerDirection = Direction.Right;

// console.log(playerDirection);

// function logArg<T>(arg: T) {
//   return arg;
// }

// console.log(logArg("Ahmed"));

// function swap<T>(arg1: T, arg2: T) {
//   return [arg2, arg1];
// }

// console.log(swap(10, 20))
// console.log(swap("Ahmed", "Muhammed"))
// console.log(swap("Ahmed", "tr"))

interface ICity {
  [key: string]: string
}

const cityDictionary: ICity = {
  cairo: 'Egypt',
  paris: 'France',
  istanbul: 'Turkey'
}

console.log(cityDictionary.cairo);