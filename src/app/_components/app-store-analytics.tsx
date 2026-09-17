"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

export function AppStoreAnalytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest<HTMLAnchorElement>(
        "a[data-app-store-link]",
      );

      if (!link) {
        return;
      }

      track("app_store_click", {
        placement: link.dataset.appStoreLink ?? "unknown",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
