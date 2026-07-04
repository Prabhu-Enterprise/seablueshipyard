import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { css } from "../../../styled-system/css";
import { grid, flex } from "../../../styled-system/patterns";

export const metadata: Metadata = {
  title: "Our Business | Sea Blue Shipyard Ltd.",
  description:
    "Ship building, ship repair, general engineering, and general services from Sea Blue Shipyard Ltd. — serving the Indian Navy, Indian Coast Guard, and India's marine industry.",
};

const BUSINESS_LINES = [
  {
    id: "ship-building",
    title: "Ship Building",
    description:
      "New-build vessels including survey launches, pilot and mooring boats, workboats, ship launching, vessel conversion, and dredger unit assembly.",
    highlights: [
      "FACT Pragathiyan",
      "15.50m Survey Launch — Hydrographic Survey Wing, Govt. of Kerala",
      "17m Pilot cum Mooring Boat — Sparkle Port Services Ltd.",
    ],
    images: ["/images/ship-building-1.jpg", "/images/ship-building-2.jpg"],
  },
  {
    id: "ship-repair",
    title: "Ship Repair",
    description:
      "Dry-dock, afloat, and offshore repair covering hull work, machinery overhaul, and refits for naval, coast guard, and commercial vessels.",
    highlights: [
      "Indian Navy — INS Sudarshini, INS Sujata, INS Tarangini, INS Sharda",
      "Indian Coast Guard — ICGS Varuna, ICGS Samar, ICGS Abhinav, ICGS Lakshmi Bai",
      "Cochin Shipyard Ltd. & Goa Shipyard Ltd.",
      "Shipping Corporation of India, NIOT, Dredging Corporation of India",
      "Ocean Sparkle Ltd. (OSL Dredge 5, OSL Dredge IV)",
    ],
    images: ["/images/icgs-abhinav.jpg", "/images/icgs-c441.jpg", "/images/tug-balshil-refit.jpg", "/images/navy-tug-refit.jpg"],
  },
  {
    id: "general-engineering",
    title: "General Engineering",
    description:
      "Fabrication, machining, and heavy engineering work for marine, industrial, and government clients — from tail shafts and lock gates to pump and shutter fabrication.",
    highlights: [
      "Cochin Shipyard Ltd. — inclining ladders, racks, shutter fabrication",
      "Kerala Irrigation Department — lock gates, shutters, spillway works",
      "Kerala Water Authority — valve lid lifting works, Malampuzha Dam",
      "Naval Ship Repair Yard, Kochi",
      "Central Institute of Fisheries Technology (CIFT)",
    ],
    images: [],
  },
  {
    id: "general-services",
    title: "General Services",
    description:
      "Berthing, towing, crane hire, fresh water supply, and technical training support for vessels and marine engineering students.",
    highlights: [
      "Euro Tech Marine Academy — training for marine engineering students",
      "Ocean Sparkle Ltd. — dredger berthing services",
      "Indian Coast Guard — vessel berthing & technical support",
      "Dredging Corporation of India — loading, unloading, tug services",
      "Engineering colleges & universities — industrial visits and internships",
    ],
    images: [],
  },
];

export default function BusinessPage() {
  return (
    <main>
      <PageHero
        title="Our Business"
        subtitle="Four decades-strong lines of work across ship building, repair, engineering, and marine services."
        image="/images/wharf.jpg"
      />

      {BUSINESS_LINES.map((line, i) => (
        <section
          key={line.id}
          id={line.id}
          className={css({
            bg: i % 2 === 1 ? "gray.50" : "white",
            py: { base: "12", md: "16" },
          })}
        >
          <div className={css({ maxW: "6xl", mx: "auto", px: { base: "4", md: "8" } })}>
            <div className={grid({ columns: { base: 1, md: line.images.length ? 2 : 1 }, gap: "10", alignItems: "start" })}>
              <div>
                <h2 className={css({ fontFamily: "heading", fontSize: "2xl", fontWeight: "700", color: "brand.navy" })}>
                  {line.title}
                </h2>
                <p className={css({ mt: "3", color: "fg", lineHeight: "1.8" })}>{line.description}</p>
                <h3 className={css({ mt: "6", fontSize: "sm", fontWeight: "700", color: "brand.gold", textTransform: "uppercase", letterSpacing: "wide" })}>
                  Selected Work &amp; Clients
                </h3>
                <ul className={css({ mt: "3", display: "flex", flexDirection: "column", gap: "2" })}>
                  {line.highlights.map((h) => (
                    <li key={h} className={css({ fontSize: "sm", color: "fg", pl: "4", position: "relative" })}>
                      <span className={css({ position: "absolute", left: 0, color: "brand.gold" })}>—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              {line.images.length > 0 && (
                <div className={grid({ columns: 2, gap: "3" })}>
                  {line.images.map((src) => (
                    <div key={src} className={css({ position: "relative", aspectRatio: "4/3", borderRadius: "md", overflow: "hidden" })}>
                      <Image src={src} alt={line.title} fill className={css({ objectFit: "cover" })} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className={css({ bg: "brand.navy", color: "white" })}>
        <div
          className={flex({
            direction: { base: "column", md: "row" },
            align: "center",
            justify: "space-between",
            gap: "6",
            maxW: "7xl",
            mx: "auto",
            px: { base: "4", md: "8" },
            py: "12",
          })}
        >
          <h2 className={css({ fontFamily: "heading", fontSize: { base: "xl", md: "2xl" }, fontWeight: "700" })}>
            Discuss a new project or repair requirement
          </h2>
          <a
            href="/contact"
            className={css({
              bg: "brand.gold",
              color: "brand.navyDark",
              px: "6",
              py: "3",
              borderRadius: "sm",
              fontWeight: "700",
              flexShrink: 0,
            })}
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
