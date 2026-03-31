import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "ru",
  resources: {
    ru: {
      translation: {
        header: {
          language: {
            en: "English",
            ru: "Russian",
          },
          registration: "Регестрация",
          login: "Вход",
        },
        form: {
          label:
            "Пожалуйста, укажите всю необходимую информацию, чтобы мы могли быстро и эффективно решить вашу проблему",
          name: "Имя",
          email: "Почта",
          reason: "Причина обращения",
          message: "Сообщение",
          file: "Файл",
          checkbox:
            "Я даю свое согласие на обработку моих персональных данных для получения обратной связи в соответствии с Политикой обработки персональных данных",
          submit: "Отправить",
          option1: "Опция 1",
          option2: "Опция 2",
          option3: "Опция 3",
          placeholder: "Имя",
        },
        footer: {
          text: "Информация о компании:<br/>  1. Цифровые знаки (токены) (далее – токены) не являются законным платежным средством и не обеспечиваются государством.<br/><br/>  2. Совершение торговых операций с токенами имеет рискованный характер. Возможность получения прибыли неразрывно связана с риском получения убытков. Полученные прибыли в прошлом не гарантируют прибылей в будущем.<br/><br/>  3. Приобретение токенов может привести к полной потере денежных средств и иных объектов гражданских прав (инвестиций), переданных в обмен на токены (в том числе в результате волатильности стоимости токенов; технических сбоев (ошибок); совершения противоправных действий, включая хищение).<br/><br/>  4. В связи с тем, что отношение разных государств (их регуляторов) к сделкам (операциям) с токенами и подходы к их правовому регулированию в различных юрисдикциях отличаются, существует риск того, что в отдельных государствах договоры между клиентом и Компанией или отдельные их условия могут являться недействительными и (или) невыполнимыми.<br/><br/>  Контактная информация: info@whitebird.io",
        },
      },
    },
    en: {
      translation: {
        header: {
          language: {
            en: "English",
            ru: "Russian",
          },
          registration: "Registration",
          login: "Login",
        },
        form: {
          label:
            "Please provide all the necessary information so that we can quickly and effectively solve your problem",
          name: "Name",
          email: "Email",
          reason: "Reason for appeal",
          message: "Message",
          file: "File",
          checkbox:
            "I give my consent to the processing of my personal data for receiving feedback in accordance with the Personal Data Processing Policy",
          submit: "Send",
          option1: "Option 1",
          option2: "Option 2",
          option3: "Option 3",
        },
        faq: {
          title: "Frequently Asked Questions",
          question1: "What is the WHITEBIRD service?",
          answer1: "1",
          question2:
            "What is the difference between the WHITEBIRD crypto exchange and a regular crypto exchange?",
          answer2: "2",
          question3: "What payment cards do you work with?",
          answer3: "3",
          question4: "What is the minimum and maximum amount I can exchange?",
          answer4: "4",
          question5: "Why can I trust WHITEBIRD?",
          answer5: "5",
          question6: "Is KYC verification required?",
          answer6: "6",
        },
        footer: {
          text: "Company information:<br/> 1. Digital tokens (tokens) (hereinafter – tokens) are not a legal means of payment and are not guaranteed by the state.<br/><br/> 2. The performance of trading operations with tokens has a risky nature. The possibility of profit is closely linked to the risk of loss. Past profits do not guarantee future profits.<br/><br/> 3. The purchase of tokens can lead to the complete loss of money and other civil rights (investments) transferred in exchange for tokens (including as a result of the volatility of token prices; technical failures (errors); the commission of unlawful actions, including theft).<br/><br/> 4. Due to the fact that the approaches of different states (their regulators) to transactions (operations) with tokens and their regulatory approaches in different jurisdictions differ, there is a risk that in some states the agreements between the client and the Company or individual conditions thereof may be invalid and (or) unenforceable.<br/><br/> Contact information: info@whitebird.io",
        },
      },
    },
  },
});
export default i18n;
