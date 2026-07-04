import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DocumentList } from "@/components/DocumentList";
import { css } from "../../../styled-system/css";
import { grid } from "../../../styled-system/patterns";

export const metadata: Metadata = {
  title: "Investors | Sea Blue Shipyard Ltd.",
  description: "Annual reports, financial statements, AGM/EGM notices, and CSR policy for Sea Blue Shipyard Ltd.",
};

const ANNUAL_REPORTS = [
  { label: "Annual Report FY 2023-24", href: "/documents/annual-reports/annual-report-2023-24.pdf" },
  { label: "Annual Report FY 2022-23", href: "/documents/annual-reports/annual-report-2022-23.pdf" },
  { label: "Annual Report FY 2021-22", href: "/documents/annual-reports/annual-report-2021-22.pdf" },
  { label: "Annual Report FY 2019-20", href: "/documents/annual-reports/annual-report-2019-20.pdf" },
  { label: "Annual Report FY 2020", href: "/documents/annual-reports/annual-report-2020.pdf" },
];

const NOTICES = [
  { label: "Notice of 22nd Annual General Meeting", href: "/documents/notices/Notice-of-22nd-Annual-General-Meeting.pdf" },
  { label: "Notice of 21st Annual General Meeting", href: "/documents/notices/notice-21st-agm.pdf" },
  { label: "EGM Notice", href: "/documents/notices/EGM-Notice.pdf" },
];

const OTHER_DOCS = [
  { label: "CSR Policy", href: "/documents/other/CSR-Policy.pdf" },
  { label: "Financial Statement & Auditors' Report", href: "/documents/other/Financial-Statement-and-Audit-report.pdf" },
  { label: "Company Profile", href: "/documents/other/company-profile.pdf" },
  { label: "Vendor Registration Form", href: "/documents/other/Vendor-Registration-Form.pdf" },
];

export default function InvestorsPage() {
  return (
    <main>
      <PageHero title="Investors" subtitle="Annual reports, notices, and statutory disclosures for Sea Blue Shipyard Ltd." />

      <section className={css({ maxW: "6xl", mx: "auto", px: { base: "4", md: "8" }, py: { base: "12", md: "16" } })}>
        <div className={grid({ columns: { base: 1, md: 3 }, gap: "10" })}>
          <div>
            <h2 className={css({ fontFamily: "heading", fontSize: "lg", fontWeight: "700", color: "brand.navy", mb: "3" })}>
              Annual Reports
            </h2>
            <DocumentList items={ANNUAL_REPORTS} />
          </div>
          <div>
            <h2 className={css({ fontFamily: "heading", fontSize: "lg", fontWeight: "700", color: "brand.navy", mb: "3" })}>
              Notices &amp; Meetings
            </h2>
            <DocumentList items={NOTICES} />
          </div>
          <div>
            <h2 className={css({ fontFamily: "heading", fontSize: "lg", fontWeight: "700", color: "brand.navy", mb: "3" })}>
              Other Documents
            </h2>
            <DocumentList items={OTHER_DOCS} />
          </div>
        </div>

        <p className={css({ mt: "12", fontSize: "sm", color: "muted", textAlign: "center" })}>
          For older filings or documents not listed here, contact{" "}
          <a href="mailto:cs@seablueshipyard.com" className={css({ color: "brand.blue" })}>
            cs@seablueshipyard.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
