import { createContext, useState } from "react";
import * as T from "./PreferencesProvider.types";
import { darkTheme, lightTheme } from "../../theme";

const ThemeContext = createContext<T.PreferencesContextType>(
  {} as T.PreferencesContextType,
);

export const PreferencesProvider = ({
  children,
}: T.PreferencesProviderProps) => {
  const [userPreferences, setUserPreferences] = useState<T.Preferences>({
    theme: "LIGHT",
    language: "EN",
    timezone: "UTC",
  });

  const setPreferences = (
    theme: T.Theme,
    language: T.Language,
    timezone: string,
  ) => {
    setUserPreferences({ theme, language, timezone });
  };

  const { theme, language, timezone } = userPreferences;

  return (
    <ThemeContext.Provider
      value={{ theme, language, timezone, setPreferences }}
    >
      <div className={theme === "LIGHT" ? lightTheme : darkTheme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
