import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy — Iraivi Homes" },
      { name: "description", content: "How refunds and cancellations are handled on the Iraivi Homes platform." },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <LegalLayout
      eyebrow="Legal · 07"
      title="Refund &"
      italic="Cancellation"
      description="Compliant with the Consumer Protection Act 2019 and E-Commerce Rules 2020."
    >
      <h2>7.1 Scope of This Policy</h2>
      <p>This policy applies to booking amounts, token amounts or any fees paid directly through the Iraivi Homes website. It does <strong>not</strong> cover payments made directly to builders, agents or developers outside our platform.</p>

      <h2>7.2 Refund Eligibility</h2>
      <table>
        <thead>
          <tr><th>Scenario</th><th>Refund Status</th><th>Timeline</th></tr>
        </thead>
        <tbody>
          <tr><td>Service fee paid but no agent assigned</td><td>Full Refund</td><td>7 working days</td></tr>
          <tr><td>Duplicate payment made</td><td>Full Refund</td><td>5 working days</td></tr>
          <tr><td>Booking cancelled within 24 hours</td><td>Full Refund</td><td>7 working days</td></tr>
          <tr><td>Booking cancelled after 24 hours</td><td>Partial / Case-by-case</td><td>15 working days</td></tr>
          <tr><td>Property not as described on platform</td><td>Full Refund</td><td>10 working days</td></tr>
          <tr><td>Non-refundable booking fee (as stated)</td><td>No Refund</td><td>—</td></tr>
        </tbody>
      </table>

      <h2>7.3 How to Request a Refund</h2>
      <ul>
        <li>Email your refund request to <strong>refund@iraivihomes.com</strong></li>
        <li>Include your name, booking ID, payment reference and reason for refund</li>
        <li>Our team will respond within 48 hours with next steps</li>
        <li>Refunds are processed to the original payment method only</li>
      </ul>

      <h2>7.4 Non-Refundable Items</h2>
      <ul>
        <li>Premium listing fees once the listing is published</li>
        <li>Subscription charges after service activation</li>
        <li>Convenience fees charged by payment gateways</li>
      </ul>

      <h2>7.5 Builder / Developer Payments</h2>
      <p>Payments made directly to builders or developers are governed by their own refund policies and RERA regulations. Iraivi Homes is not responsible for refunds on such payments. Please refer to your allotment letter or builder–buyer agreement.</p>
    </LegalLayout>
  );
}
