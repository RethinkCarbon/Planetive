import { useCallback, useEffect, useRef, useState } from "react";
import type { NavMenuId } from "@/lib/site-nav-content";

const CLOSE_DELAY_MS = 180;

export function useNavHoverMenu() {
  const [openMenu, setOpenMenu] = useState<NavMenuId | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const open = useCallback(
    (menu: NavMenuId) => {
      clearCloseTimer();
      setOpenMenu(menu);
    },
    [clearCloseTimer],
  );

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY_MS);
  }, [clearCloseTimer]);

  const close = useCallback(() => {
    clearCloseTimer();
    setOpenMenu(null);
  }, [clearCloseTimer]);

  const hoverHandlers = useCallback(
    (menu: NavMenuId) => ({
      onMouseEnter: () => open(menu),
      onMouseLeave: scheduleClose,
    }),
    [open, scheduleClose],
  );

  useEffect(() => {
    if (!openMenu) return;
    const onScroll = () => close();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openMenu, close]);

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

  return { openMenu, open, scheduleClose, close, hoverHandlers };
};
