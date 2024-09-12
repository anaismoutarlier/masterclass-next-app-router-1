import { posts } from "@/static";
import { Post } from "@/components";

export default function Posts({ params: { filter }, searchParams }) {
  let postsToDisplay = posts.filter(post => {
    for (const el of filter) {
      if (
        !post.categorization
          .map(cat => cat.toLowerCase())
          .includes(el.toLowerCase())
      )
        return false;
      return true;
    }
    // return filter.every(el =>
    //   post.categorization.map(cat => cat.toLowerCase()).includes(el)
    // );
  });

  console.log(searchParams);
  if (searchParams?.tag) {
    postsToDisplay = postsToDisplay.filter(post => {
      return post.tags
        .map(tag => tag.toLowerCase())
        .includes(searchParams?.tag.toLowerCase());
    });
  }

  return (
    <div className="main">
      <div className="list">
        {postsToDisplay.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
