/*
  목표:
  1. 객체 타입을 직접 써보기
  2. type 으로 타입 이름 만들기
  3. 함수 인자로 객체 타입 받기
*/

// 1) 아래 user 객체에 직접 객체 타입을 붙여보세요.

const user: { id: number, name: string, isAdmin: boolean } = {
  id: 1,
  name: "Haru",
  isAdmin: false,
};

// 2) 아래 Product 타입을 완성하세요.
type Product = {
  id: number;
  title: string;
  price: number;
};

// 3) product 변수에 Product 타입을 붙여보세요.
const product: Product = {
  id: 101,
  title: "Keyboard",
  price: 50000,
};

// 4) 아래 함수가 Product를 받도록 타입을 붙여보세요.
function getProductLabel(item: Product): string {
  return `${item.title} - ${item.price}원`;
}

// 5) 아래 User 타입을 만들고, admin 변수에 붙여보세요.
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const admin: User = {
  id: 2,
  name: "Mina",
  isAdmin: true,
};

// 6) 아래 코드는 왜 문제가 되는지 확인해보세요.
// const brokenProduct: Product = {
//   id: 999,
//   title: "Mouse",
// };

// Product에 존재하는 "price" 필드를 채우지 않아서

const label = getProductLabel(product);

export {};
