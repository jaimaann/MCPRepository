import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
      <h1 style={{ 
        fontSize: '3rem', 
        fontWeight: '700',
        marginBottom: '1.5rem',
        color: '#222222',
      }}>
        404 - Page Not Found
      </h1>
      <p style={{ 
        fontSize: '1.25rem', 
        lineHeight: '1.6',
        color: '#717171',
        marginBottom: '2.5rem'
      }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link href="/" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.75rem 2rem' }}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
