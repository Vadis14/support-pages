import styles from './Field.module.css';
import { Input } from '../Input/Input';
import type { InputVariant } from '../../../type/Field';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export interface FieldProps {
    labelKey?: string;
    placeholderKey?: string;
    type: string;
    name: string;
    variant: InputVariant;
    required?: boolean;
    registration?: UseFormRegisterReturn;
 }

export function Field({ labelKey, placeholderKey, type, name, variant, required, registration }: FieldProps) {
    const labelClass = variant === 'input_checkbox' ? styles.input_checkbox_label : styles.field_label;
    const { t } = useTranslation();
    return (
        <label className={styles.field_container}>
            <span className={labelClass}>{t(labelKey ?? '')}</span>
            <Input variant={variant} placeholderKey={placeholderKey} type={type} required={required} name={name } registration={registration} />
        </label>
    );
}