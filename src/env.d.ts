// Expand window to add theme support
interface Window {
  theme: {
    setTheme: (theme?: string) => void;
    getTheme: () => string;
    systemTheme: string;
    defaultTheme: string;
  };
}
