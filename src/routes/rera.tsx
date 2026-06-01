import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/rera")({
  head: () => ({
    meta: [
      { title: "RERA Compliance — Iraivi Homes" },
      { name: "description", content: "Our position under the Real Estate (Regulation & Development) Act, 2016 and how to verify RERA." },
    ],
  }),
  component: ReraPage,
});

function ReraPage() {
  return (
    <LegalLayout
      eyebrow="Legal · 06"
      title="RERA"
      italic="Compliance"
      description="Under the Real Estate (Regulation & Development) Act, 2016."
    >
      <h2>6.1 Our Commitment</h2>
      <p>We are committed to transparency and consumer protection in real estate transactions. We encourage all builders, developers and agents listed on our platform to be fully RERA compliant.</p>

      <h2>6.2 Platform Role</h2>
      <ul>
        <li>This website is a listing and marketing platform only</li>
        <li>We are not a RERA-registered real estate agent or broker</li>
        <li>We do not verify or guarantee RERA registration of listed projects</li>
        <li>Inclusion of a project on this website does not imply RERA compliance</li>
      </ul>

      <h2>6.3 How to Verify RERA Registration</h2>
      <p>Before investing in any property, please verify RERA registration on the respective State RERA portal.</p>
      <table>
        <thead>
          <tr><th>State</th><th>RERA Portal</th></tr>
        </thead>
        <tbody>
          <tr><td>Tamil Nadu (TNRERA)</td><td>tnrera.in</td></tr>
          <tr><td>Maharashtra (MahaRERA)</td><td>maharera.mahaonline.gov.in</td></tr>
          <tr><td>Karnataka (K-RERA)</td><td>rera.karnataka.gov.in</td></tr>
          <tr><td>Delhi (DRERA)</td><td>rera.delhi.gov.in</td></tr>
          <tr><td>Uttar Pradesh (UP RERA)</td><td>up-rera.in</td></tr>
          <tr><td>Gujarat (GujRERA)</td><td>gujrera.gujarat.gov.in</td></tr>
          <tr><td>Other States</td><td>Visit the MoHUA website for state-wise links</td></tr>
        </tbody>
      </table>

      <h2>6.4 Buyer Advisory</h2>
      <ul>
        <li>Always ask the builder for their RERA registration number</li>
        <li>Cross-check project details, approved plans and delivery timeline on the RERA portal</li>
        <li>File complaints against non-compliant builders directly with your State RERA Authority</li>
      </ul>
    </LegalLayout>
  );
}
