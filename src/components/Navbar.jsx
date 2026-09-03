import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-display text-xl text-ink">
          Nomad Coffee Roasters
        </Link>
        <nav className="flex gap-6 text-sm text-ink/70">
          <Link to="/about">About</Link>
          <Link to="/service">What we offer</Link>
          <Link to="/blog">Journal</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
