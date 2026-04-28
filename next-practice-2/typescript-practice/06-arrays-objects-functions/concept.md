# 06. 배열, 객체, 함수 조합 연습

이번 단계 목표는 하나입니다.

지금까지 배운 타입들을 실제 데이터 처리 흐름처럼 묶어서 쓰는 것입니다.

## 1) 왜 이 단계가 필요한가

TypeScript를 배울 때, 문법 하나씩은 이해해도 실제 코드에서는 섞여서 나옵니다.

- 객체 배열
- 배열 `map`과 `filter`
- 함수 인자로 타입 전달
- 옵셔널 값 처리

이 단계를 거치면 다음 React props 단계가 훨씬 자연스럽습니다.

## 2) 객체 배열 타입

```ts
type Product = {
  id: number;
  title: string;
  price: number;
  category?: string;
};

const products: Product[] = [
  { id: 1, title: "Mouse", price: 20000 },
  { id: 2, title: "Keyboard", price: 50000, category: "device" },
];
```

`Product[]`는 `Product` 객체가 여러 개 들어 있는 배열입니다.

## 3) 배열 메서드와 타입

```ts
const titles = products.map((product: Product): string => {
  return product.title;
});
```

여기에는 객체 타입, 함수 타입, 반환값 타입이 같이 들어갑니다.

## 4) 함수로 데이터 가공하기

```ts
function getExpensiveProducts(items: Product[], minPrice: number): Product[] {
  return items.filter((item) => item.price >= minPrice);
}
```

배열을 받아서 배열을 반환하는 흐름은 이후 API 데이터 처리에서 자주 보게 됩니다.

## 5) 체크 포인트

이번 단계를 끝내면 아래를 혼자 할 수 있어야 합니다.

- `User[]`, `Product[]` 같은 객체 배열 타입 쓰기
- `map`, `filter`에서 타입 읽기
- 배열을 받아 가공해서 반환하는 함수 만들기
- 옵셔널 프로퍼티가 있는 객체 배열 다루기

