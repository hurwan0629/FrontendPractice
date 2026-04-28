# 01. 기본 타입과 타입 표기

이번 단계 목표는 세 가지입니다.

1. TypeScript가 "값의 종류"를 검사한다는 감각 잡기
2. 변수와 함수에 타입을 직접 붙여보기
3. `any` 없이 기본 타입만으로 코드 읽기

## 1) 왜 타입이 필요한가

JavaScript는 유연하지만, 실수도 늦게 발견됩니다.

```js
let age = "20";
age = true;
```

위 코드는 JavaScript에서는 막히지 않습니다.  
TypeScript는 이런 값을 미리 검사해서, 의도와 다른 코드를 빨리 잡아줍니다.

## 2) 가장 먼저 익힐 기본 타입

이번 단계에서는 이것만 씁니다.

- `string`
- `number`
- `boolean`
- `null`
- `undefined`

예시:

```ts
let userName: string = "Haru";
let age: number = 20;
let isStudent: boolean = true;
```

왼쪽의 `: string`, `: number` 같은 부분이 타입 표기입니다.

## 3) 함수에도 타입을 붙인다

함수에서는 두 군데를 봅니다.

1. 매개변수 타입
2. 반환값 타입

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

이 함수는 숫자 두 개를 받고, 숫자를 반환합니다.

## 4) 타입 추론

TypeScript는 항상 타입을 직접 적어야 하는 건 아닙니다.

```ts
let city = "Seoul";
```

위 코드는 `city`를 `string`으로 자동 추론합니다.

하지만 연습 초반에는 직접 적어보는 게 좋습니다. 그래야 타입 문법이 눈에 익습니다.

## 5) 지금 단계에서 피할 것

- `any`
- 복잡한 제네릭
- `interface`와 `type` 차이 깊게 파기
- React 문법까지 한 번에 섞기

지금은 "값 하나, 함수 하나" 수준에서 타입이 어떻게 붙는지만 익히면 충분합니다.

## 6) 체크 포인트

이번 단계를 끝내면 아래를 혼자 할 수 있어야 합니다.

- 문자열 변수에 `string` 타입 붙이기
- 숫자 계산 함수에 매개변수 타입 붙이기
- 불리언 값을 다루는 함수 만들기
- 잘못된 타입 대입이 왜 에러인지 설명하기

