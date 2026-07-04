import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY } from "@/lib/nav";
import { css } from "../../../styled-system/css";
import { grid } from "../../../styled-system/patterns";

export const metadata: Metadata = {
  title: "Careers | Sea Blue Shipyard Ltd.",
  description: "Job openings and career opportunities at Sea Blue Shipyard Ltd., Kochi — training, technical, and management roles.",
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        title="Careers"
        subtitle="Build your career with one of India's leading private shipyards."
        image="/images/hr-wing.jpg"
      />

      <section className={css({ maxW: "6xl", mx: "auto", px: { base: "4", md: "8" }, py: { base: "12", md: "16" } })}>
        <div className={grid({ columns: { base: 1, md: 2 }, gap: "12" })}>
          <div>
            <h2 className={css({ fontFamily: "heading", fontSize: "2xl", fontWeight: "700", color: "brand.navy" })}>
              Work With Us
            </h2>
            <p className={css({ mt: "4", color: "fg", lineHeight: "1.8" })}>
              SBSL has a well-defined HR policy for the development of its workforce, spanning
              ministerial and technical levels. We provide on-the-job training to graduates of
              technical institutes and to those otherwise qualified and seeking practical
              training in relevant areas.
            </p>
            <p className={css({ mt: "4", color: "fg", lineHeight: "1.8" })}>
              We are perhaps the only private shipyard in the region capable of providing
              organized, structured training to marine technicians — alongside partnerships with
              institutions such as Euro Tech Marine Academy for marine engineering training.
            </p>
            <p className={css({ mt: "6", fontSize: "sm", color: "muted" })}>
              For job openings and enquiries, email{" "}
              <a href={`mailto:${COMPANY.careerEmail}`} className={css({ color: "brand.blue", fontWeight: "600" })}>
                {COMPANY.careerEmail}
              </a>{" "}
              or use the form.
            </p>
          </div>
          <div>
            <ContactForm formType="career" />
          </div>
        </div>
      </section>
    </main>
  );
}
