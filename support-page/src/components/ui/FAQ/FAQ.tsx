import styles from "./FAQ.module.css";
import { QuestionButton } from "../QuestionButton/QuestionButton.tsx";
import type { QuestionButtonProps } from "../QuestionButton/QuestionButton.tsx";

export interface FAQProps {
  buttonProps: QuestionButtonProps[];
  title: string;
}

export function FAQ({ buttonProps, title }: FAQProps) {
  return (
    <div className={styles.faq_container}>
      <h2 className={styles.faq_title}>{title}</h2>
      <div className={styles.faq_content}>
        {buttonProps.map((button) => (
          <QuestionButton
            question={button.question}
            key={button.key}
            answer={button.answer}
          />
        ))}
      </div>
    </div>
  );
}
