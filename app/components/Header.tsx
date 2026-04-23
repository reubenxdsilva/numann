import Image from "next/image";
import humannLogo from "./humann-logo-red.svg";

/**
 * Desktop Header — Figma node 1507:7517 (Home-Desktop-v3 > header, 1440×108).
 *
 * Row 1 — promo banner (surface brand-inverse, 42px tall)
 * Row 2 — main nav (surface default, 66px tall, 24/16 padding)
 *
 * All visual values come from design.md tokens. No arbitrary numbers.
 */
export default function Header() {
  return (
    <header className="w-full">
      {/* ───────── Promo banner ───────── */}
      <div
        className="flex h-[42px] w-full items-center justify-center gap-[var(--space-8)] px-[var(--space-16)] py-[var(--space-4)]"
        style={{ background: "var(--primitive-color-neutral-900)" }}
      >
        <p
          className="font-sans whitespace-nowrap"
          style={{
            fontSize: "var(--font-body-secondary-l-size)",
            lineHeight: "var(--font-body-secondary-l-line-height)",
            letterSpacing:
              "var(--primitive-letter-spacing-letter-spacing-tight)",
            color: "var(--semantic-text-color-text-inverse)",
          }}
        >
          Free Shipping on SuperBeets Advanced Heart Chews with CoQ10
        </p>
        <UnderlinedLabel tone="inverse">SHOP NOW</UnderlinedLabel>
      </div>

      {/* ───────── Main nav ───────── */}
      <div className="flex w-full items-center justify-between px-[var(--space-24)] py-[var(--space-16)]">
        {/* Left: logo + primary nav */}
        <div className="flex items-end gap-[var(--space-36)]">
          <a href="/" aria-label="humann home" className="flex shrink-0 items-center">
            <Image
              src={humannLogo}
              alt="humann"
              width={139}
              height={24}
              priority
            />
          </a>
          <nav
            aria-label="Primary"
            className="font-sans flex items-center gap-[var(--space-28)]"
            style={{
              fontSize: "var(--font-body-secondary-l-size)",
              lineHeight: "var(--font-body-secondary-l-line-height)",
              letterSpacing:
                "var(--primitive-letter-spacing-letter-spacing-tight)",
              color: "var(--semantic-text-color-text-primary)",
            }}
          >
            <a href="#" className="whitespace-nowrap">Shop by Product</a>
            <a href="#" className="whitespace-nowrap">Shop by Benefit</a>
            <a href="#" className="whitespace-nowrap">Our Science</a>
            <a href="#" className="whitespace-nowrap">The Humann System</a>
          </nav>
        </div>

        {/* Right: utility links */}
        <div className="flex items-center justify-end gap-[var(--space-20)]">
          <UnderlinedLabel>PROFESSIONAL</UnderlinedLabel>
          <UnderlinedLabel>SEARCH</UnderlinedLabel>
          <UnderlinedLabel>LOGIN</UnderlinedLabel>
          <UnderlinedLabel>CART</UnderlinedLabel>
        </div>
      </div>
    </header>
  );
}

/**
 * Label button — Figma "button text" component.
 * Typography: Label/M — ( K ) Uniforma 400, 14px / 16px, letter-spacing 0.75px,
 * uppercase, with a 1px underline.
 */
function UnderlinedLabel({
  children,
  tone = "subdued",
}: {
  children: React.ReactNode;
  tone?: "subdued" | "inverse";
}) {
  const color =
    tone === "inverse"
      ? "var(--button-text-color-button-text-default)"
      : "var(--button-text-color-button-text-subdued)";
  return (
    <button
      type="button"
      className="font-label flex flex-col items-center justify-center gap-[var(--space-2)] py-[var(--space-8)]"
    >
      <span
        className="whitespace-nowrap uppercase"
        style={{
          fontSize: "var(--font-label-m-size)",
          lineHeight: "var(--font-label-m-line-height)",
          // Figma "button text" component is (K) Uniforma 70 Semibold. It isn't
          // a separate style in design.md's Label table (which tops out at 400),
          // but the shipped design calls for semibold — we use the primitive
          // font-weight token so it stays tied to the design system.
          fontWeight: "var(--primitive-weight-font-weight-semibold)",
          letterSpacing:
            "var(--primitive-letter-spacing-letter-spacing-wide)",
          color,
        }}
      >
        {children}
      </span>
      <span aria-hidden className="block h-px w-full" style={{ background: color }} />
    </button>
  );
}
