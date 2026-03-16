import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Red White Jesus',
  description: 'Get in touch with the Red White Jesus team.',
};

export default function ContactPage() {
  return (
    <main style={{ background: '#FFFFFF', color: '#1A1A1A', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#CC2200', marginBottom: '0.5rem' }}>
          Contact Us
        </h1>
        <p style={{ color: '#1A1A1A', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          How can we help?
        </p>

        <div style={{ background: '#F8F7F5', border: '1px solid #E8E6E1', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Whether you have a question about an order, want to share feedback, or have a content inquiry — we&apos;d love to hear from you.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            <strong style={{ color: '#CC2200' }}>Email:</strong>{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#CC2200', textDecoration: 'none' }}>
              thevoiceofcash@gmail.com
            </a>
          </p>
        </div>

        <div style={{ background: '#F8F7F5', border: '1px solid #E8E6E1', borderRadius: '8px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem' }}>
            What We Can Help With
          </h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>Order questions or returns</li>
            <li style={{ marginBottom: '0.5rem' }}>Content feedback or corrections</li>
            <li style={{ marginBottom: '0.5rem' }}>Partnership and advertising inquiries</li>
            <li style={{ marginBottom: '0.5rem' }}>DMCA or copyright concerns</li>
            <li style={{ marginBottom: '0.5rem' }}>General questions</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
