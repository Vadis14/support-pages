import styles from "./Header.module.css";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";
import type { HeaderItem } from "../../../type/Header.ts";
import { useTranslation } from "react-i18next";

export interface HeaderProps {
  HeaderContainer: HeaderItem[];
}

export function Header({ HeaderContainer }: HeaderProps) {
  const { i18n } = useTranslation();
  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <header className={styles.header}>
      {HeaderContainer.map((item) => {
        switch (item.kind) {
          case "button":
            return <Button textKey={item.textKey} variant={item.variant} />;
          case "select":
            return (
              <Select
                options={item.options.map((option) => ({
                  value: option.value,
                  textKey: option.textKey,
                }))}
                name={item.name}
                value={i18n.language}
                variant={item.variant}
                onChange={handleChangeLanguage}
              />
            );
        }
      })}
    </header>
  );
}
