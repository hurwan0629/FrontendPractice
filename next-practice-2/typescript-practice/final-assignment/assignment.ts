/*
  Final Assignment

  규칙:
  1. unknown, any, TODO 를 모두 없앨 것
  2. 함수 파라미터와 반환값 타입을 직접 적을 것
  3. type 을 재사용할 것
*/

type UserRole = "user" | "admin";
type RequestStatus = "idle" | "loading" | "success" | "error";

type User = {
  id: number;
  name: string;
  role: UserRole
  nickname?: string;
};
type Post = {
  id: number;
  title: string;
  body: string;
  authorId: number;
};

const users: User[] = [
  { id: 1, name: "Haru", role: "admin", nickname: "haru-dev" },
  { id: 2, name: "Mina", role: "user" },
  { id: 3, name: "Jin", role: "user", nickname: "jinny" },
];

const posts: Post[] = [
  { id: 101, title: "TS Basics", body: "type practice", authorId: 1 },
  { id: 102, title: "React Props", body: "props typing", authorId: 2 },
  { id: 103, title: "Async Data", body: "fetch and axios", authorId: 1 },
];

// 1) user 를 받아 "name (role)" 형식의 문자열을 반환하세요.
function getUserLabel(user: User): string {
  return `${String((user as { name: string }).name)} (${String(
    (user as { role: string }).role
  )})`;
}

// 2) user 의 nickname 이 있으면 nickname 을, 없으면 name 을 반환하세요.
function getDisplayName(user: User): string {
  return (user as { nickname?: string; name: string }).nickname ?? user.name;
}

// 3) users 배열에서 admin 만 골라 반환하세요.
function getAdminUsers(items: User[]): Array<{id: number, role: string}> {
  return (items as Array<{ id: number, role: string }>).filter((item) => item.role === "admin");
}

// 4) posts 배열에서 title 문자열 배열만 반환하세요.
function getPostTitles(items: Post[]): string[] {
  return (items as Array<{ title: string }>).map((item) => item.title);
}

// 5) id(number 또는 string)를 받아 "ID: 값" 문자열을 반환하세요.
function formatId(value: number | string): string {
  return `ID: ${String(value)}`;
}

// 6) status 값을 "idle" | "loading" | "success" | "error" 중 하나로 제한하세요.
let requestStatus: RequestStatus = "idle";

// 7) authorId 를 받아 해당 작성자의 posts 만 반환하세요.
function getPostsByAuthor(items: Post[], authorId: number): Array<{authorId: number}> {
  return (items as Array<{ authorId: number }>).filter(
    (item) => item.authorId === authorId
  );
}

// 8) fetch 스타일 비동기 함수로 posts 를 반환하세요.
async function fetchPosts(): Promise<Post[]> {
  return await Promise.resolve(posts);
}

// 9) axios 스타일 응답 타입을 만들고 posts 를 data 로 감싸 반환하세요.
type AxiosLikeResponse<T> = {data: T};

async function axiosGetPosts(): Promise<AxiosLikeResponse<Post[]>> {
  return Promise.resolve({
    data: posts,
  });
}

// 10) 아래 함수는 posts 를 가져온 뒤 title 배열을 반환해야 합니다.
async function loadTitlesWithFetch(): Promise<string[]> {
  const data = await fetchPosts();
  return getPostTitles(data);
}

// 11) 아래 함수는 axios 스타일 응답에서 data 를 꺼내 admin 작성자의 글만 반환해야 합니다.
async function loadPostsWrittenByAdmin(): Promise<{id: number, authorId: number}[]> {
  const response = await axiosGetPosts();
  const adminUsers = getAdminUsers(users) as Array<{ id: number }>;
  const adminIds = adminUsers.map((user) => user.id);

  return (response as { data: Array<{ id: number, authorId: number }> }).data.filter((post) =>
    adminIds.includes(post.authorId)
  );
}

const userLabel = getUserLabel((users as User[])[0]);
const displayName = getDisplayName((users as User[])[1]);
const adminUsers = getAdminUsers(users);
const postTitles = getPostTitles(posts);
const formattedNumericId = formatId(101);
const formattedStringId = formatId("A-101");
const postsByAuthor = getPostsByAuthor(posts, 1);

void fetchPosts();
void axiosGetPosts();
void loadTitlesWithFetch();
void loadPostsWrittenByAdmin();

console.log(
  userLabel,
  displayName,
  adminUsers,
  postTitles,
  formattedNumericId,
  formattedStringId,
  postsByAuthor,
  requestStatus
);

export {};

