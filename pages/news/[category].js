export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  
  res.setHeader("Set-Cookie", ["name=HELLO"]);

  return {
    props: {
      newpapers: data,
      category,
    },
  };
}

function Category({ newpapers, category }) {
  return (
    <>
      {newpapers.map((item) => {
        return (
          <>
            <h1>Category: {category}</h1>
            <h2>
              {item.id}: {item.title}
            </h2>
            <h2>Decription: {item.body}</h2>
          </>
        );
      })}
    </>
  );
}

export default Category;