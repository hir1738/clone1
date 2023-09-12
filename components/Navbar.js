import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <nav class="horizontal-navbar">
        <ul>
          <li>
            <Link href="/">ZEROTIER</Link>
          </li>
          <li>
            <Link href="/features">Features</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/download">Download</Link>
          </li>
          <li>
            <Link href="/company">Company</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
        <style jsx>{`
          ul {
            list-style: none;
            display: flex;
            gap: 20px;
          }

          li {
            margin: 0;
          }
        `}</style>
      </nav>
    </nav>
  );
};

export default Navbar;
