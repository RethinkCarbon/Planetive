import { createFileRoute, redirect } from "@tanstack/react-router";
import { RETHINK_CARBON } from "@/lib/industries-content";

/** Rethink Carbon lives on its own site — keep this path as a redirect for old links. */
export const Route = createFileRoute("/ecosystem/rethink-carbon")({
  beforeLoad: () => {
    throw redirect({ href: RETHINK_CARBON.url });
  },
});
