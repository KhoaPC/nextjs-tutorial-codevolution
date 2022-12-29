export const getStaticProps = async (contex) => {
  const { params } = contex;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  return { props: { post: data } };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
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
