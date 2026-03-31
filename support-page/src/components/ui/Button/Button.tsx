import styles from "./Button.module.css";
import { useTranslation } from "react-i18next";
export interface ButtonProps {
  textKey?: string;
  text?: string;
  type?: "submit" | "button";
  variant?:
    | "button_send"
    | "button_registration"
    | "button_login"
    | "button_faq";
  name?: string;
  key?: string;
  onClick?: () => void;
}

export function Button({
  textKey,
  text,
  type,
  variant,
  name,
  key,
  onClick,
}: ButtonProps) {
  const classes = `${[variant]}`;
  const { t } = useTranslation();
  return (
    <button
      type={type}
      className={styles[classes]}
      name={name}
      key={key}
      onClick={onClick}
    >
      {text ?? t(textKey ?? "")}
    </button>
  );
}
