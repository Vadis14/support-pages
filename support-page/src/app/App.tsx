import styles from './App.module.css';
import { Form } from '../components/ui/Form/Form.tsx'
import { FormSendingContainer} from '../constants/FormProps.ts';
import { HeaderContainer } from '../constants/HeaderProps.ts';
import { Header } from '../components/ui/Header/Header.tsx';
import { Footer } from '../components/ui/Footer/Footer.tsx';
import { FAQ } from '../components/ui/FAQ/FAQ.tsx';
import { FAQContainer } from '../constants/FAQProps.ts';
import { FooterContainer } from '../constants/FooterProps.ts';

export function App() {

    return (
        <div className={styles.app_container}>
            <Header HeaderContainer={HeaderContainer.HeaderContainer}/>
            <Form labelKey={FormSendingContainer.labelKey} FormContainer={FormSendingContainer.FormContainer}/>
            <FAQ buttonProps={FAQContainer.buttonProps} titleKey={FAQContainer.titleKey}/>
            <Footer textKey={FooterContainer.textKey} />
        </div>
    )
}

