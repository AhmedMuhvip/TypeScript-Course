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


interface IUser {
  username: string,
  age: number,
  isMarried: boolean,
}

interface INewUser extends IUser {
  address: string,
  ImageUrl?: string,
}


const user1: IUser = {
  username: "Ahmed",
  age: 25,
  isMarried: true
}
const user2: INewUser = {
  username: "Ahmed",
  age: 25,
  isMarried: true,
  address: "Omak"
}
console.log(user1)
console.log(user2)