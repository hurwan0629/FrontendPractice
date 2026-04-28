/*
  목표:
  1. 객체 배열 타입 붙이기
  2. map, filter 에서 타입 다루기
  3. 배열을 받아 가공하는 함수 만들기
*/

type Product = {
  id: number;
  title: string;
  price: number;
  category?: string;
};

// 1) products 배열에 Product[] 타입을 붙여보세요.
const products: Product[] = [
  { id: 1, title: "Mouse", price: 20000 },
  { id: 2, title: "Keyboard", price: 50000, category: "device" },
  { id: 3, title: "Monitor", price: 150000 },
];

// 2) 아래 map 콜백에 타입을 붙여서 상품 이름 배열을 만드세요.
const productTitles: string[] = products.map((product: Product): string => {
  return product.title;
});

// 3) minPrice 이상인 상품만 반환하는 함수를 완성하세요.
function getExpensiveProducts(items: Product[], minPrice: number): Product[] {
  return items.filter((item) => item.price >= minPrice);
}

// 4) category 가 있으면 표시하고, 없으면 "uncategorized"를 반환하는 함수를 만드세요.
function getCategoryLabel(product: Product): string {
  return product.category ?? "uncategorized";
}

// 5) 아래 결과 타입을 스스로 말해보세요.
const expensiveProducts: Product[] = getExpensiveProducts(products, 50000);
const firstCategory: string = getCategoryLabel(products[0]);
const secondCategory: string = getCategoryLabel(products[1]);

export {};
