import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy | Red White Jesus',
  description: 'DMCA copyright policy and takedown notice information for Red White Jesus.',
};

export default function DmcaPage() {
  return (
    <main style={{ background: '#FFFFFF', color: '#1A1A1A', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#CC2200', marginBottom: '0.5rem' }}>
          DMCA Policy
        </h1>
        <p style={{ color: '#1A1A1A', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: '#F8F7F5', border: '1px solid #E8E6E1', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8 }}>
            Red White Jesus respects the intellectual property rights of others. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we will respond promptly to claims of copyright infringement.
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8E6E1' }}>
            DMCA Agent
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            <strong>Designated Agent:</strong> The Voice of Cash<br />
            <strong>Email:</strong>{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#CC2200' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8E6E1' }}>
            Filing a DMCA Takedown Notice
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
            To submit a valid DMCA notice, please include:
          </p>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.75rem' }}>A physical or electronic signature of the copyright owner or authorized agent.</li>
            <li style={{ marginBottom: '0.75rem' }}>Identification of the copyrighted work claimed to have been infringed.</li>
            <li style={{ marginBottom: '0.75rem' }}>Identification of the infringing material with URL or sufficient detail to locate it.</li>
            <li style={{ marginBottom: '0.75rem' }}>Your contact information: name, address, telephone number, and email.</li>
            <li style={{ marginBottom: '0.75rem' }}>A statement of good faith belief that the use is not authorized.</li>
            <li style={{ marginBottom: '0.75rem' }}>A statement under penalty of perjury that the information is accurate and you are authorized to act.</li>
          </ol>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8E6E1' }}>
            Counter-Notification
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            If you believe material was removed in error, submit a counter-notification to our DMCA Agent with your signature, identification of the removed material, a statement under penalty of perjury that the removal was a mistake, and your contact information. We will restore the material within 10–14 business days if no court action is filed.
          </p>
        </section>
      </div>
    </main>
  );
}
