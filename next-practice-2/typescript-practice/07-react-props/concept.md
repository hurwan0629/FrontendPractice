# 07. React Props 타입

이번 단계 목표는 하나입니다.

TypeScript 문법을 React 컴포넌트에 연결하는 것입니다.

## 1) 왜 props 타입이 중요한가

React 컴포넌트는 대부분 props로 데이터를 받습니다.

즉, TypeScript를 React에서 가장 먼저 체감하는 지점이 props 타입입니다.

예를 들어:

```tsx
type ButtonProps = {
  label: string;
};

function Button({ label }: ButtonProps) {
  return <button>{label}</button>;
}
```

이제 `label`에 문자열이 아닌 값을 넘기면 TypeScript가 바로 잡아줍니다.

## 2) props 타입은 보통 `type`으로 만든다

```tsx
type UserCardProps = {
  name: string;
  age: number;
  nickname?: string;
};
```

이 패턴이 가장 기본적입니다.

## 3) 구조분해와 함께 타입 붙이기

```tsx
function UserCard({ name, age, nickname }: UserCardProps) {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{nickname ?? "no nickname"}</p>
    </div>
  );
}
```

## 4) 핵심 포인트

- props 객체의 모양을 타입으로 만든다
- 컴포넌트 파라미터에 그 타입을 붙인다
- 옵셔널 props도 자연스럽게 처리한다

이 단계만 익숙해져도 Next 컴포넌트 작성이 훨씬 안정적이 됩니다.

## 5) 체크 포인트

- `type XxxProps` 만들기
- 컴포넌트 props에 타입 붙이기
- 옵셔널 props 처리하기
- 잘못된 props 전달이 왜 에러인지 설명하기

