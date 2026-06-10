import { useState } from "react";
import { ECOSYSTEM_PILLARS } from "@/lib/what-we-do-content";

export function useEcosystemSelection(initialId = ECOSYSTEM_PILLARS[0].id) {
  const [activeId, setActiveId] = useState(initialId);
  const active = ECOSYSTEM_PILLARS.find((p) => p.id === activeId) ?? ECOSYSTEM_PILLARS[0];
  return { activeId, setActiveId, active };
}
