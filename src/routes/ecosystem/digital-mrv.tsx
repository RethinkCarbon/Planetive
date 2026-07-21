import { createFileRoute, redirect } from "@tanstack/react-router";

/** Short alias — keeps old/mistyped links from 404ing. */
export const Route = createFileRoute("/ecosystem/digital-mrv")({
  beforeLoad: () => {
    throw redirect({ to: "/ecosystem/digital-mrv-platforms" });
  },
});
