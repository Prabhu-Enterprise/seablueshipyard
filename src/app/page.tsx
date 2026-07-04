import Image from "next/image";
import Link from "next/link";
import { css, cx } from "../../styled-system/css";
import { flex, grid } from "../../styled-system/patterns";
import { button, card } from "../../styled-system/recipes";

const STATS = [
  { value: "2003", label: "Established" },
  { value: "4 acres", label: "Yard in Vypin, Kochi" },
  { value: "6", label: "Licensed slipways" },
  { value: "200m", label: "Wharf length" },
];

const BUSINESS_LINES = [
  {
    title: "Ship Building",
    body: "New-build vessels including survey launches, pilot and mooring boats, and workboats.",
  },
  {
    title: "Ship Repair",
    body: "Dry-dock, afloat, and offshore repair for the Indian Navy, Coast Guard, and commercial fleets.",
  },
  {
    title: "General Engineering",
    body: "Fabrication, machining, and heavy engineering for marine and industrial clients.",
  },
  {
    title: "General Services",
    body: "Berthing, towing, crane hire, and technical training for the marine industry.",
  },
];

const NOTABLE_CLIENTS = [
  "Indian Navy",
  "Indian Coast Guard",
  "Cochin Shipyard Ltd.",
  "Goa Shipyard Ltd.",
  "Shipping Corporation of India",
  "Dredging Corporation of India",
  "NIOT",
  "Ocean Sparkle Ltd.",
];

export default function Home() {
  return (
    <main>
      <section
        className={css({
          position: "relative",
          color: "white",
          bg: "brand.navyDark",
          overflow: "hidden",
        })}
      >
        <Image
          src="/images/business-hero.jpg"
          alt="Vessel undergoing repair at Sea Blue Shipyard"
          fill
          priority
          className={css({ objectFit: "cover", opacity: 0.4 })}
        />
        <div
          className={css({
            position: "relative",
            maxW: "7xl",
            mx: "auto",
            px: { base: "4", md: "8" },
            py: { base: "20", md: "32" },
          })}
        >
          <h1
            className={css({
              fontFamily: "heading",
              fontSize: { base: "3xl", md: "6xl" },
              fontWeight: "700",
              maxW: "3xl",
              lineHeight: "1.1",
            })}
          >
            Building and repairing India&apos;s fleet since 2003
          </h1>
          <p
            className={css({
              mt: "5",
              fontSize: { base: "md", md: "xl" },
              color: "gray.200",
              maxW: "2xl",
            })}
          >
            An ISO 9001:2015 certified shipyard in Kochi, trusted by the Indian Navy, Indian
            Coast Guard, and India&apos;s maritime industry for ship building, repair, and
            engineering services.
          </p>
          <div className={flex({ gap: "4", mt: "8", flexWrap: "wrap" })}>
            <Link href="/contact" className={button({ visual: "solid", size: "lg" })}>
              Contact Us
            </Link>
            <Link href="/business" className={button({ visual: "outline", size: "lg" })}>
              Our Business
            </Link>
          </div>
        </div>
      </section>

      <section className={css({ bg: "brand.blueLight" })}>
        <div
          className={grid({
            columns: { base: 2, md: 4 },
            gap: "6",
            maxW: "7xl",
            mx: "auto",
            px: { base: "4", md: "8" },
            py: "10",
          })}
        >
          {STATS.map((s) => (
            <div key={s.label} className={css({ textAlign: "center" })}>
              <div
                className={css({
                  fontFamily: "heading",
                  fontSize: { base: "2xl", md: "4xl" },
                  fontWeight: "700",
                  color: "brand.navy",
                })}
              >
                {s.value}
              </div>
              <div className={css({ fontSize: "sm", color: "muted", mt: "1" })}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={css({
          maxW: "7xl",
          mx: "auto",
          px: { base: "4", md: "8" },
          py: { base: "12", md: "20" },
        })}
      >
        <div className={grid({ columns: { base: 1, md: 2 }, gap: "12", alignItems: "center" })}>
          <div>
            <h2
              className={css({
                fontFamily: "heading",
                fontSize: { base: "2xl", md: "3xl" },
                fontWeight: "700",
                color: "brand.navy",
              })}
            >
              About Sea Blue Shipyard
            </h2>
            <p className={css({ mt: "4", color: "fg", lineHeight: "1.8" })}>
              Sea Blue Shipyard Ltd. is an ISO 9001:2015 certified shipyard based in Kochi,
              established in 2003. Built on 4 acres of land in Vypin, our yard operates six
              licensed slipways for hauling and launching vessels, and a 200m wharf for afloat
              repairs of ships up to 120 metres long.
            </p>
            <p className={css({ mt: "4", color: "fg", lineHeight: "1.8" })}>
              Located directly opposite the Vallarpadam International Container Transshipment
              Terminal, we are within 3km of Cochin Shipyard Ltd., Cochin Port Trust, and the
              International Ship Repair Complex — with a branch in Goa serving Goa Shipyard Ltd.
              since 2009.
            </p>
            <Link
              href="/about"
              className={cx(css({ display: "inline-block", mt: "6" }), button({ visual: "ghost" }))}
            >
              Learn More
            </Link>
          </div>
          <div className={css({ position: "relative", aspectRatio: "4/3", borderRadius: "md", overflow: "hidden" })}>
            <Image
              src="/images/location-map.jpg"
              alt="Sea Blue Shipyard location, Vypin, Kochi"
              fill
              className={css({ objectFit: "cover" })}
            />
          </div>
        </div>
      </section>

      <section className={css({ bg: "gray.50", py: { base: "12", md: "20" } })}>
        <div className={css({ maxW: "7xl", mx: "auto", px: { base: "4", md: "8" } })}>
          <h2
            className={css({
              fontFamily: "heading",
              fontSize: { base: "2xl", md: "3xl" },
              fontWeight: "700",
              color: "brand.navy",
              textAlign: "center",
            })}
          >
            Our Business
          </h2>
          <div className={grid({ columns: { base: 1, md: 2, lg: 4 }, gap: "6", mt: "10" })}>
            {BUSINESS_LINES.map((line) => (
              <div key={line.title} className={card()}>
                <div className={css({ p: "6" })}>
                  <h3
                    className={css({
                      fontFamily: "heading",
                      fontSize: "lg",
                      fontWeight: "700",
                      color: "brand.navy",
                    })}
                  >
                    {line.title}
                  </h3>
                  <p className={css({ mt: "2", fontSize: "sm", color: "muted", lineHeight: "1.6" })}>
                    {line.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={css({
          maxW: "7xl",
          mx: "auto",
          px: { base: "4", md: "8" },
          py: { base: "12", md: "16" },
          textAlign: "center",
        })}
      >
        <h2
          className={css({
            fontSize: "sm",
            fontWeight: "700",
            color: "muted",
            textTransform: "uppercase",
            letterSpacing: "wide",
          })}
        >
          Trusted By
        </h2>
        <div
          className={flex({
            flexWrap: "wrap",
            justify: "center",
            gap: { base: "4", md: "8" },
            mt: "6",
          })}
        >
          {NOTABLE_CLIENTS.map((client) => (
            <span
              key={client}
              className={css({
                fontFamily: "heading",
                fontSize: { base: "sm", md: "md" },
                color: "brand.navy",
                fontWeight: "600",
              })}
            >
              {client}
            </span>
          ))}
        </div>
      </section>

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
            Have a project or vessel requiring service?
          </h2>
          <Link
            href="/contact"
            className={cx(button({ visual: "solid", size: "lg" }), css({ flexShrink: 0 }))}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
