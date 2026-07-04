import { css } from "../../styled-system/css";

export function DocumentList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className={css({ display: "flex", flexDirection: "column", gap: "1" })}>
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "2",
              py: "2.5",
              fontSize: "sm",
              color: "brand.navy",
              borderBottom: "1px solid",
              borderColor: "gray.100",
              _hover: { color: "brand.blue" },
            })}
          >
            <span className={css({ color: "brand.gold", fontWeight: "700" })}>PDF</span>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
