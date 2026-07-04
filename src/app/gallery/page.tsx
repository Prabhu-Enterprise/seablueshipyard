import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { css } from "../../../styled-system/css";
import { grid } from "../../../styled-system/patterns";

export const metadata: Metadata = {
  title: "Gallery | Sea Blue Shipyard Ltd.",
  description: "Photos of vessels, facilities, and completed projects at Sea Blue Shipyard, Kochi.",
};

const PHOTOS = [
  { src: "/images/icgs-abhinav.jpg", caption: "Short refit of ICGS Abhinav at SBSL slipway" },
  { src: "/images/icgs-c441.jpg", caption: "ERDD of ICGS C-441 by tandem crane lifting" },
  { src: "/images/tug-balshil-refit.jpg", caption: "Tug SRP Balshil under major dry-dock refit" },
  { src: "/images/navy-tug-refit.jpg", caption: "Short refit of BPT Bahadur tug, Indian Navy" },
  { src: "/images/mv-jalaprayog.jpg", caption: "MV Jalaprayog for NPOL Kulamavu" },
  { src: "/images/damage-control-training.jpg", caption: "Damage control training facility at Naval Base Kochi" },
  { src: "/images/ship-building-1.jpg", caption: "15.50m Survey Launch — Hydrographic Survey Wing, Govt. of Kerala" },
  { src: "/images/ship-building-2.jpg", caption: "17m Pilot cum Mooring Boat for Sparkle Port Services Ltd." },
  { src: "/images/ship-building-3.jpg", caption: "Vessel construction at Sea Blue Shipyard" },
  { src: "/images/slipway-2.jpg", caption: "Vessel hauled up on slipway" },
  { src: "/images/wharf.jpg", caption: "SBSL wharf" },
  { src: "/images/tug-boat.jpg", caption: "M.B. Sea Blue tug boat" },
];

export default function GalleryPage() {
  return (
    <main>
      <PageHero title="Gallery" subtitle="Vessels, facilities, and projects from our yard." image="/images/business-hero.jpg" />

      <section className={css({ maxW: "7xl", mx: "auto", px: { base: "4", md: "8" }, py: { base: "12", md: "16" } })}>
        <div className={grid({ columns: { base: 1, sm: 2, lg: 3 }, gap: "6" })}>
          {PHOTOS.map((p) => (
            <figure key={p.src} className={css({ borderRadius: "md", overflow: "hidden", boxShadow: "sm", border: "1px solid", borderColor: "gray.200" })}>
              <div className={css({ position: "relative", aspectRatio: "4/3" })}>
                <Image src={p.src} alt={p.caption} fill className={css({ objectFit: "cover" })} />
              </div>
              <figcaption className={css({ p: "3", fontSize: "xs", color: "muted" })}>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
