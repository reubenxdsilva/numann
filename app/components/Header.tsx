import Image from "next/image";

/**
 * Desktop Header — mirrors Figma node 1507:7517 (Home-Desktop-v3 > header).
 * 2 rows: promo banner (dark, 42px) + main nav (white, 66px) = 108px total.
 */
export default function Header() {
  return (
    <header className="w-full">
      {/* ---------- Promo banner ---------- */}
      <div
        className="flex h-[42px] w-full items-center justify-center gap-[var(--space-8)] bg-[var(--color-neutral-900)] px-[var(--space-16)] py-[var(--space-4)] text-white"
      >
        <p
          className="whitespace-nowrap font-sans text-[length:var(--font-size-300)] leading-[var(--line-height-400)] tracking-[var(--letter-spacing-tight)]"
        >
          Free Shipping on SuperBeets Advanced Heart Chews with CoQ10
        </p>
        <UnderlinedLabel>SHOP NOW</UnderlinedLabel>
      </div>

      {/* ---------- Main nav ---------- */}
      <div
        className="flex w-full items-center justify-between px-[var(--space-24)] py-[var(--space-16)]"
      >
        {/* Left: logo + primary nav */}
        <div className="flex items-end gap-[var(--space-36)]">
          <a href="/" aria-label="humann home" className="flex shrink-0 items-center">
            <Image
              src="/images/humann-logo-red.svg"
              alt="humann"
              width={139}
              height={24}
              priority
            />
          </a>
          <nav
            aria-label="Primary"
            className="flex items-center gap-[var(--space-28)] font-sans text-[length:var(--font-size-300)] leading-[var(--line-height-400)] tracking-[var(--letter-spacing-tight)] text-[color:var(--text-primary)]"
          >
            <a href="#" className="whitespace-nowrap">Shop by Product</a>
            <a href="#" className="whitespace-nowrap">Shop by Benefit</a>
            <a href="#" className="whitespace-nowrap">Our Science</a>
            <a href="#" className="whitespace-nowrap">The Humann System</a>
          </nav>
        </div>

        {/* Right: utility links */}
        <div className="flex items-center justify-end gap-[var(--space-20)]">
          <UnderlinedLabel tone="subdued">PROFESSIONAL</UnderlinedLabel>
          <UnderlinedLabel tone="subdued">SEARCH</UnderlinedLabel>
          <UnderlinedLabel tone="subdued">LOGIN</UnderlinedLabel>
          <UnderlinedLabel tone="subdued">CART</UnderlinedLabel>
        </div>
      </div>
    </header>
  );
}

/**
 * Uppercase label button with a 1px underline, used throughout the header.
 * Matches "button text" component with 70 Semibold (K) Uniforma at 14px.
 */
function UnderlinedLabel({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "subdued";
}) {
  const color = tone === "subdued" ? "var(--text-primary)" : "white";
  return (
    <button
      type="button"
      className="flex flex-col items-center justify-center gap-[var(--space-2)] py-[var(--space-8)]"
    >
      <span
        className="whitespace-nowrap font-label text-[length:var(--font-size-100)] font-semibold uppercase leading-[var(--line-height-100)] tracking-[var(--letter-spacing-wide)]"
        style={{ color }}
      >
        {children}
      </span>
      <span
        aria-hidden
        className="block h-px w-full"
        style={{ background: color }}
      />
    </button>
  );
}
