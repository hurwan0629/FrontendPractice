import { Post } from "@/lib/types";
import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import LikeButton from "./like-button"

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{id: string}>
}) {
  const { id } = await params

  // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // const post: Post = await response.json()
  const post: Post | null = await getPost(id)

  if(post == null) {
    notFound();
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <LikeButton postId={post.id} title={post.title} />
    </main>
  )
}