import Link from "next/link";

export async function getServerSideProps(context) {
  /*
Lấy dữ liệu mỗi khi gửi request lên hệ thống.
Nó sẽ tìm nạp dữ liệu trước khi client có thể view được trang web
Dữ liệu sẽ được tìm và nạp lại nếu client request.

Dữ liệu được làm mới mỗi khi tải trang 
có nghĩa là dữ liệu được cập nhật mỗi khi họ truy cập trang.
*/
  const res = await fetch(`http://localhost:4000/news`);
  const data = await res.json();

  return { props: { newpapers: data } };
}

function ListNewpaper({ newpapers }) {
  return (
    <>
      <h1>Newspaper list</h1>
      {newpapers.map((item) => {
        return (
          <>
            <Link href={`news/${item.category}`}>
              <h2>
                {" "}
                {item.id}:{item.title}
              </h2>
            </Link>
          </>
        );
      })}
    </>
  );
}

export default ListNewpaper;
