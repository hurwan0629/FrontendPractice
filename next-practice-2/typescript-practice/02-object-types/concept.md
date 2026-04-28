# 02. 객체 타입과 `type`

이번 단계 목표는 두 가지입니다.

1. 객체의 모양을 타입으로 설명하기
2. `type`을 써서 재사용 가능한 타입 이름 만들기

## 1) 객체에도 타입이 필요하다

문자열이나 숫자 하나만 다룰 때보다, 실제 개발에서는 "여러 값을 묶은 객체"를 더 자주 다룹니다.

예시:

```ts
const user = {
  id: 1,
  name: "Haru",
  isAdmin: false,
};
```

이 객체의 구조를 TypeScript가 알면, 잘못된 프로퍼티 접근이나 잘못된 값 대입을 미리 막아줍니다.

## 2) 객체 타입 직접 쓰기

객체 타입은 이렇게 적습니다.

```ts
const user: { id: number; name: string; isAdmin: boolean } = {
  id: 1,
  name: "Haru",
  isAdmin: false,
};
```

가능은 하지만 길어집니다. 그래서 보통 `type`으로 이름을 붙입니다.

## 3) `type`으로 타입 이름 만들기

```ts
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};
```

이제 여러 곳에서 재사용할 수 있습니다.

```ts
const user: User = {
  id: 1,
  name: "Haru",
  isAdmin: false,
};
```

## 4) 객체를 함수에 넘길 때

실무에서는 객체를 함수 인자로 넘기는 경우가 많습니다.

```ts
type Product = {
  id: number;
  title: string;
  price: number;
};

function printProduct(product: Product): string {
  return `${product.title} - ${product.price}`;
}
```

이 패턴은 나중에 React props, API 응답 타입, 상태관리에서 그대로 이어집니다.

## 5) 지금 단계에서 볼 포인트

- 프로퍼티 이름이 다르면 에러가 난다
- 프로퍼티 타입이 다르면 에러가 난다
- 필요한 프로퍼티가 빠져도 에러가 난다

즉, 객체 타입은 "이 객체는 이런 모양이어야 한다"를 강하게 검사합니다.

## 6) 체크 포인트

이번 단계를 끝내면 아래를 혼자 할 수 있어야 합니다.

- `type User` 같은 객체 타입 만들기
- 객체 변수에 해당 타입 붙이기
- 함수 인자로 객체 타입 받기
- 잘못된 프로퍼티가 왜 에러인지 설명하기

