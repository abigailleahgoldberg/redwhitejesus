import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Red White Jesus',
  description: 'Important disclaimers for Red White Jesus content.',
};

export default function DisclaimerPage() {
  return (
    <main style={{ background: '#FFFFFF', color: '#1A1A1A', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#CC2200', marginBottom: '0.5rem' }}>
          Disclaimer
        </h1>
        <p style={{ color: '#1A1A1A', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: '#F8F7F5', border: '1px solid #E8E6E1', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8 }}>
            Please read this disclaimer carefully before using Red White Jesus (redwhitejesus.com).
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8E6E1' }}>
            Religious &amp; Educational Content
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            The content on this website is provided for educational and cultural purposes only. Red White Jesus does not represent any official religious institution, denomination, or organization. We are not ordained clergy, religious scholars, or authorized representatives of any faith tradition.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8E6E1' }}>
            Sacred Texts &amp; Translations
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Sacred text translations, interpretations, and commentary on this site represent personal perspectives only. Translations may vary between denominations and scholars. For theological guidance, please consult a qualified religious leader or scholar within your faith tradition.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8E6E1' }}>
            AI-Generated Content
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Some content on this website may be created or assisted by artificial intelligence tools. While we strive for accuracy and respect for faith traditions, AI-generated content may contain errors or misrepresentations. We encourage readers to verify theological content with authoritative religious sources.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8E6E1' }}>
            External Links
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            This website may contain links to external websites. We are not responsible for the content, accuracy, or practices of any third-party sites. The inclusion of any link does not imply endorsement by Red White Jesus.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8E6E1' }}>
            Contact
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Questions about this disclaimer? Contact us at:{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#CC2200' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
