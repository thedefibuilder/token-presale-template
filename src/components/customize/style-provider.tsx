"use client";

import { type ReactNode } from "react";

import * as Portal from "@radix-ui/react-portal";
import { useActiveTheme } from "@/hooks/use-theme-config";
import { ThemeStyleSheet } from "@/components/customize/theme-style-sheet";
import { themeToStyles } from "@/lib/customize/theme-to-styles";

export const StyleProvider = ({ children }: { children: ReactNode }) => {
  const activeTheme = useActiveTheme();

  const style = themeToStyles(activeTheme);

  return (
    <div
      style={style}
      className="h-full w-full rounded-sm bg-transparent text-foreground"
    >
      {children}
      <Portal.Root asChild>
        <ThemeStyleSheet />
      </Portal.Root>
    </div>
  );
};
