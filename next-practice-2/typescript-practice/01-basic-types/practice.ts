/*
  목표:
  1. 변수에 기본 타입 붙이기
  2. 함수의 매개변수와 반환값 타입 붙이기
  3. 타입 에러가 왜 나는지 직접 확인하기
*/

// 1) 아래 변수들에 타입을 붙여보세요.
let bootcampName: string = "TypeScript Start";
let currentDay: number = 1;
let isFinished: boolean = false;

// 2) 아래 함수에 타입을 붙여보세요.
function multiply(a: number, b: number) {
  return a * b;
}

// 3) 이름을 받아서 환영 문구를 반환하는 함수를 완성하세요.
function getWelcomeMessage(name: string) {
  return `Hello, ${name}`;
}

// 4) true/false 값을 받아 상태 문구를 반환하는 함수를 완성하세요.
function getStatusMessage(isOnline: boolean) {
  if (isOnline) {
    return "online";
  }

  return "offline";
}

// 5) 아래 코드는 왜 문제가 되는지 확인해보세요.
//    직접 타입을 붙인 뒤, 에러가 나도록 두는 것이 목적입니다.
let score: number = 100;
// score = "one hundred";
// number에 string를 넣어서

// 6) 아래 결과가 어떤 타입인지 스스로 말해보세요.
const total = multiply(3, 4); // number
const welcome = getWelcomeMessage("Haru"); // string
const statusText = getStatusMessage(true); // string

export {};
