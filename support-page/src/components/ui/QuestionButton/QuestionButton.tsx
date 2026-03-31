import { Button } from '../Button/Button.tsx';
import { useQBHook } from '../../../hook/QBHook.tsx';
import { useTranslation } from 'react-i18next';
export interface QuestionButtonProps {
    questionKey: string;
    key: string;
    answerKey: string;
}

export function QuestionButton({ questionKey, key, answerKey }: QuestionButtonProps) {
    const { isOpen, handleClick } = useQBHook();
    const { t } = useTranslation();
    return (
        <>
        <Button textKey={questionKey} variant="button_faq" key={key} type="button" onClick={handleClick} />
            {isOpen && (
                <div>
                    <p>{t(answerKey ?? '')}</p>
                </div>
            )}
        </>
    );
}