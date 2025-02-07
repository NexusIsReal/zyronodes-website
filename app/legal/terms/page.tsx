'use client';

import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using ZyroNodes services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="mb-4">
                ZyroNodes provides game server hosting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the rights of other users</li>
                <li>Use the services only for their intended purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
              <p className="mb-4">
                Services are billed on a recurring basis. You agree to pay all fees associated with your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
              <p className="mb-4">
                You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Privacy</h2>
              <p className="mb-4">
                Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <p className="mb-4">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at support@zyronodes.com
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
