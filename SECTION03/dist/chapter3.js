// Unknown  타입
function unknownExam() {
    let a = 1;
    let b = 'hello';
    let c = true;
    let d = null;
    let e = undefined;
    let unknownVar;
    // 다운캐스팅 불가능
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}
// Never 타입 -> 공집합
function neverExam() {
    // 반환값 없고 절대 불가능..
    function neverFunc() {
        while (true) { }
    }
    // 업캐스팅
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
    // 다운캐스팅 불가능
    // let never1: never = 10;
    // let never2: never = "string"
    // let never3: never = true
}
// Void 타입
function voidExam() {
    function voidFunc() {
        console.log('hi');
    }
    // 업캐스팅 
    let voidVar = undefined;
}
// any 타입
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    // 다운캐스팅 가능
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar
}
export {};
