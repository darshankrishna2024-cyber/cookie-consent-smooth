import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/grievance")({
  head: () => ({
    meta: [
      { title: "Grievance Officer — Iraivi Homes" },
      { name: "description", content: "Designated Grievance Officer details and complaint resolution process." },
    ],
  }),
  component: GrievancePage,
});

function GrievancePage() {
  return (
    <LegalLayout
      eyebrow="Legal · 05"
      title="Grievance"
      italic="Officer"
      description="Mandatory under the IT Act 2000 (Section 79), Consumer Protection Act 2019 and DPDP Act 2023."
    >
      <h2>5.1 Designated Grievance Officer</h2>
      <table>
        <tbody>
          <tr><th>Name</th><td>Mr. R. Karthik</td></tr>
          <tr><th>Designation</th><td>Legal &amp; Compliance Manager</td></tr>
          <tr><th>Email</th><td>grievance@iraivihomes.com</td></tr>
          <tr><th>Phone</th><td>+91-44-0000-0000</td></tr>
          <tr><th>Working Hours</th><td>Monday to Friday, 10:00 AM – 6:00 PM IST</td></tr>
          <tr><th>Address</th><td>Iraivi Homes Pvt. Ltd., Chennai, Tamil Nadu, India</td></tr>
        </tbody>
      </table>

      <h2>5.2 Response Timeline</h2>
      <ul>
        <li>Acknowledgement of complaint within 48 hours of receipt</li>
        <li>Resolution of complaint within 30 days as per the IT Act 2000</li>
        <li>Data-related complaints (DPDP Act) acknowledged within 72 hours</li>
      </ul>

      <h2>5.3 Types of Complaints Accepted</h2>
      <ul>
        <li>Unauthorized use or misuse of your personal data</li>
        <li>Incorrect property listings or misleading information</li>
        <li>Privacy violations or data breach concerns</li>
        <li>Fraudulent activity or impersonation</li>
        <li>Billing or payment disputes</li>
        <li>Any other violation of our Terms &amp; Conditions</li>
      </ul>
    </LegalLayout>
  );
}
