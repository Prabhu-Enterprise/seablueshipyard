"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
import { NAV_LINKS } from "@/lib/nav";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={css({
        position: "sticky",
        top: 0,
        zIndex: 50,
        bg: "brand.navyDark",
        color: "white",
        boxShadow: "md",
      })}
    >
      <div
        className={flex({
          align: "center",
          justify: "space-between",
          maxW: "7xl",
          mx: "auto",
          px: { base: "4", md: "8" },
          py: "3",
        })}
      >
        <Link
          href="/"
          className={flex({ align: "center", gap: "3" })}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Sea Blue Shipyard logo"
            width={44}
            height={44}
            priority
          />
          <span
            className={css({
              fontFamily: "heading",
              fontSize: { base: "sm", md: "lg" },
              fontWeight: "700",
              letterSpacing: "wide",
              lineHeight: "1.1",
            })}
          >
            Sea Blue
            <br />
            Shipyard Ltd.
          </span>
        </Link>

        <nav
          className={flex({
            display: { base: "none", lg: "flex" },
            align: "center",
            gap: "6",
          })}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={css({
                fontSize: "sm",
                fontWeight: "600",
                color: "gray.100",
                _hover: { color: "brand.gold" },
              })}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className={css({
            display: { base: "flex", lg: "none" },
            flexDirection: "column",
            gap: "1.5",
            p: "2",
          })}
        >
          <span className={css({ w: "6", h: "0.5", bg: "white" })} />
          <span className={css({ w: "6", h: "0.5", bg: "white" })} />
          <span className={css({ w: "6", h: "0.5", bg: "white" })} />
        </button>
      </div>

      {open && (
        <nav
          className={css({
            display: { lg: "none" },
            bg: "brand.navy",
            px: "4",
            py: "3",
          })}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={css({
                display: "block",
                py: "2.5",
                fontSize: "sm",
                fontWeight: "600",
                color: "gray.100",
                borderBottom: "1px solid",
                borderColor: "white/20",
                _hover: { color: "brand.gold" },
              })}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
