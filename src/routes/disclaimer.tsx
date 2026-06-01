import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Iraivi Homes" },
      { name: "description", content: "Important disclaimers regarding property images, pricing, availability and investment risk." },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <LegalLayout
      eyebrow="Legal · 03"
      title="General"
      italic="Disclaimer"
      description="Please read carefully before relying on any information on this website."
    >
      <h2>3.1 Property Images &amp; Renders</h2>
      <p>All property images, floor plans, 3D renders and virtual tours shown on this website are for representational purposes only. Actual construction, interiors and finishes may vary from what is depicted.</p>

      <h2>3.2 Pricing &amp; Availability</h2>
      <ul>
        <li>Prices listed are subject to change without prior notice</li>
        <li>Property availability cannot be guaranteed at the time of inquiry</li>
        <li>Special offers, discounts or schemes may have limited validity</li>
        <li>All prices exclude GST, registration charges and other statutory costs</li>
      </ul>

      <h2>3.3 Independent Verification</h2>
      <p>Users are strongly advised to:</p>
      <ul>
        <li>Physically visit the property before making any decision</li>
        <li>Verify all legal documents including title deed, encumbrance certificate and approvals</li>
        <li>Confirm RERA registration on the State RERA portal</li>
        <li>Consult a qualified legal and financial advisor before investing</li>
      </ul>

      <h2>3.4 Builder / Developer Responsibility</h2>
      <p>This website acts only as a platform. Iraivi Homes is not responsible for any builder delays, project cancellations, quality issues or failure to deliver promised amenities. Such matters are solely between the buyer and the builder/developer.</p>

      <h2>3.5 Investment Risk</h2>
      <p>Real estate investment carries financial risk. Past performance of property values is not indicative of future results. Iraivi Homes does not provide financial or investment advice.</p>
    </LegalLayout>
  );
}
