# 08. `useState`와 이벤트 타입

이번 단계 목표는 두 가지입니다.

1. 상태값에 타입을 붙이기
2. 입력 이벤트 함수에 타입을 붙이기

## 1) 왜 이 단계가 중요한가

React에서 가장 자주 만나는 흐름은 이겁니다.

- 상태 만들기
- 입력값 받기
- 이벤트로 상태 바꾸기

즉, 여기서부터 TypeScript가 실제 UI 코드에 직접 붙습니다.

## 2) `useState` 기본 타입

```tsx
const [count, setCount] = useState<number>(0);
```

이 코드는 `count`가 숫자 상태라는 뜻입니다.

문자열이면:

```tsx
const [name, setName] = useState<string>("");
```

간단한 초기값은 추론도 되지만, 연습 초반에는 제네릭 타입을 직접 써보는 편이 좋습니다.

## 3) 이벤트 타입

input 변경 이벤트는 보통 이렇게 씁니다.

```tsx
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  setName(event.target.value);
}
```

핵심은 두 가지입니다.

- `React.ChangeEvent`
- `HTMLInputElement`

이 조합을 자주 보게 됩니다.

## 4) 버튼 클릭 이벤트

```tsx
function handleClick(): void {
  setCount((prev) => prev + 1);
}
```

클릭 핸들러는 입력 파라미터가 꼭 필요하지 않으면 생략해도 됩니다.

## 5) 체크 포인트

- `useState<string>`, `useState<number>` 써보기
- input 변경 핸들러 타입 붙이기
- 상태값과 이벤트가 어떻게 연결되는지 이해하기

