// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
function func(a, b) {
    return a + b;
}
// 함수의 반환값 타입은 자동으로 추론되기 때문에 생략해도 된다!
function func1(a, b) {
    return a + b;
}
// 화살표 함수의 타입 정의 방식
const add = (a, b) => a + b;
// 함수의 반환값 타입은 자동으로 추론되기 때문에 생략해도 된다 !
const add1 = (a, b) => a + b;
// 매개변수 기본값 설정하기
// 함수의 매개변수에 기본값이 설정되어 있으면 타입이 자동으로 추론된다
// 이 경우에는 타입 정의를 생략해도 됨!
function introduce(name = '이정환') {
    console.log(`name : ${name}`);
}
// 기본값과 다른 타입으로 매개변수의 타입을 정의하면 오류 발생스..
// function introduce1(name: number = '이정환') {
//   console.log(`name : ${name}`)
// }
// 기본값과 다른 타입의 값을 인수로 전달해도 오류 발생
// introduce(1)
// 선택적 매개변수 설정하기 
// 매개변수의 이름 뒤에 물음표를 붙혀주면 선택적 매개변수가 되어 생략이 가능
function introduce2(name = '이정환', tall) {
    console.log(`name : ${name}`);
    console.log(`tall : ${tall}`);
}
introduce2("이정환", 22);
introduce2("이정환");
// 선택적 매개변수는 undefined와 유니온 된 타입으로 추론.. 
// 타입 좁히기가 필요하다 !
function introduce3(name = '이정환', tall) {
    console.log(`name : ${name}`);
    if (typeof tall === 'number') {
        console.log(`tall : ${tall + 10}`);
    }
}
// 선택적 매개변수는 필수 매개변수 앞에 올 수 없다. 
// 반드시 뒤에 배치해야 한다.
// 오류!! function introduce4(tall ?: number, name = '이정환') 
// 나머지 매개변수 
function getSum(...rest) {
    let sum = 0;
    rest.forEach((it) => (sum + it));
    return sum;
}
// 나머지 매개변수의 길이를 고정하고 싶다면 다음과 같이 튜플 타입을 사용
function getSum1(...rest) {
    let sum = 0;
    rest.forEach((it) => (sum + it));
    return sum;
}
getSum(1, 2, 3);
getSum(1, 2, 3, 4);
export {};
