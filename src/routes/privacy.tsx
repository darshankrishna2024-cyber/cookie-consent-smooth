import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Iraivi Homes" },
      { name: "description", content: "How Iraivi Homes collects, uses and protects your personal data under the DPDP Act 2023." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal · 01"
      title="Privacy"
      italic="Policy"
      description="Compliant with the IT Act 2000, SPDI Rules 2011 and the Digital Personal Data Protection Act 2023."
    >
      <p className="meta">Effective Date: 01/01/2025 · Iraivi Homes Pvt. Ltd. · www.iraivihomes.com</p>

      <h2>1.1 Information We Collect</h2>
      <p>We collect the following personal data when you use our website or contact us:</p>
      <ul>
        <li>Full name, mobile number and email address</li>
        <li>Property preferences (type, location, budget, BHK)</li>
        <li>Search history and shortlisted properties</li>
        <li>Device information, IP address and browser type</li>
        <li>Location data, if permission is granted</li>
      </ul>

      <h2>1.2 How We Use Your Information</h2>
      <ul>
        <li>To recommend properties matching your preferences</li>
        <li>To connect you with verified builders, agents and owners</li>
        <li>To send property alerts, newsletters and promotional offers (with consent)</li>
        <li>To improve website experience through analytics</li>
        <li>To comply with legal and regulatory obligations</li>
      </ul>

      <h2>1.3 Data Sharing</h2>
      <p>We do not sell your personal data. We may share it with:</p>
      <ul>
        <li>RERA-registered builders and developers for property inquiries</li>
        <li>Verified real estate agents and brokers</li>
        <li>Third-party service providers (payment gateways, analytics tools)</li>
        <li>Government or regulatory bodies if required by law</li>
      </ul>

      <h2>1.4 Your Rights Under DPDP Act 2023</h2>
      <ul>
        <li>Right to access the personal data we hold about you</li>
        <li>Right to correct inaccurate or outdated information</li>
        <li>Right to erase your data, subject to legal retention</li>
        <li>Right to withdraw consent at any time</li>
        <li>Right to nominate a representative for data decisions</li>
      </ul>

      <h2>1.5 Data Retention &amp; Security</h2>
      <p>We retain your data for as long as necessary to provide our services or as required by law. We use SSL encryption, secure servers and access controls to protect your information.</p>

      <h2>1.6 Cookies</h2>
      <p>We use cookies for analytics (Google Analytics), remarketing (Facebook Pixel) and functional purposes. You may disable cookies via your browser settings. See our <a href="/cookies">Cookie Policy</a> for full details.</p>

      <div className="callout">
        <strong>Contact for Privacy</strong>
        Email: privacy@iraivihomes.com · Phone: +91-44-0000-0000<br />
        Address: Iraivi Homes Pvt. Ltd., Chennai, Tamil Nadu, India.
      </div>
    </LegalLayout>
  );
}
