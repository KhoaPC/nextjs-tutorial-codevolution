import { useRouter } from "next/router";

/*
*Có thể thay đổi `params`.

docs/[...params].js: lấy tất cả các đường dẫn SAU `docs`
vd: docs/1
    docs/1/2
    docs/1/2/3
------------------
docs/[[...prams]]: lấy cả `docs` và tất cả đường dẫn sau nó
vd: docs/
    docs/1
    docs/1/2
*/

function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  /*
  vd: http://localhost:3000/docs/zoom/mouse-move
  params = ['zoom', 'mouse-move'];
  result:  Viewing docs of feature zoom and concept mouse-move
  */

  console.log(params);

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs of feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs of feature {params[0]}</h1>;
  }

  return <h1>Docs Home Page</h1>;
}

export default Docs;
