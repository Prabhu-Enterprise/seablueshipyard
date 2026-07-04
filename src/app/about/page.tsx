import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { css } from "../../../styled-system/css";
import { grid } from "../../../styled-system/patterns";

export const metadata: Metadata = {
  title: "About Us | Sea Blue Shipyard Ltd.",
  description:
    "ISO 9001:2015 certified shipyard established in 2003 in Vypin, Kochi. Learn about our history, leadership team, vision, mission, and certifications.",
};

const VALUES = [
  {
    title: "Vision",
    body: "To make Sea Blue Shipyard Ltd. the most respected ship building and repairing company in India.",
  },
  {
    title: "Mission",
    body: "To deliver quality services to our customers through skilled and dedicated human resources in a safe working environment.",
  },
  {
    title: "Objective",
    body: "Hundred percent compliance with contract, together with excellence in execution.",
  },
  {
    title: "Policy",
    body: "To minimize the idle period of vessels entering our yard.",
  },
  {
    title: "Dream",
    body: "To build trust and relationships at the most vital strategic location in India — Vypin, Kochi.",
  },
  {
    title: "Belief",
    body: "We believe in compassionate capitalism, which shares whatever is generated for the benefit of a larger mass.",
  },
];

const TEAM = [
  {
    name: "Shri. V. Manoj Kumar Prabhu",
    role: "Chairman and Managing Director",
    bio: "30 years of experience in ship parts fabrication, Pre-Engineered Building (PEB) infrastructure, and steel distribution. A commerce graduate from Mahatma Gandhi University, Kottayam, with long-standing partnerships across Tata Steel, Tata Retail Enterprises, Cochin Shipyard Ltd., and AkzoNobel.",
    image: "/images/cmd-portrait.jpeg",
  },
  {
    name: "Smt. Rajasree Prabhu",
    role: "Non-Executive Director",
    bio: "Many years of experience managing diverse businesses, with an established record of integrity and credibility across previous roles.",
  },
  {
    name: "Shri. Ramesh Kumar Prabhu",
    role: "Non-Executive Director (MBA, B.Tech Civil)",
    bio: "Experience with the Birla Group, with a strong background in project oversight, operations optimization, and driving business growth.",
  },
  {
    name: "Shri. V. Abubackar Shaffi",
    role: "Non-Executive Director",
    bio: "Over 16 years of senior management experience across sales, marketing, logistics, finance, and administration, with a focus on the Middle East region.",
  },
  {
    name: "Shri. T. P. John",
    role: "Non-Executive Director",
    bio: "Electrical & Electronics Engineer with over 30 years of experience in power distribution, solar power plants, automation, and SCADA systems.",
  },
  {
    name: "Shri. Joseph Abraham",
    role: "Non-Executive Director",
    bio: "Over 27 years of diverse experience in industrial production, management, and distribution across multiple industries.",
  },
];

