import Link from "next/link";
import { css } from "../../styled-system/css";
import { grid } from "../../styled-system/patterns";
import { COMPANY, NAV_LINKS } from "@/lib/nav";

export function Footer() {
  return (
    <footer className={css({ bg: "brand.navyDark", color: "gray.300", mt: "auto" })}>
      <div
        className={grid({
          columns: { base: 1, md: 4 },
          gap: "8",
          maxW: "7xl",
          mx: "auto",
          px: { base: "4", md: "8" },
          py: "12",
        })}
      >
        <div>
          <h3 className={css({ color: "white", fontFamily: "heading", fontSize: "lg", mb: "3" })}>
            {COMPANY.name}
          </h3>
          <p className={css({ fontSize: "sm", lineHeight: "1.7" })}>
            An ISO 9001:2015 certified shipyard established in {COMPANY.founded}, serving the
            Indian Navy, Indian Coast Guard, and India&apos;s maritime industry from Kochi.
          </p>
        </div>

        <div>
          <h4 className={css({ color: "white", fontSize: "sm", fontWeight: "700", mb: "3", textTransform: "uppercase", letterSpacing: "wide" })}>
            Quick Links
          </h4>
          <ul className={css({ display: "flex", flexDirection: "column", gap: "2" })}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={css({ fontSize: "sm", _hover: { color: "brand.gold" } })}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={css({ color: "white", fontSize: "sm", fontWeight: "700", mb: "3", textTransform: "uppercase", letterSpacing: "wide" })}>
            Kochi (Head Office)
          </h4>
          <p className={css({ fontSize: "sm", lineHeight: "1.7" })}>
            {COMPANY.kochiAddress}
            <br />
            <a href={`tel:${COMPANY.kochiPhone}`} className={css({ _hover: { color: "brand.gold" } })}>
              {COMPANY.kochiPhone}
            </a>
            <br />
            <a href={`mailto:${COMPANY.kochiEmail}`} className={css({ _hover: { color: "brand.gold" } })}>
              {COMPANY.kochiEmail}
            </a>
          </p>
        </div>

        <div>
          <h4 className={css({ color: "white", fontSize: "sm", fontWeight: "700", mb: "3", textTransform: "uppercase", letterSpacing: "wide" })}>
            Goa Branch
          </h4>
          <p className={css({ fontSize: "sm", lineHeight: "1.7" })}>
            {COMPANY.goaAddress}
            <br />
            <a href={`tel:${COMPANY.goaPhone}`} className={css({ _hover: { color: "brand.gold" } })}>
              {COMPANY.goaPhone}
            </a>
            <br />
            <a href={`mailto:${COMPANY.goaEmail}`} className={css({ _hover: { color: "brand.gold" } })}>
              {COMPANY.goaEmail}
            </a>
          </p>
        </div>
      </div>

      <div
        className={css({
          borderTop: "1px solid",
          borderColor: "white/10",
          textAlign: "center",
          fontSize: "xs",
          color: "gray.500",
          py: "5",
        })}
      >
        © {new Date().getFullYear()} {COMPANY.name} All rights reserved.
      </div>
    </footer>
  );
}
