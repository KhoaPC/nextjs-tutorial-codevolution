import { useRouter } from "next/router";

export const getStaticProps = async (contex) => {
  const { params } = contex;
  const res = await fetch(`http://localhost:4000/products/${params.productId}`);
  const data = await res.json();
  return { props: { product: data } };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:4000/products`);
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: {
        productId: `${product.id}`,
        revalidate: 10,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

function Product({ product }) {
  return (
    <>
      <h2>
        {product.id} : {product.name}
      </h2>
      <h4>{product.price}</h4>
    </>
  );
}

export default Product;
