import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { RETHINK_CARBON } from "@/lib/industries-content";

/**
 * Keep the old path as an entry point, but always open Rethink Carbon in a new tab
 * instead of navigating away from Planetive in the same tab.
 */
export const Route = createFileRoute("/ecosystem/rethink-carbon")({
  component: RethinkCarbonExternalGate,
});

function RethinkCarbonExternalGate() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Prefer a real anchor click so the browser treats it as a new-tab navigation.
    linkRef.current?.click();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--n50)] px-6">
      <div className="max-w-md rounded-[28px] border border-n200 bg-white p-8 text-center shadow-[var(--shadow-soft)]">
        <p className="font-ui text-xl font-semibold text-forest">Opening Rethink Carbon</p>
        <p className="mt-3 text-sm leading-relaxed text-n600">
          Rethink Carbon opens in a new tab so you can keep browsing Planetive.
        </p>
        <a
          ref={linkRef}
          href={RETHINK_CARBON.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold btn-mint"
        >
          Continue to Rethink Carbon
        </a>
        <div className="mt-4">
          <Link to="/what-we-do" className="text-sm font-semibold text-canopy hover:text-mint">
            Back to ecosystem
          </Link>
        </div>
      </div>
    </main>
  );
}
