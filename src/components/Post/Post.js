import Link from "next/link";

const formatDate = date => {
  return new Date(date).toLocaleTimeString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const Post = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="post">
        <h4>{post.title}</h4>
        <p>
          {post.content} - <span>{post.createdBy}</span>
        </p>
      </div>
    </Link>
  );
};

export { Post };
