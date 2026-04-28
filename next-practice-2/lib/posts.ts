import type { Post } from "@/lib/types"

export async function getPosts(): Promise<Post[]> {
  // throw new Error("Posts fetch failed");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  })
  return response.json();
}

export async function getPost(id: string): Promise<Post | null >{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if(!response.ok) {
    return null;
  }

  return response.json();
}