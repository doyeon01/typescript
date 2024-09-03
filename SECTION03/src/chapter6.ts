// 타입 단언

type Person = {
  name: string;
  age: number;
}
// 추가 프로퍼티 추가하고 싶다면 타입 단언을 사용할 것 

let person = {} as Person;
person.name = '이정환';
person.age = 27


type Dog = {
  name: string;
  color: string;
}

let dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도'
} as Dog


// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함 

let num1 = 10 as never
let num2 = 10 as unknown
let num3 = 10 as unknown as string;
// 다중 단언을 하게 된다면 가능

// const 단언

let num4 = 10 as const;

let cat = {
  name:'야옹이',
  color:'yellow'
} as const

// Non Null 단언

type Post = {
  title: string;
  author?: string
}

let post:Post = {
  title:"게시글1",
  author:'이정환'
}

const len: number = post.author!.length;
// -> 옵셔널 체이닝: author의 값이 null이거나 undefined라면 오류가 발생.. 
// 근데 author가 없으면 undefined

// !.는 author가 undefined이거나 null이 아닐것으로 단언할 수 있다.