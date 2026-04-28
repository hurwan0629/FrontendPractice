# 09. `fetch` 응답 타입

이번 단계 목표는 두 가지입니다.

1. API 응답 데이터의 모양을 타입으로 만들기
2. `fetch`로 받아온 데이터를 안전하게 다루기

## 1) 왜 중요한가

Next에서는 서버 컴포넌트에서 `fetch`를 자주 씁니다.  
이때 가장 중요한 건 "응답 데이터가 어떤 모양인지"를 타입으로 아는 것입니다.

예:

```ts
type Post = {
  id: number;
  title: string;
  body: string;
};
```

이제 이 타입을 기준으로 데이터를 읽을 수 있습니다.

## 2) 배열 응답 타입

게시글 목록처럼 여러 개가 오면 배열 타입을 씁니다.

```ts
type Post = {
  id: number;
  title: string;
  body: string;
};

const posts: Post[] = [];
```

## 3) 함수 반환 타입

```ts
async function getPosts(): Promise<Post[]> {
  const response = await fetch("...");
  const data: Post[] = await response.json();
  return data;
}
```

중요한 포인트는 두 개입니다.

- 비동기 함수는 `Promise<...>`
- 응답 데이터 모양은 `Post[]`, `User[]`처럼 직접 적기

## 4) 왜 이 방식이 좋은가

타입이 있으면 아래 같은 실수를 빨리 잡을 수 있습니다.

- 존재하지 않는 필드 접근
- 문자열이어야 하는데 숫자로 처리
- 배열인데 객체처럼 다룸

## 5) 체크 포인트

- `type Post` 만들기
- `Promise<Post[]>` 반환 타입 붙이기
- 받아온 배열 데이터를 `map`으로 안전하게 읽기

