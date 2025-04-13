import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link href="/">MCPRepository.net</Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <a href="mailto:info@mcprepository.net" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
