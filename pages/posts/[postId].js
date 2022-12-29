export const getStaticProps = async (contex) => {
  const { params } = contex;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  return { props: { post: data } };
};

function Post({ post }) {
  return (
    <>
      <h2>
        {post.id} : {post.title}
      </h2>
      <h4>{post.body}</h4>
    </>
  );
}

export default Post;
