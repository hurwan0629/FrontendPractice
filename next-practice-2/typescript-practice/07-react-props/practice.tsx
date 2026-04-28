/*
  목표:
  1. props 타입 만들기
  2. 컴포넌트 파라미터에 props 타입 붙이기
  3. 옵셔널 props 처리하기
*/

type UserCardProps = {
  name: string;
  age: number;
  nickname?: string;
};

// 1) 아래 컴포넌트 props 에 UserCardProps 타입을 붙여보세요.
function UserCard({ name, age, nickname }: UserCardProps) {
  return (
    <section>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Nickname: {nickname ?? "no nickname"}</p>
    </section>
  );
}

type ProductCardProps = {
  title: string;
  price: number;
  category?: string;
};

// 2) 아래 컴포넌트 props 에 ProductCardProps 타입을 붙여보세요.
function ProductCard({ title, price, category }: ProductCardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>Price: {price}</p>
      <p>Category: {category ?? "uncategorized"}</p>
    </article>
  );
}

// 3) 아래 사용 예시가 타입상 왜 안전한지 확인해보세요.

// UsercardProps에 맞는 인자들타입에 맞춰 잘 들어가 있기 때문에
const userCardElement = (
  <UserCard name="Haru" age={20} nickname="haru-dev" />
);

// UserCardProps의 nickname이 옵셔널 변수로 채워져있기 때문에
const guestCardElement = <UserCard name="Guest" age={18} />;

// ProductCardProps에 맞는 인자들이 맞는 타입으로 채워져 있기 때문데
const productCardElement = (
  <ProductCard title="Keyboard" price={50000} category="device" />
);

// ProductCardProps의 category가 옵셔널이기 떄문에 안 넣어도 된다.
const simpleProductCardElement = <ProductCard title="Mouse" price={20000} />;

export {};
