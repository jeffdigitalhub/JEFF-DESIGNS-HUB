import React from 'react';
import { FileText } from 'lucide-react';
import { AGENCY_INFO } from '../data/mockData';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-orange-400 text-xs font-mono mb-4">
          <FileText className="w-3.5 h-3.5 text-orange-500" />
          <span>TERMS OF ENGAGEMENT</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Terms of Service
        </h1>
        <p className="text-xs text-neutral-400 mt-2 font-mono">
          Last updated: March 2026 · {AGENCY_INFO.name}
        </p>
      </div>

      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/90 border border-neutral-800 space-y-6 text-xs sm:text-sm text-neutral-300 leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-white font-display mb-2">1. Scope of Services</h2>
          <p>
            {AGENCY_INFO.name} provides graphic design, brand identity creation, poster design, website development, mobile application creation, and digital mentorship as agreed in the project brief and invoice.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white font-display mb-2">2. Deliverables & Revision Policy</h2>
          <p>
            Each service package includes the specified rounds of revisions. Revisions apply to modifications within the original agreed brief. Substantial deviations or new concepts requested after milestone approvals may incur additional nominal fees.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white font-display mb-2">3. Intellectual Property Rights</h2>
          <p>
            Upon receipt of 100% project payment, full ownership and commercial copyright for final logo vector designs, branding assets, and custom website code transfer entirely to the client. {AGENCY_INFO.name} reserves the right to display completed designs in agency portfolios and promotional case studies.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white font-display mb-2">4. Payment Terms & Turnaround</h2>
          <p>
            Projects typically require a 50% commitment deposit prior to work commencement, with the remaining balance due upon final asset approval prior to vector export release or live server deployment. Our 7-Day Website Turnaround begins after all required client content and assets are provided.
          </p>
        </section>
      </div>
    </div>
  );
};
