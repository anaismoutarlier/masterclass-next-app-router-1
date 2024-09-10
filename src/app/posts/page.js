import { posts } from "@/static";
import { Post } from "@/components";

export default function Posts() {
  return (
    <div className="main">
      <div className="list">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
