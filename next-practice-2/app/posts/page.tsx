import Link from "next/link";
import { Post } from "@/lib/types";
import { getPosts } from "@/lib/posts";
// const posts: Post[] = [
//   {
//     userId: 1,
//     id:1 ,
//     title: "First post",
//     body: "This is the first post.",
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "Second post",
//     body: "This is the second post",
//   }
// ]
export const revalidate = 60;

export default async function PostPage() {

  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts: Post[] = await response.json();
  const posts: Post[] = await getPosts();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.id}. {post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}