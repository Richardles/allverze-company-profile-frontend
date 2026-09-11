import { createContext, useContext } from "react";

export type Theme = "dark" | "light";

export interface ThemeState {
  theme: Theme;
  isDark: boolean;
  toggle: () => void;
}

export const THEME_STORAGE_KEY = "allverze-theme";

export const ThemeContext = createContext<ThemeState>({
  theme: "dark",
  isDark: true,
  toggle: () => {},
});

export const useTheme = () => useContext(ThemeContext);