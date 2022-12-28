import { useRouter } from "next/router";

function UserDetail() {
    // useRouter(): cung cấp quyền truy cập vào route object có chứa các params của route
    const router = useRouter();
    const userId = router.query.userId;

  return (
    <>
      <h1>DeTails User {userId}</h1>
    </>
  );
}

export default UserDetail;
