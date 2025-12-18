"use client";

import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Map", href: "#map" },
  { label: "Source", href: "https://github.com/Fadhail/ctf-gis" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div>Logo</div>
          <div className="leading-tight">
            <p className="text-base font-semibold">Cyber Map</p>
          </div>
        </Link>

        <nav className="flex flex-1 items-center gap-4 overflow-x-auto text-sm font-medium md:justify-center">
          <p className="text-muted-foreground transition hover:text-foreground">
            Malas
          </p>
        </nav>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-foreground">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Live
          </span>
          <a
            href="#map"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:shadow-md"
          >
            Open Map
          </a>
        </div>
      </div>
    </header>
  );
}
