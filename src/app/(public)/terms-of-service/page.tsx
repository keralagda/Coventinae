export default function TermsOfServicePage() {
  return (
    <div className="bg-[#03090F] min-h-screen text-white pt-40 pb-24">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-serif font-bold text-[#C5A059]">Terms of Service</h1>
          <p className="text-white/40 uppercase tracking-widest text-sm">Effective Date: February 2026</p>
        </div>

        <div className="prose prose-invert prose-headings:text-[#C5A059] max-w-none space-y-10 text-white/70 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white border-b border-[#C5A059]/20 pb-2">1. Booking Terms</h2>
            <p>By making a booking through Coventina AI, you agree to comply with our check-in and check-out timings. Standard check-in is at 12:00 PM and check-out is at 9:00 AM the following day.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white border-b border-[#C5A059]/20 pb-2">2. Cancellation Policy</h2>
            <p>Cancellations made 15 days or more before the check-in date will receive a 90% refund. Cancellations made between 7 to 14 days will receive a 50% refund. No refunds are provided for cancellations within 7 days of check-in.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white border-b border-[#C5A059]/20 pb-2">3. Conduct on Board</h2>
            <p>Passengers must follow the safety instructions provided by the captain and crew. Illegal activities, drug use, or behavioral misconduct that endangers the vessel or other passengers will result in immediate termination of the cruise without a refund.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white border-b border-[#C5A059]/20 pb-2">4. Limitation of Liability</h2>
            <p>Coventina Luxury Houseboats is not liable for loss or damage to personal belongings or for delays caused by weather conditions, mechanical failure, or other factors beyond our control.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white border-b border-[#C5A059]/20 pb-2">5. Governing Law</h2>
            <p>These terms are governed by the laws of India and specifically the jurisdiction of the courts in Kerala.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
