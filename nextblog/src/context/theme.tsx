"use client";
import { createContext, useContext, useState, useEffect } from "react";

type ThemeType = {
  themeMode: string;
  darkTheme: () => void;
  lightTheme: () => void;
};

export const ThemeContext = createContext<ThemeType>({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// export const ThemeProvider = ThemeContext.Provider;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
    document
      .querySelector("html")
      ?.classList.remove("dark-theme", "light-theme");
    document.querySelector("html")?.classList.add(themeMode + "-theme");
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
