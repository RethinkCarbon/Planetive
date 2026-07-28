import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { isExternalNavLink, type NavLink } from "@/lib/site-nav-content";

type NavItemLinkProps = {
  item: Pick<NavLink, "to" | "external">;
  className?: string;
  onClick?: () => void;
  role?: string;
  "aria-current"?: "page" | undefined;
  children: ReactNode;
};

/** Renders an in-app Link or an external anchor for nav items. */
export function NavItemLink({
  item,
  className,
  onClick,
  role,
  "aria-current": ariaCurrent,
  children,
}: NavItemLinkProps) {
  if (isExternalNavLink(item)) {
    return (
      <a
        href={item.to}
        target="_blank"
        rel="noopener noreferrer"
        role={role}
        onClick={onClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={item.to} role={role} onClick={onClick} className={className} aria-current={ariaCurrent}>
      {children}
    </Link>
  );
}
