"use client";
import { useSetThemeConfig } from "@/hooks/use-theme-config";
import Link from "next/link";

export const Random = () => {
  const setThemeConfig = useSetThemeConfig();

  return (
    <Link
      href="/"
      onClick={async () => {
        const createThemeConfig = (
          await import("@/lib/customize/create-theme-config")
        ).createThemeConfig;

        setThemeConfig(createThemeConfig());
      }}
      className="flex h-8 items-center gap-2 px-6 py-1.5 text-xs"
      scroll={false}
    >
      Randomize
    </Link>
  );
};
