// 타입 추론

// 타입넓히기(타입 넓혀서 추론...)
let a = 10;
let b = 'hello'
let c = {
  id:1,
  name: '이정환',
  profile: {
    nickname: 'winterlood'
  },
  urls: ["https://winterlood.com"]
};


let {id, name, profile} = c
let [one, two, three] = [1, 'hello','true']

function func(message = 'hello') {
  return "hello"
}



let d; // 암묵적 any는 진화한다 <> 명목적 any...
d = 10; 
d.toFixed();


d = 'fixed';
d.toUpperCase();
d.toFixed()

const num = 10
const str = 'hello'

let arr = [1, 'string']

 

