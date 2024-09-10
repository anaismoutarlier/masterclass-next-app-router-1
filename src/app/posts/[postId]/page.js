import { posts } from "@/static";
import Link from "next/link";
export default function Post({ params: { postId } }) {
  const post = posts.find(post => String(post.id) === postId);

  if (!post) return <div>No post found.</div>;

  return (
    <div className="main">
      <div className="post">
        <h1>{post.title}</h1>
        <h2>{post.content}</h2>
        <h5>- {post.createdBy}</h5>
        <div>
          {post.comments.map(comment => (
            <Link
              key={comment.id}
              href={`/posts/${postId}/comments/${comment.id}`}
            >
              {comment.content} - {comment.createdBy}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
