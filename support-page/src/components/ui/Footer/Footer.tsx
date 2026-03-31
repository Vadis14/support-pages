import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';
export interface FooterProps {
    textKey: string;
}

export function Footer({ textKey }: FooterProps) {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer_container}>
            <span className={styles.footer_text}>
                {t(textKey ?? '')}
            </span>
        </footer>
    );
}
