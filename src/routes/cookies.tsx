import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Iraivi Homes" },
      { name: "description", content: "Types of cookies used by Iraivi Homes and how to control them." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="Legal · 04"
      title="Cookie"
      italic="Policy"
      description="How and why we use cookies, and how you can control them."
    >
      <h2>4.1 What Are Cookies?</h2>
      <p>Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and understand how our website is used.</p>

      <h2>4.2 Types of Cookies We Use</h2>
      <table>
        <thead>
          <tr><th>Cookie Type</th><th>Purpose</th><th>Provider</th><th>Duration</th></tr>
        </thead>
        <tbody>
          <tr><td>Essential</td><td>Website functionality, login sessions</td><td>Internal</td><td>Session</td></tr>
          <tr><td>Analytics</td><td>Track visits, pages viewed, user behavior</td><td>Google Analytics</td><td>2 years</td></tr>
          <tr><td>Marketing</td><td>Remarketing, ad targeting</td><td>Facebook Pixel, Google Ads</td><td>90 days</td></tr>
          <tr><td>Functional</td><td>Save preferences, language, filters</td><td>Internal</td><td>1 year</td></tr>
        </tbody>
      </table>

      <h2>4.3 How to Control Cookies</h2>
      <ul>
        <li><strong>Browser Settings.</strong> Disable or delete cookies via your browser preferences.</li>
        <li><strong>Google Analytics opt-out.</strong> Install the Google Analytics opt-out browser add-on.</li>
        <li><strong>Facebook.</strong> Manage ad preferences at facebook.com/ads/preferences.</li>
        <li>Disabling essential cookies may affect website functionality.</li>
      </ul>
    </LegalLayout>
  );
}
