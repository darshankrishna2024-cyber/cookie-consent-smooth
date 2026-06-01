import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Iraivi Homes" },
      { name: "description", content: "Terms governing your use of the Iraivi Homes platform, under Indian Contract Act, IT Act and RERA." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal · 02"
      title="Terms &"
      italic="Conditions"
      description="Governed by the Indian Contract Act 1872, IT Act 2000 and RERA Act 2016."
    >
      <p className="meta">Last Updated: 01/01/2025</p>

      <h2>2.1 Acceptance of Terms</h2>
      <p>By accessing or using the Iraivi Homes website, you agree to be bound by these Terms and Conditions. If you disagree, please discontinue use of this website immediately.</p>

      <h2>2.2 Nature of the Platform</h2>
      <ul>
        <li>This website is a listing and marketing platform only — it is not a real estate broker or agent</li>
        <li>We do not guarantee property availability, pricing accuracy or builder promises</li>
        <li>All transactions are directly between buyer/renter and seller/landlord/builder</li>
        <li>We are not liable for disputes between parties</li>
      </ul>

      <h2>2.3 RERA Compliance</h2>
      <p>All properties listed on this website should be registered under the Real Estate (Regulation &amp; Development) Act, 2016. Users are advised to:</p>
      <ul>
        <li>Verify RERA registration numbers on the respective State RERA portals</li>
        <li>Check project completion status and approvals independently</li>
        <li>Consult a legal advisor before making any property investment</li>
      </ul>

      <h2>2.4 User Responsibilities</h2>
      <ul>
        <li>Provide accurate and truthful information when submitting inquiries</li>
        <li>Do not misuse the platform for fraudulent or illegal activities</li>
        <li>Do not post false property listings or misleading information</li>
        <li>Respect the intellectual property rights of the website</li>
      </ul>

      <h2>2.5 Pricing Disclaimer</h2>
      <p>All property prices shown are indicative and subject to change without notice. Final pricing is determined solely by the builder, seller or landlord. GST, stamp duty, registration charges and other levies are additional unless explicitly stated.</p>

      <h2>2.6 Limitation of Liability</h2>
      <p>Iraivi Homes shall not be liable for any direct, indirect, incidental or consequential losses arising from use of this website, including but not limited to financial loss from property transactions.</p>

      <h2>2.7 Governing Law &amp; Jurisdiction</h2>
      <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Chennai, Tamil Nadu.</p>
    </LegalLayout>
  );
}
