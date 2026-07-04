import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DocumentList } from "@/components/DocumentList";
import { css } from "../../../styled-system/css";

export const metadata: Metadata = {
  title: "News & Updates | Sea Blue Shipyard Ltd.",
  description: "Newsletters and updates from Sea Blue Shipyard Ltd.",
};

const NEWSLETTERS = [
  { label: "E-Newsletter, Vol. 11 (November 2022)", href: "/documents/newsletters/newsletter-vol-11-nov-2022.pdf" },
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
