import Link from "next/link";

function Header() {
  return (
    <div className="header">
      <Link  href="/">
        Home
      </Link>
      <Link href="/user">User</Link>
      <Link href="/products">Products</Link>
      <Link href="/comments">Comment</Link>
    </div>
  );
}

export default Header;
