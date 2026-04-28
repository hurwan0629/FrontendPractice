"use client"

import { useState } from "react"

type LikeButtonProps = {
  postId: number;
  title: string
}

export default function LikeButton({ postId, title }: LikeButtonProps) {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(prev => !prev)}>
      {liked ? `Liked ${postId}. ${title}` : `Like`}
    </button>
  )
}