import Link from "next/link";

function User() {
  return (
    <>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href="/user/1">
        <h2>User#1</h2>
      </Link>
      <Link href="/user/2">
        <h2>User#2</h2>
      </Link>
      <Link href="/user/3">
        <h2>User#3</h2>
      </Link>
    </>
  );
}

export default User;
