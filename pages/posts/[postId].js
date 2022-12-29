import { useRouter } from "next/router";

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
    fallback: true,
    // Nếu đường dẫn truy cập không được trả về thì chuyển đến trang dự phòng
    // fallback: false,
  };
};

function Post({ post }) {
  const router = useRouter();

  // Trang dự phòng
  if (router.isFallback) {
    return <h1>Loading.......</h1>;
  }

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
