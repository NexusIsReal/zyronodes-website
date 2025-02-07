'use client';

import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (name, email, password)</li>
                <li>Payment information</li>
                <li>Server configuration preferences</li>
                <li>Communication with our support team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Process your payments</li>
                <li>Send you important service updates</li>
                <li>Improve our services</li>
                <li>Respond to your requests and support needs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Law enforcement when required by law</li>
                <li>Third parties with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, please contact us at privacy@zyronodes.com
              </p>
            </section>
          </div>

          <div className="mt-12 text-gray-400 text-sm">
            Last updated: February 7, 2025
          </div>
        </motion.div>
      </div>
    </div>
  );
}
