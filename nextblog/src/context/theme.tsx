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
  let storedTheme;
  if (typeof window !== "undefined" && window.localStorage) {
    storedTheme = localStorage.getItem("BlogTheme");
  }
  const [themeMode, setThemeMode] = useState(
    storedTheme ? storedTheme : "light"
  );

  console.log("theme",themeMode)

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("BlogTheme", "dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("BlogTheme", "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
    // document
    //   .querySelector("html")
    //   ?.classList.remove("dark-theme", "light-theme");
    // document.querySelector("html")?.classList.add(themeMode + "-theme");
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
