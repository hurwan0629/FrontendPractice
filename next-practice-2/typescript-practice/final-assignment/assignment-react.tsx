/*
  Final React Assignment

  규칙:
  1. unknown, any, TODO 를 모두 없앨 것
  2. props 타입을 분리할 것
  3. useState 와 이벤트 타입을 직접 붙일 것
*/

import { useState } from "react";

type ProfileCardProps = {
  name: string;
  age: number;
  nickname?: string;
  role: string
};
type StatusBadgeProps = {
  status: "loading" | "success" | "idle"
};

function ProfileCard({ name, age, nickname, role }: ProfileCardProps) {
  return (
    <section>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Nickname: {nickname ?? "no nickname"}</p>
      <p>Role: {role}</p>
    </section>
  );
}

function StatusBadge({ status }: StatusBadgeProps) {
  return <p>Status: {status}</p>;
}

export default function FinalAssignmentReact() {
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<"loading" | "success" | "idle">("idle");

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setName((event as { target: { value: string } }).target.value);
  }

  function handleSetLoading(): void {
    setStatus("loading");
  }

  function handleSetSuccess(): void {
    setStatus("success");
  }

  return (
    <main>
      <h1>Final Assignment React</h1>

      <input value={String(name)} onChange={handleNameChange} placeholder="name" />

      <div>
        <button type="button" onClick={handleSetLoading}>
          Set Loading
        </button>
        <button type="button" onClick={handleSetSuccess}>
          Set Success
        </button>
      </div>

      <ProfileCard name={String(name)} age={20} role="user" nickname="learner" />
      <StatusBadge status={status} />
    </main>
  );
}
