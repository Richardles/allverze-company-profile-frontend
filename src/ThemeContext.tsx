import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeCtx {
  theme: Theme;
  isDark: boolean;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: "dark",
  isDark: true,
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return (localStorage.getItem("allverze-theme") as Theme) || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("allverze-theme", theme);
    } catch {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === "dark", toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
