
// class School {
//   name: string;
//   uid: string;
//   constructor(name: string) {
//     this.name = name
//   }
// }

// type constructorParams = ConstructorParameters<typeof School>

type Person = {
  name: string,
  age: number
}

// type Person<T> = T extends Man ? T : Man
// const p: Person<Man> = {
//   name: "小李",
//   age: 10
// }

//?.name


// const me: Person = { name: 'gzx', age: 16 };
// type P = typeof me;  // { name: string, age: number | undefined }
// const you: typeof me = { name: 'mabaoguo', age: 69 }  // 可以通过编译


const num:number = 1_2_345.6_78_9!

