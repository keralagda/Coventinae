export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#03090F] min-h-screen text-white pt-40 pb-24">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-serif font-bold text-[#C5A059]">Privacy Policy</h1>
          <p className="text-white/40 uppercase tracking-widest text-sm">Last Updated: February 2026</p>
        </div>

        <div className="prose prose-invert prose-headings:text-[#C5A059] max-w-none space-y-10 text-white/70 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white border-b border-[#C5A059]/20 pb-2">1. Introduction</h2>
            <p>Welcome to Coventina AI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white border-b border-[#C5A059]/20 pb-2">2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data:</strong> first name, last name, and username.</li>
              <li><strong>Contact Data:</strong> email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> internet protocol (IP) address, browser type and version, and location data.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white border-b border-[#C5A059]/20 pb-2">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To register you as a new customer.</li>
              <li>To process and deliver your booking.</li>
              <li>To manage our relationship with you.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white border-b border-[#C5A059]/20 pb-2">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white border-b border-[#C5A059]/20 pb-2">5. Contact Information</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: <strong>privacy@coventina.com</strong></p>
          </section>
        </div>
      </div>
    </div>
  );
}
