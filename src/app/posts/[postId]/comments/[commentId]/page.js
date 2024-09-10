import { posts } from "@/static";

export default function Comment({ params: { postId, commentId } }) {
  const comment = posts
    .find(post => String(post.id) === postId)
    ?.comments.find(comment => String(comment.id) === commentId);

  if (!comment) return <div>No comment found.</div>;
  return (
    <div>
      <h1>{comment.content}</h1>
      <h2>- {comment.createdBy}</h2>
    </div>
  );
}
