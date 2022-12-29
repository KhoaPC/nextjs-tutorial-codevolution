import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { props: { posts: data } };
};

function PostList({ posts }) {
  return (
    <>
      <h1>List of posts</h1>
      {posts.map((post) => {
        return (
          <div>
            <Link href={`posts/${post.id}`}>
              <h4>
                {post.id} : {post.title}
              </h4>
              <hr />
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default PostList;
