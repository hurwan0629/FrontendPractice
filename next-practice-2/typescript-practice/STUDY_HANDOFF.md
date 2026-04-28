# TypeScript / Next Study Handoff

이 문서는 다음 세션에서 바로 학습을 이어가기 위한 인수인계 파일이다.

사용자가 다음에 `"이제 저번에 하던 공부 계속 하자"` 라고 말하면, 이 파일을 먼저 읽고 그대로 이어서 진행하면 된다.

## 1. 현재 상황

사용자는 `Next.js 기본기`를 익히는 중이고, 그 전에 `TypeScript 기초`를 먼저 정리했다.

학습 방식은 아래 원칙으로 진행했다.

- `마구잡이 설명`이 아니라 `개념 강의 -> 실습` 순서로 한 단계씩 진행
- 각 단계마다 `concept.md`를 읽고 `practice.ts` 또는 `practice.tsx`를 직접 풂
- 사용자가 `"했어"` 또는 `"끝났어"`라고 하면
  1. 해당 파일 내용 확인
  2. `npx tsc --noEmit -p .`로 타입 체크
  3. 통과 시 다음 단계 파일 생성
- 설명은 한국어로, 너무 길지 않게
- 아직은 `interface`보다 `type` 중심으로 학습

## 2. 완료한 TypeScript 학습 범위

아래 단계는 전부 완료했다.

1. `01-basic-types`
2. `02-object-types`
3. `03-function-types`
4. `04-union-types`
5. `05-optional-and-inference`
6. `06-arrays-objects-functions`
7. `07-react-props`
8. `08-state-and-events`
9. `09-fetch-and-api-types`
10. `10-axios-types`
11. `final-assignment`

## 3. 관련 파일 위치

기본 학습 루트:

- [typescript-practice/README.md](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/README.md)
- [01-basic-types](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/01-basic-types/concept.md)
- [02-object-types](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/02-object-types/concept.md)
- [03-function-types](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/03-function-types/concept.md)
- [04-union-types](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/04-union-types/concept.md)
- [05-optional-and-inference](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/05-optional-and-inference/concept.md)
- [06-arrays-objects-functions](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/06-arrays-objects-functions/concept.md)
- [07-react-props](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/07-react-props/concept.md)
- [08-state-and-events](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/08-state-and-events/concept.md)
- [09-fetch-and-api-types](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/09-fetch-and-api-types/concept.md)
- [10-axios-types](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/10-axios-types/concept.md)

종합 과제:

- [final-assignment/README.md](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/final-assignment/README.md)
- [final-assignment/assignment.ts](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/final-assignment/assignment.ts)
- [final-assignment/assignment-react.tsx](C:/HUR/FrontendPractice/next-practice-2/typescript-practice/final-assignment/assignment-react.tsx)

## 4. 완료 검증 상태

마지막 확인 시 아래 명령 기준으로 전체 타입 체크 통과했다.

```powershell
npx tsc --noEmit -p .
```

`axios`도 이미 설치되어 있다.

`package.json`의 현재 의존성에는 아래가 포함되어 있다.

- `next`
- `react`
- `react-dom`
- `axios`
- `typescript`

## 5. 사용자가 이해한 핵심 내용

아래 내용은 이미 대화로 설명했고, 사용자가 어느 정도 이해했다.

- `await`는 Promise 자체를 값으로 두는 게 아니라, Promise가 끝난 뒤의 실제 값을 꺼내는 역할
- `async function` 내부에서 `return data`를 해도 함수 전체는 자동으로 `Promise<...>`를 반환
- `fetch`에서는 `response.json()` 이후 데이터를 타입으로 다룸
- `axios`에서는 `axios.get<T>()`와 `response.data`로 응답 타입을 다룸
- `type` 중심으로 객체 타입, props 타입, 유니온 타입, 상태 타입을 다뤄봄

## 6. 사용자가 아직 깊게 안 한 것

아래는 아직 본격적으로 안 들어갔다.

- `interface`
- 고급 제네릭
- 유틸리티 타입
- Next App Router 실전 구조
- Server Component / Client Component 실전 구분
- Next에서의 실제 데이터 패칭 패턴
- `loading.tsx`, `error.tsx`
- 동적 라우트
- 상태관리 라이브러리 실전 적용

## 7. 다음에 이어갈 권장 순서

다음 세션부터는 `TypeScript 문법 공부`를 더 늘리지 말고, `Next 안에서 TypeScript 쓰기`로 넘어가는 것이 맞다.

권장 순서는 아래와 같다.

1. `App Router` 구조
2. `page.tsx`, `layout.tsx`
3. 중첩 라우팅
4. 동적 라우트 `[id]`
5. Server Component / Client Component 차이
6. 서버 컴포넌트에서 `fetch`
7. `loading.tsx`, `error.tsx`
8. 목록/상세 미니 프로젝트
9. 그 다음 `axios`
10. 마지막에 상태관리

## 8. 다음 세션에서 바로 시작할 실전 과제

가장 먼저 할 것은 `게시글 목록/상세 앱`이다.

목표:

- `/posts` 목록 페이지 만들기
- `/posts/[id]` 상세 페이지 만들기
- `Post` 타입 정의하기
- 서버 컴포넌트에서 `fetch`
- 타입 붙여 렌더링하기
- 필요하면 클라이언트 컴포넌트 1개 분리해서 버튼이나 입력 이벤트 처리하기

추천 진행 순서:

1. `app/posts/page.tsx`
2. `app/posts/[id]/page.tsx`
3. 공용 `Post` 타입 정의
4. `fetch` 함수 분리 여부 판단
5. 로딩/에러 처리 추가

## 9. 다음 세션에서 에이전트가 해야 할 일

사용자가 `"저번에 하던 공부 계속 하자"`라고 하면 아래 순서로 진행하면 된다.

1. 이 파일을 읽는다.
2. `typescript-practice`는 완료 상태로 보고, 복습 질문이 없으면 더 반복하지 않는다.
3. Next 실전 단계로 전환한다고 짧게 알린다.
4. 현재 `app/` 구조를 확인한다.
5. `posts` 라우트 실습을 위한 파일 구조를 만들거나 기존 구조를 활용한다.
6. 설명만 길게 하지 말고, 실제로 실습 파일을 만들어서 진행한다.

## 10. 톤과 진행 방식 메모

- 사용자는 한국어 설명을 원한다.
- 장황한 이론 설명보다 단계별 실습을 선호한다.
- `"개념 -> 실습 -> 검증 -> 다음 단계"` 흐름이 잘 맞는다.
- 사용자가 `redux`, `axios`도 배우고 싶어 한다.
- 다만 현재 우선순위는 `Next 기본기`다.
- 너무 추상적으로 "공부 방향"만 말하지 말고, 실제 파일과 과제로 이어가는 방식이 좋다.

## 11. 주의사항

- `final-assignment` starter code는 `unknown`과 `as`가 다소 과하게 들어갔었다.
- 사용자가 그 흐름에 맞춰 푼 것이므로, 그 점을 약점처럼 지적하지 말 것.
- 현재는 "기초 학습 완료"로 인정해도 된다.
- 다음부터는 `as`를 최소화하고 더 자연스러운 타입 설계로 가는 편이 좋다.

## 12. 아주 짧은 한 줄 요약

TypeScript 기초 루트와 종합 과제는 끝났고, 다음 세션부터는 `Next App Router + 서버/클라이언트 컴포넌트 + fetch 기반 posts 미니 프로젝트`로 바로 넘어가면 된다.

