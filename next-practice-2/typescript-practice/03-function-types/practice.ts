/*
  목표:
  1. 함수 선언식에 타입 붙이기
  2. 화살표 함수에 타입 붙이기
  3. map 콜백 함수에 타입 감각 익히기
*/

// 1) 두 숫자를 받아 더한 값을 반환하는 함수에 타입을 붙여보세요.
function add(a: number, b: number): number {
  return a + b;
}

// 2) 이름과 나이를 받아 소개 문장을 반환하는 함수에 타입을 붙여보세요.
function introduce(name: string, age: number | string): string {
  return `${name} is ${age} years old.`;
}

// 3) 아래 화살표 함수에 타입을 붙여보세요.
const divide = (a: number, b: number): number => {
  return a / b;
};

// 4) boolean 값을 반대로 바꾸는 함수를 완성하세요.
const toggle = (value: boolean): boolean => {
  return !value;
};

// 5) map 안의 num 파라미터 타입을 직접 붙여보세요.
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num: number): number => {
  return num * 2;
});

// 6) 아래 결과 타입을 스스로 말해보세요.
const addResult: number = add(2, 5);
const introText: string = introduce("Haru", 20);
const divideResult: number = divide(10, 2);
const toggled:boolean = toggle(true);

export {};
