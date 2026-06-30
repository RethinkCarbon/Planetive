import { Fragment, type ReactNode } from "react";

const AMP_SPLIT = /(\s*&\s*)/;

/** Renders display copy with ampersands in Public Sans (hero-style), not Playfair. */
export function formatDisplayText(text: string): ReactNode {
  if (!text.includes("&")) return text;

  return text.split(AMP_SPLIT).map((part, index) => {
    if (/^\s*&\s*$/.test(part)) {
      return (
        <span key={index} className="display-amp font-ui font-semibold tracking-normal">
          {part}
        </span>
      );
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}
