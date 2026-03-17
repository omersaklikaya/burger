import { useLanguageContext } from "./LanguageContext";

export function useTranslations() {
  const { messages } = useLanguageContext();

  return (key: string) => {
    return messages[key] ?? key;
  };
}

