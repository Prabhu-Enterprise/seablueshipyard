import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { css } from "../../../styled-system/css";
import { grid } from "../../../styled-system/patterns";

export const metadata: Metadata = {
  title: "Facilities | Sea Blue Shipyard Ltd.",
  description:
    "Six licensed slipways, a 200m wharf, tug boats, workshops, and heavy engineering facilities at Sea Blue Shipyard, Vypin, Kochi.",
};

const FACILITIES = [
  {
    title: "Slipways",
    image: "/images/slipway.jpg",
    body: "Six licensed slipways. One mechanical slipway measuring 70m x 15m with 4 track rails, capable of hauling up vessels up to 800 tonnes DWT. The remaining slipways handle vessels of 70m x 20m using the conventional method — air bags, wooden sleepers, steel rollers, and capstans.",
  },
  {
    title: "Wharf",
    image: "/images/wharf.jpg",
    body: "200m of wharfage with a draft of 5–6m, offering berthing facilities for ships up to 120m long — the largest berth in Cochin after Cochin Shipyard Ltd. Comprises three licensed jetties with mooring bollards and rubber-covered steel piles, suited to afloat repairs and off-season shelter.",
  },
  {
    title: "Tug Boats",
    image: "/images/tug-boat.jpg",
    body: "M.B. Sea Blue, a twin-screw tug fitted with a towing hook of 3 tonne bollard pull, capable of carrying cargo up to 20 tonnes for delivery to vessels at outer anchorage or distant island areas.",
  },
];

const WORKSHOPS = [
  "Fabrication",
  "Painting",
  "Machine Shop",
  "Welding",
  "Carpentry",
  "Smithy",
];

const OTHER_FACILITIES = [
  { title: "Cranes", body: "Yard cranes for lifting, hauling, and vessel handling operations." },
  { title: "11kV Sub-station", body: "Dedicated electrical sub-station powering yard operations." },
  { title: "Fire & Rescue Station", body: "On-site fire and rescue capability for yard and vessel safety." },
  { title: "Storage & Warehousing", body: "Warehousing facilities for materials, spares, and equipment." },
];

export default function FacilitiesPage() {
  return (
    <main>
      <PageHero
        title="Facilities"
        subtitle="Purpose-built infrastructure for ship building, repair, and engineering — on 4 acres in Vypin, Kochi."
        image="/images/slipway.jpg"
      />

      <section className={css({ maxW: "6xl", mx: "auto", px: { base: "4", md: "8" }, py: { base: "12", md: "16" } })}>
        <div className={grid({ columns: { base: 1, md: 3 }, gap: "8" })}>
          {FACILITIES.map((f) => (
            <div key={f.title} className={css({ borderRadius: "md", overflow: "hidden", boxShadow: "sm", border: "1px solid", borderColor: "gray.200" })}>
              <div className={css({ position: "relative", aspectRatio: "4/3" })}>
                <Image src={f.image} alt={f.title} fill className={css({ objectFit: "cover" })} />
              </div>
              <div className={css({ p: "5" })}>
                <h2 className={css({ fontFamily: "heading", fontWeight: "700", fontSize: "lg", color: "brand.navy" })}>
                  {f.title}
                </h2>
                <p className={css({ mt: "2", fontSize: "sm", color: "muted", lineHeight: "1.7" })}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={css({ bg: "brand.blueLight", py: { base: "12", md: "16" } })}>
        <div className={css({ maxW: "6xl", mx: "auto", px: { base: "4", md: "8" } })}>
          <h2 className={css({ fontFamily: "heading", fontSize: "2xl", fontWeight: "700", color: "brand.navy", textAlign: "center" })}>
            Work Shops
          </h2>
          <p className={css({ mt: "3", textAlign: "center", color: "muted", maxW: "2xl", mx: "auto" })}>
            In-house workshop capability supporting every stage of build and repair.
          </p>
          <div className={grid({ columns: { base: 2, sm: 3, md: 6 }, gap: "4", mt: "8" })}>
            {WORKSHOPS.map((w) => (
              <div key={w} className={css({ bg: "white", borderRadius: "md", boxShadow: "sm", p: "4", textAlign: "center", fontWeight: "600", fontSize: "sm", color: "brand.navy" })}>
                {w}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={css({ maxW: "6xl", mx: "auto", px: { base: "4", md: "8" }, py: { base: "12", md: "16" } })}>
        <div className={grid({ columns: { base: 1, sm: 2, md: 4 }, gap: "6" })}>
          {OTHER_FACILITIES.map((f) => (
            <div key={f.title} className={css({ borderRadius: "md", border: "1px solid", borderColor: "gray.200", p: "5" })}>
              <h3 className={css({ fontWeight: "700", color: "brand.navy" })}>{f.title}</h3>
              <p className={css({ mt: "2", fontSize: "sm", color: "muted", lineHeight: "1.6" })}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
