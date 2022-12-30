import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:4000/products`);
  const data = await res.json();

  return {
    props: { products: data },

    /*
     Incremental Static Rendering: sẽ lấy lại dữ liệu tĩnh sau 1 khoảng thời gian(revalidate)
    */
    revalidate: 10,
  };
};

function ProductList({ products }) {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <Link href={`products/${product.id}`}>
              <h4>
                {product.id} : {product.name}
              </h4>
              <hr />
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default ProductList;
