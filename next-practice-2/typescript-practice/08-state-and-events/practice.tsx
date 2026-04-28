/*
  목표:
  1. useState 에 타입 붙이기
  2. input change 이벤트 타입 붙이기
  3. 버튼 클릭으로 상태 변경하기
*/

import { useState } from "react";

// 1) name 상태에 string 타입을 붙여보세요.
export default function StateAndEventsPractice() {
  const [name, setName] = useState<string>("");

  // 2) count 상태에 number 타입을 붙여보세요.
  const [count, setCount] = useState<number>(0);

  // 3) 아래 이벤트 함수의 event 타입을 붙여보세요.
  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  // 4) 아래 함수의 반환 타입을 붙여보세요.
  function increaseCount(): void {
    setCount((prev) => prev + 1);
  }

  return (
    <main>
      <h1>State And Events Practice</h1>

      <input value={name} onChange={handleNameChange} placeholder="name" />

      <p>Name: {name}</p>
      <p>Count: {count}</p>

      <button type="button" onClick={increaseCount}>
        Increase
      </button>
    </main>
  );
}
