export type PreferencesProviderProps = {
  children: React.ReactNode;
};

export type Theme = "LIGHT" | "DARK";
export type Language = "EN" | "PT_BR";

export type Preferences = {
  theme: Theme;
  language: Language;
  timezone: string;
};

export type PreferencesContextType = {
  theme: Theme;
  language: Language;
  timezone: string;
  setPreferences: (theme: Theme, language: Language, timezone: string) => void;
};
