import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/mockData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-orange-400 text-xs font-mono mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
          <span>LEGAL & COMPLIANCE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Privacy Policy
        </h1>
        <p className="text-xs text-neutral-400 mt-2 font-mono">
          Last updated: March 2026 · JEFF DESIGNS HUB (Kenya)
        </p>
      </div>

      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/90 border border-neutral-800 space-y-6 text-xs sm:text-sm text-neutral-300 leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-white font-display mb-2">1. Overview</h2>
          <p>
            At {AGENCY_INFO.name}, founded by {AGENCY_INFO.owner}, we value your privacy and comply with the Kenya Data Protection Act, 2019. This privacy policy explains how we collect, store, and safeguard your personal information when you contact us, commission design or website projects, or subscribe to our updates.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white font-display mb-2">2. Information We Collect</h2>
          <p>
            We collect information provided directly by you when filling out quote forms, sending inquiries, or contacting us via WhatsApp. This may include your name, phone number, email address, company name, and project specifications.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white font-display mb-2">3. How We Use Your Data</h2>
          <p>
            Your information is strictly utilized to provide design quotes, communicate during active project sprints, deliver production assets (logos, websites, apps), and issue invoices and payment receipts. We never sell, rent, or trade your data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white font-display mb-2">4. Asset Security & Confidentiality</h2>
          <p>
            All client logos, source files, proprietary codebases, and credentials provided during website setups are handled with strict confidentiality. Production access credentials are securely deleted or transferred upon project handover.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white font-display mb-2">5. Contact Data Officer</h2>
          <p>
            For any questions regarding your data or to request data removal, please contact Geoffrey Robi at{' '}
            <a href={`mailto:${AGENCY_INFO.email}`} className="text-orange-400 underline">
              {AGENCY_INFO.email}
            </a>{' '}
            or WhatsApp{' '}
            <a href={`tel:${AGENCY_INFO.phone1Raw}`} className="text-orange-400 underline">
              {AGENCY_INFO.phone1}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};
