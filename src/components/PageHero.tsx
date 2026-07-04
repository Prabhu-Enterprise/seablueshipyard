import Image from "next/image";
import { css } from "../../styled-system/css";

export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <div
      className={css({
        position: "relative",
        color: "white",
        bg: "brand.navyDark",
        overflow: "hidden",
      })}
    >
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          className={css({ objectFit: "cover", opacity: 0.35 })}
        />
      )}
      <div
        className={css({
          position: "relative",
          maxW: "7xl",
          mx: "auto",
          px: { base: "4", md: "8" },
          py: { base: "14", md: "20" },
        })}
      >
        <h1
          className={css({
            fontFamily: "heading",
            fontSize: { base: "3xl", md: "5xl" },
            fontWeight: "700",
          })}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={css({
              mt: "3",
              fontSize: { base: "md", md: "lg" },
              color: "gray.200",
              maxW: "2xl",
            })}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
