import styles from './FAQ.module.css';
import { QuestionButton } from '../QuestionButton/QuestionButton.tsx';
import type { QuestionButtonProps } from '../QuestionButton/QuestionButton.tsx';
import { useTranslation } from 'react-i18next';

export interface FAQProps {
    buttonProps: QuestionButtonProps[];
    titleKey: string;
}

export function FAQ({ buttonProps, titleKey }: FAQProps) {
    const { t } = useTranslation();
    return (
    <div className={styles.faq_container}>
        <h2 className={styles.faq_title}>{t(titleKey ?? '')}</h2>
        <div className={styles.faq_content}>
            {buttonProps.map((button) => (
                <QuestionButton questionKey={button.questionKey} key={button.key} answerKey={button.answerKey} />
            ))}
        </div>
    </div>
  );
}