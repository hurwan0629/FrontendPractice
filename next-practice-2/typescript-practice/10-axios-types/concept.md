# 10. `axios` 응답 타입

이번 단계 목표는 두 가지입니다.

1. `axios.get<T>()` 형태를 이해하기
2. `fetch`와 `axios`의 타입 흐름 차이를 보기

## 1) `axios`는 무엇이 다른가

`fetch`는 보통 이렇게 했습니다.

```ts
const response = await fetch("...");
const data: Post[] = await response.json();
```

반면 `axios`는 응답 객체 안에 `data`가 들어 있습니다.

```ts
const response = await axios.get<Post[]>("...");
const data = response.data;
```

즉, `json()`을 따로 호출하지 않습니다.

## 2) 제네릭으로 응답 타입 넣기

가장 중요한 문법은 이 부분입니다.

```ts
axios.get<Post[]>("...")
```

여기서 `<Post[]>`는 "이 요청의 응답 데이터는 `Post[]`다"라고 알려주는 역할입니다.

## 3) 함수 반환 타입

```ts
async function getPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>("...");
  return response.data;
}
```

이 패턴은 `fetch` 때와 거의 비슷합니다.

- 함수는 `Promise<Post[]>`를 반환
- 내부에서 `await`로 Promise를 풀고
- 실제 배열 데이터를 리턴

## 4) `fetch`와 `axios` 타입 차이

- `fetch`: `response.json()` 결과를 직접 타입으로 다룸
- `axios`: `axios.get<T>()`의 `T`로 응답 데이터 타입을 미리 알려줌

둘 다 결국 핵심은 같습니다.

- 응답 데이터 모양을 타입으로 만든다
- 함수 반환 타입을 적는다
- 배열/객체를 안전하게 가공한다

## 5) 체크 포인트

- `type Post` 만들기
- `axios.get<Post[]>()` 쓰기
- `response.data`의 타입이 왜 안전한지 설명하기

