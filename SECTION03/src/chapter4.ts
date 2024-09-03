// 대수 타입 
//-> 여러 개의 타입을 합성해서 새롭게 만들어 낸 타입
//-> 합집합 타입과 교집합 타입이 존재합니다.



// 합집합 - Union 타입

let a: string | number | boolean;
a = 1;
a = 'hello';
a =  true;


let arr: (number | string | boolean)[] = [1, 'hello', true];

// Dog와 Person은 교집합  
// type Dog = {
//   name: string;
//   color: string;
// }

// type Person = {
//   name: string;
//   language: string;
// }

type Union1 = Dog | Person

//DOG에 속함
let union1: Union1 = {
  name:'',
  color:''
}

//Person에 속함
let union2: Union1 = {
  name:'',
  language:'',
}

//교집합
let union3: Union1 = {
  name: '',
  language:'',
  color:''
}

// let union4: Union1 = {
//   name:''
// }


// 2. 교집합 타입 - Intersection 타입

let variable: number & string;

type Dog = {
  name: string;
  color: string;
}

type Person = {
  name: string;
  language: string;
}


type Intersection = Dog & Person;

let intersection : Intersection = {
  name: "",
  color: "",
  language: ""
}