import { useState, useEffect } from "react";
import { getFAQ } from "../api/GetFAQ.tsx";

export function useFAQHook() {
  const [FAQItems, setFAQItems] = useState<
    { question: string; answer: string }[]
  >([]);
  useEffect(() => {
    getFAQ().then((questions) => {
      setFAQItems(
        questions.questions.map(
          (question: { caption: string; text: string }) => ({
            question: question.caption,
            answer: question.text,
          }),
        ),
      );
    });
  }, []);
  return { FAQItems };
}
