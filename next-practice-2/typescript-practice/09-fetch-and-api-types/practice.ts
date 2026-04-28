// /*
//   목표:
//   1. API 응답 타입 만들기
//   2. async 함수 반환 타입 붙이기
//   3. 받아온 데이터 배열 다루기
// */

// // type Post = {
// //   id: number;
// //   title: string;
// //   body: string;
// // };

// // 1) 아래 함수의 반환 타입을 Promise<Post[]> 로 붙여보세요.
// async function getPosts(): Promise<Post[]> {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data: Post[] = await response.json();
//   return data;
// }

// // 2) 아래 함수가 Post 하나를 받아 제목만 반환하도록 타입을 붙여보세요.
// function getPostTitle(post: Post): string {
//   return post.title;
// }

// // 3) posts 배열을 받아 제목 문자열 배열을 반환하도록 타입을 붙여보세요.
// function getPostTitles(posts: Post[]): string[] {
//   return posts.map((post) => post.title);
// }

// async function runPractice() {
//   const posts = await getPosts();
//   const firstTitle = getPostTitle(posts[0]);
//   const titles = getPostTitles(posts);

//   console.log(firstTitle);
//   console.log(titles.slice(0, 3));
// }

// void runPractice();
