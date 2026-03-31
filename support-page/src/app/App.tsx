import styles from "./App.module.css";
import { Form } from "../components/ui/Form/Form.tsx";
import { FormSendingContainer } from "../constants/FormProps.ts";
import { HeaderContainer } from "../constants/HeaderProps.ts";
import { Header } from "../components/ui/Header/Header.tsx";
import { Footer } from "../components/ui/Footer/Footer.tsx";
import { FAQ } from "../components/ui/FAQ/FAQ.tsx";
import { FooterContainer } from "../constants/FooterProps.ts";
import { useFAQHook } from "../hook/FAQHook.tsx";

export function App() {
  const { FAQItems } = useFAQHook();

  return (
    <div className={styles.app_container}>
      <Header HeaderContainer={HeaderContainer.HeaderContainer} />
      <Form
        labelKey={FormSendingContainer.labelKey}
        FormContainer={FormSendingContainer.FormContainer}
      />
      <FAQ
        buttonProps={FAQItems.map(
          (item: { question: string; answer: string }) => ({
            question: item.question,
            answer: item.answer,
            key: item.question,
          }),
        )}
        title="Часто задаваемые вопросы"
      />
      <Footer textKey={FooterContainer.textKey} />
    </div>
  );
}
