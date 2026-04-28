/*
  목표:
  1. axios.get<T>() 사용해보기
  2. 응답 data 타입 안전하게 다루기
  3. fetch 와 axios 차이 감 잡기
*/

import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
};

// 1) 아래 함수의 반환 타입을 Promise<Post[]> 로 붙여보세요.
async function getPosts():Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data;
}

// 2) 아래 함수가 Post 하나를 받아 제목을 반환하도록 타입을 붙여보세요.
function getPostTitle(post: Post): string {
  return post.title;
}

// 3) posts 배열을 받아 id 와 title 만 남긴 문자열 배열을 반환하도록 타입을 붙여보세요.
function getPostSummaries(posts: Post[]): string[] {
  return posts.map((post: Post): string => `${post.id}. ${post.title}`);
}

async function runPractice() {
  const posts = await getPosts();
  const firstTitle = getPostTitle(posts[0]);
  const summaries = getPostSummaries(posts);

  console.log(firstTitle);
  console.log(summaries.slice(0, 3));
}

void runPractice();
