// 함수 타입을 타입 별칭과 함께 별도로 정의할 수 있음 = 함수 타입 표현식

type Add = (a: number, b: number) => number;

// const add: Add = (a, b) => a+b

// 함수 타입 표현식은 다음과 같이 여러개의 함수가 동일한 타입을 갖는 경우에 요긴하게 사용된

// const add = (a: number, b: number) => a + b;
// const sub = (a: number, b: number) => a - b;
// const multiply = (a: number, b: number) => a * b;
// const divide = (a: number, b: number) => a / b;


// 위 코드를 함수 타입 표현식을 이요하면 간결하게 만들 수 있음
// 동일한 타입의 함수가 추가 되어도 타입 주석을 이용해 타입 정의만 해주면 되어 매우 편리

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

const add1: (a: number, b: number) => number = (a, b) => a + b;


// 호출 시그니쳐: 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식

type Operation2 = {
  (a: number, b: number): number;
}

const add2: Operation2 = (a, b) => a + b;
const sub2 : Operation2 = (a, b) => a - b;
const multiply2 : Operation2 = (a, b) => a * b;
const divide2 : Operation2 = (a, b) => a / b;


// 함수도 객체이기 때문에, 객체를 정의하듯 함수의 타입을 별도로 정의할 수 있음
// 호출 시그니쳐 아래에 프로퍼티를 추가 정의하는 것도 가능.
// 이럴 경우, 함수이자 일반 객체를 의미하는 타입 = 하이브리드 타입

type Operation3 = {
  (a: number, b: number): number;
  name: string;
}

const add3: Operation3 = (a, b) => a + b;
add3.name