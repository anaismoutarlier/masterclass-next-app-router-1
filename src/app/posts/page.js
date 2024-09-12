import { Post, AddForm } from "@/components";
// import { useEffect, useState } from "react";

const fields = [
  {
    name: "title",
    placeholder: "Title",
  },
  {
    name: "content",
    placeholder: "Post text",
  },
  {
    name: "createdBy",
    placeholder: "Username",
  },
];

export default async function Posts() {
  //   const [posts, setPosts] = useState([]);

  //________________________SERVER
  const res = await fetch(`${process.env.NEXT_PUBLIC_POSTS_API_URL}/posts`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.POSTS_API_KEY,
    },
  });
  const data = await res.json();
  const { posts } = data;

  //________________________SERVER
  // Server creates html
  // Server sends html to client
  return (
    <div className="main">
      <AddForm fields={fields} />
      <div className="list">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