const CERTIFICATIONS = [
  "Indian Navy",
  "Goa Shipyard Ltd.",
  "Cochin Shipyard Ltd.",
  "Indian Coast Guard",
  "Naval Physical & Oceanographic Laboratory (NPOL)",
  "Irrigation Department Class A License",
  "Kerala Maritime Board",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Sea Blue Shipyard"
        subtitle="An ISO 9001:2015 certified shipyard, established in 2003 in Vypin, Kochi."
        image="/images/tug-boat.jpg"
      />

      <section className={css({ maxW: "5xl", mx: "auto", px: { base: "4", md: "8" }, py: { base: "12", md: "16" } })}>
        <h2 className={css({ fontFamily: "heading", fontSize: "2xl", fontWeight: "700", color: "brand.navy" })}>
          Our Profile
        </h2>
        <div className={css({ mt: "5", color: "fg", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "4" })}>
          <p>
            Sea Blue Shipyard Ltd. is an ISO 9001:2015 certified shipyard based in Kochi,
            established in 2003, registered under the Companies Act, 1956. Our yard is built
            upon 4 acres of land in Vypin. We operate six licensed slipways ideal for hauling up
            and launching medium-sized vessels, with wharfage for afloat repairs of vessels up
            to 120 metres long and 6.0 metres draft.
          </p>
          <p>
            SBSL is located directly opposite the Vallarpadam International Container
            Transshipment Terminal, close to Cochin Shipyard Ltd., Cochin Port Trust, the
            International Ship Repair Complex, the Single Point Mooring Project, and the
            International Bunkering Terminal — all within a 3km radius.
          </p>
          <p>
            SBSL opened a branch in Goa in 2009, executing major projects including the erection
            of a ship lift at Goa Shipyard Ltd. on subcontract from M/s. Bosch Rexroth,
            Netherlands, and complete teakwood decking of INS Sudarshini. We regularly undertake
            dry dock repairs at GSL, including dock block preparation and docking assistance, and
            maintain around 60 technical personnel at our Goa branch.
          </p>
          <p>
            As part of our expansion programme, the company is acquiring an additional 1.5 acres
            of land adjacent to the present yard, bringing the total to 4 acres for yard
            facilities — enabling construction of a new dry dock measuring 130m x 20m x 8m.
          </p>
        </div>
      </section>

      <section className={css({ bg: "brand.blueLight", py: { base: "12", md: "16" } })}>
        <div className={css({ maxW: "6xl", mx: "auto", px: { base: "4", md: "8" } })}>
          <h2 className={css({ fontFamily: "heading", fontSize: "2xl", fontWeight: "700", color: "brand.navy", textAlign: "center" })}>
            Our Principles
          </h2>
          <div className={grid({ columns: { base: 1, sm: 2, lg: 3 }, gap: "6", mt: "10" })}>
            {VALUES.map((v) => (
              <div key={v.title} className={css({ bg: "white", borderRadius: "md", p: "6", boxShadow: "sm" })}>
                <h3 className={css({ fontFamily: "heading", fontWeight: "700", color: "brand.gold", fontSize: "sm", textTransform: "uppercase", letterSpacing: "wide" })}>
                  {v.title}
                </h3>
                <p className={css({ mt: "2", fontSize: "sm", color: "muted", lineHeight: "1.6" })}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={css({ maxW: "6xl", mx: "auto", px: { base: "4", md: "8" }, py: { base: "12", md: "16" } })}>
        <h2 className={css({ fontFamily: "heading", fontSize: "2xl", fontWeight: "700", color: "brand.navy", textAlign: "center" })}>
          Leadership Team
        </h2>
        <div className={grid({ columns: { base: 1, md: 2 }, gap: "8", mt: "10" })}>
          {TEAM.map((member) => (
            <div key={member.name} className={css({ display: "flex", gap: "5", bg: "white", borderRadius: "md", boxShadow: "sm", border: "1px solid", borderColor: "gray.200", p: "6" })}>
              {member.image && (
                <div className={css({ position: "relative", flexShrink: 0, w: "20", h: "20", borderRadius: "full", overflow: "hidden" })}>
                  <Image src={member.image} alt={member.name} fill className={css({ objectFit: "cover" })} />
                </div>
              )}
              <div>
                <h3 className={css({ fontWeight: "700", color: "brand.navy" })}>{member.name}</h3>
                <p className={css({ fontSize: "xs", fontWeight: "600", color: "brand.gold", mb: "2", textTransform: "uppercase", letterSpacing: "wide" })}>
                  {member.role}
                </p>
                <p className={css({ fontSize: "sm", color: "muted", lineHeight: "1.6" })}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={css({ bg: "gray.50", py: { base: "12", md: "16" } })}>
        <div className={css({ maxW: "5xl", mx: "auto", px: { base: "4", md: "8" } })}>
          <div className={grid({ columns: { base: 1, md: 2 }, gap: "10", alignItems: "center" })}>
            <div>
              <h2 className={css({ fontFamily: "heading", fontSize: "2xl", fontWeight: "700", color: "brand.navy" })}>
                Certifications
              </h2>
              <p className={css({ mt: "4", color: "fg", lineHeight: "1.8" })}>
                SBSL maintains a firm policy of effective management and continuous improvement
                across Health, Safety, and Welfare, complying with ISO specifications and
                maintaining safe practices across all working areas. We are licensed to
                construct and repair passenger vessels, cargo vessels, fishing vessels, ferry
                crafts, barges, dredgers, and houseboats under Kerala Inland Vessels Rules.
              </p>
              <p className={css({ mt: "4", fontWeight: "600", color: "brand.navy" })}>
                Registered and certified by:
              </p>
              <ul className={css({ mt: "2", display: "flex", flexDirection: "column", gap: "1" })}>
                {CERTIFICATIONS.map((c) => (
                  <li key={c} className={css({ fontSize: "sm", color: "fg" })}>
                    · {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className={css({ position: "relative", w: "full", aspectRatio: "3/4", maxW: "xs", mx: "auto", borderRadius: "md", overflow: "hidden", boxShadow: "md" })}>
              <Image src="/images/iso-certificate.jpg" alt="ISO 9001:2015 Certificate" fill className={css({ objectFit: "contain", bg: "white" })} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
