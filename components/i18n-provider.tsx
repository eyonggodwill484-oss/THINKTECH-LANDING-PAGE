"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname.split("/")[1];
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [pathname]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}