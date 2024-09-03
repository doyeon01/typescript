// 기본 타입 간의 호환성

let num1: number = 10;
let num2: 10 = 10;
// 업캐스팅이라 가능하다 !
num1 = num2

// 객체 타입 간의 호환성 -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
}

//  서브타입(추가 프로퍼티가 있으면 서브타입임)
type Dog = {
  name: string;
  color:  string;
  breed: string 
}

let animal: Animal = {
  name: '기린',
  color: 'yellow'
}

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도'
}

animal = dog;
// 다운캐스팅
// dog = animal


// 슈퍼타입
// type Book = {
//   name: string;
//   price: number;
// }

//서브타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'reactjs'
}


book = programmingBook
// programmingBook = book


// 초과 프로퍼티 검사: 객체 리터럴을 사용하면 불가능

type Book = {
  name: string;
  price: number;
}

let book2: Book = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs'
}

// 변수로 할당하면 가능가능
let book3: Book = programmingBook

function func(book: Book) {}
func({
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs'
});

// 변수로 할당하면 가능하다
func(programmingBook)
