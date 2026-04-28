/*
  목표:
  1. 옵셔널 프로퍼티 써보기
  2. 옵셔널 값을 기본값과 함께 처리하기
  3. 타입 추론을 어디까지 믿을지 감 잡기
*/

// 1) User 타입의 nickname 을 옵셔널 프로퍼티로 만들어보세요.
type User = {
  id: number;
  name: string;
  nickname?: string;
};

// 2) guest 와 member 변수에 User 타입을 붙여보세요.
const guest: User = {
  id: 1,
  name: "Guest",
};

const member: User = {
  id: 2,
  name: "Haru",
  nickname: "haru-dev",
};

// 3) nickname 이 있으면 nickname 을, 없으면 name 을 반환하는 함수를 완성하세요.
function getDisplayName(user: User) {
  return user.nickname ?? user.name;
}

// 4) 아래 함수의 description 파라미터를 옵셔널로 만들어보세요.
function printTitle(title: string, description?: string) {
  if (description) {
    return `${title} - ${description ?? ""}`;
  }

  return title;
}

// 5) 아래 변수들은 타입을 직접 적지 말고, 어떤 타입으로 추론되는지 스스로 말해보세요.
const isReady = true; // boolean
const lessonTitle = "Type Inference"; // string
const studentCount = 12; // number

const guestName = getDisplayName(guest); // string
const memberName = getDisplayName(member); // string
const firstTitle = printTitle("TypeScript"); // string
const secondTitle = printTitle("TypeScript", "optional property"); // string

export {};
