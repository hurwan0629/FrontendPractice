/*
  목표:
  1. 유니온 타입 써보기
  2. 문자열 리터럴 타입으로 상태값 제한하기
  3. 함수 인자에 유니온 타입 붙이기
*/

// 1) id가 number 또는 string이 될 수 있도록 타입을 붙여보세요.
let id: number | string = 101;

// 2) 아래 Status 타입을 완성하세요.
type Status = "loading" | "success" | "error";

// 3) requestStatus 변수에 Status 타입을 붙여보세요.
let requestStatus: Status = "loading";

// 4) number 또는 string을 받아서 문자열을 반환하는 함수를 완성하세요.
function formatId(value: number | string) {
  return `ID: ${value}`;
}

// 5) role 에 들어갈 수 있는 값을 제한하는 타입을 만들어보세요.
type Role = "admin" | "user";

let role: Role = "admin";

// 6) 아래 코드는 왜 에러가 나야 하는지 확인해보세요.
// requestStatus = "pending"; -> requestStatus는 "loading", "success", "error" 중 하나만 되기 때문에
// role = "manager"; -> role은 "admin", "user" 중 하나만 되기 때문에

const firstIdText: string = formatId(1);
const secondIdText: string = formatId("A-101");

export {};
