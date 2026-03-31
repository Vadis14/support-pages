import styles from './Input.module.css';
import type { UseFormRegister } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export interface InputProps {
    placeholderKey?: string;
    type: string ;
    name?: string;
    variant: 'input_standart' | 'input_massage' | 'input_file' | 'input_checkbox';
    required?: boolean;
    registration?: ReturnType<UseFormRegister<FieldValues>>;
};

    export function Input({ placeholderKey, type, name, variant, required, registration}: InputProps) {
        const { t } = useTranslation();
        const classes = `${[variant]}`;
        return (
            <input className={styles[classes]} type={type} placeholder={t(placeholderKey ?? '')} name={name} required={required} {...registration} />
        )
};


