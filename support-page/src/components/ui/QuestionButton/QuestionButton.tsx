import { Button } from "../Button/Button.tsx";
import { useQBHook } from "../../../hook/QBHook.tsx";
export interface QuestionButtonProps {
  question: string;
  key: string;
  answer: string;
}

export function QuestionButton({ question, key, answer }: QuestionButtonProps) {
  const { isOpen, handleClick } = useQBHook();
  return (
    <>
      <Button
        text={question}
        variant="button_faq"
        key={key}
        type="button"
        onClick={handleClick}
      />
      {isOpen && (
        <div>
          <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </>
  );
}
