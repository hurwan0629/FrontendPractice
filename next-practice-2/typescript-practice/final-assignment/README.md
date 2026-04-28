# Final Assignment

지금까지 배운 내용을 한 번에 묶어서 점검하는 종합 과제입니다.

## 목표

아래 내용을 한 번에 다시 써보는 것이 목표입니다.

- 기본 타입
- 객체 타입과 `type`
- 함수 타입과 반환값
- 유니온 타입
- 옵셔널 프로퍼티
- 객체 배열과 `map`, `filter`
- React props 타입
- `useState`와 이벤트 타입
- `fetch`/`axios` 스타일의 비동기 응답 타입

## 진행 순서

1. [assignment.ts](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/final-assignment/assignment.ts) 를 푼다.
2. [assignment-react.tsx](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/final-assignment/assignment-react.tsx) 를 푼다.
3. `unknown`, `TODO`, `any`를 모두 없앤다.
4. 아래 명령어로 타입 체크를 통과시킨다.

```powershell
npx tsc --noEmit -p .
```

## 과제 규칙

- `any` 사용 금지
- `interface` 없이 `type`만 사용
- 함수 파라미터와 반환값은 가능한 직접 적기
- 옵셔널 값은 안전하게 처리하기

## 스스로 체크할 것

- `type`을 재사용하고 있는가
- 유니온 타입으로 상태값을 제한했는가
- 배열 반환 타입을 명확히 적었는가
- React props 타입을 분리했는가
- `useState`와 이벤트 타입을 직접 썼는가
- 비동기 함수가 `Promise<...>`를 반환하는가

