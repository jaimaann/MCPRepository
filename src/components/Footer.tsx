import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" style={{ padding: '1.5rem 0', backgroundColor: '#f7f7f7', borderTop: '1px solid #ebebeb' }}>
      <div className="container">
        <div className="footer-content" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '1rem' }}>
          <div>
            <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', flexWrap: 'wrap', justifyContent: 'center' }}>
              <li>
                <Link href="/about" style={{ fontSize: '0.9rem', color: '#717171' }}>About Us</Link>
              </li>
              <li>
                <Link href="/terms" style={{ fontSize: '0.9rem', color: '#717171' }}>Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" style={{ fontSize: '0.9rem', color: '#717171' }}>Privacy Policy</Link>
              </li>
              <li>
                <Link href="/sitemap" style={{ fontSize: '0.9rem', color: '#717171' }}>Sitemap</Link>
              </li>
              <li>
                <a href="mailto:info@mcprepository.net" style={{ fontSize: '0.9rem', color: '#717171' }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ textAlign: 'center', fontSize: '0.8rem', color: '#888' }}>
          <p>© {currentYear} MCPRepository.net, Inc. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>
            <a href="mailto:info@mcprepository.net" style={{ color: '#717171' }}>info@mcprepository.net</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
