import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Return Policy | Red White Jesus',
  description: 'Return and refund policy for Red White Jesus merchandise.',
};

export default function ReturnsPage() {
  return (
    <main style={{ background: '#FFFFFF', color: '#1A1A1A', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#CC2200', marginBottom: '0.5rem' }}>
          Return &amp; Refund Policy
        </h1>
        <p style={{ color: '#1A1A1A', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: '#F8F7F5', border: '1px solid #E8E6E1', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8 }}>
            Red White Jesus merchandise is printed and fulfilled on demand. Please review our return policy carefully before placing an order.
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8E6E1' }}>
            Eligible Returns
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
            We accept returns and issue refunds in the following circumstances:
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>Items received damaged or defective</li>
            <li style={{ marginBottom: '0.5rem' }}>Items with printing errors or quality defects</li>
            <li style={{ marginBottom: '0.5rem' }}>Wrong item shipped</li>
          </ul>
          <p style={{ lineHeight: 1.8, marginTop: '1rem' }}>
            Eligible returns must be requested within <strong>30 days</strong> of delivery.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8E6E1' }}>
            Non-Returnable Items
          </h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>Worn, washed, or used items</li>
            <li style={{ marginBottom: '0.5rem' }}>Custom or personalized merchandise</li>
            <li style={{ marginBottom: '0.5rem' }}>Items returned after 30 days of delivery</li>
            <li style={{ marginBottom: '0.5rem' }}>Items without original packaging (where applicable)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8E6E1' }}>
            Refund Process
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Once your return is approved, refunds are processed to your original payment method within <strong>5–10 business days</strong>. You will receive an email confirmation once the refund has been initiated. Processing time may vary depending on your bank or payment provider.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#CC2200', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E8E6E1' }}>
            How to Request a Return
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            To initiate a return, please email us at{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#CC2200' }}>thevoiceofcash@gmail.com</a>{' '}
            with your order number, a description of the issue, and photos if applicable. We will respond within 2–3 business days.
          </p>
        </section>
      </div>
    </main>
  );
}
