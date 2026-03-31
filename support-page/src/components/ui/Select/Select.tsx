import styles from './Select.module.css';
import { useTranslation } from 'react-i18next';
export interface SelectProps {
    labelKey?: string;
    options: {value: string, textKey: string}[] ;
    name: string;
    value?: string;
    variant: 'select_reason' | 'select_language' ;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select({ options, name, value, variant, labelKey, onChange }: SelectProps ) {
    const { t } = useTranslation();
    const classes = styles[variant];

        switch(variant) {
            case 'select_reason':
                return (
                    <label className={styles.select_container}>
                        <span className={styles.select_reason_label}>{t(labelKey ?? '')}</span>
                        <select name={name} value={value} className={classes} onChange={onChange}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {t(option.textKey)}
                                </option>
                            ))}
                        </select>
                    </label>
                );
            case 'select_language':
                return (
                        <select name={name} value={value} className={classes} onChange={onChange}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {t(option.textKey)}
                                </option>
                            ))}
                        </select>
                );
        }
}
