import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DocumentList } from "@/components/DocumentList";
import { css } from "../../../styled-system/css";

export const metadata: Metadata = {
  title: "News & Updates | Sea Blue Shipyard Ltd.",
  description: "Newsletters and updates from Sea Blue Shipyard Ltd.",
};

const NEWSLETTERS = [
  { label: "E-Newsletter - Jun26 Jul26 ", href: "/documents/newsletters/SBSL Newsletter Jun26 Jul26 .pdf" },
  { label: "E-Newsletter - Feb26 Mar26 ", href: "/documents/newsletters/SBSL-Newsletter-FEB26'-MAR'26.pdf" },
  { label: "E-Newsletter - Dec25 Jan26 ", href: "/documents/newsletters/SBSL-Newsletter-DEC'25-JAN'26.pdf" },
  { label: "E-Newsletter - Oct25 Nov25 ", href: "/documents/newsletters/SBSL Newsletter OCT 25-NOV 25.pdf" },
  { label: "E-Newsletter - Aug25 Sep25 ", href: "/documents/newsletters/SBSL Newsletter AUG 25-SEP 25.pdf" },
  { label: "E-Newsletter - Jun25 Jul25 ", href: "/documents/newsletters/SBSL Newsletter JUN 25-JUL 25.pdf" },
  { label: "E-Newsletter - Apr25 May25 ", href: "/documents/newsletters/SBSL Newsletter APR 25-MAY 25.pdf" },
  { label: "E-Newsletter - Feb25 Mar25 ", href: "/documents/newsletters/SBSL Newsletter FEB 25-MAR 25.pdf" },
  { label: "E-Newsletter - Dec24 Jan25 ", href: "/documents/newsletters/SBSL Newsletter DEC 24-JAN 25.pdf" },
];

export default function NewsPage() {
  return (
    <main>
      <PageHero title="News & Updates" subtitle="Newsletters and announcements from Sea Blue Shipyard Ltd." />

      <section className={css({ maxW: "3xl", mx: "auto", px: { base: "4", md: "8" }, py: { base: "12", md: "16" } })}>
        <h2 className={css({ fontFamily: "heading", fontSize: "lg", fontWeight: "700", color: "brand.navy", mb: "3" })}>
          Newsletters
        </h2>
        <DocumentList items={NEWSLETTERS} />

        <p className={css({ mt: "10", fontSize: "sm", color: "muted" })}>
          For AGM/EGM notices, financial statements, and other statutory disclosures, see the{" "}
          <a href="/investors" className={css({ color: "brand.blue" })}>Investors</a> page.
        </p>
      </section>
    </main>
  );
}
