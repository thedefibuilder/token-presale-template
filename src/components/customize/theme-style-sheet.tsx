"use client";

import { useThemeConfig } from "@/hooks/use-theme-config";
import { themeToStyles } from "@/lib/customize/theme-to-styles";
import { useMemo } from "react";

// This weird approach is necessary to also style the portaled components
export const ThemeStyleSheet = () => {
  const config = useThemeConfig();

  const style = useMemo(() => {
    const styles = {
      light: themeToStyles(config.light),
      dark: themeToStyles(config.dark),
    };

    const lightStyles = Object.entries(styles.light)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n");

    const darkStyles = Object.entries(styles.dark)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n");

    return `
    .customizable {
      ${lightStyles}
    }
    
    html.dark .customizable {
      ${darkStyles}
    }`;
  }, [config]);

  return <style dangerouslySetInnerHTML={{ __html: style }} />;
};
