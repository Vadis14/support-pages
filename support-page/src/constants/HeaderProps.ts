import type { HeaderProps } from '../components/ui/Header/Header.tsx';

export const HeaderContainer: HeaderProps = {
    HeaderContainer: [
        {kind: 'select', name: 'Select', variant: 'select_language', options: [{value: 'ru', textKey: 'header.language.ru'}, {value: 'en', textKey: 'header.language.en'}] },
        {kind: 'button', textKey: 'header.registration', variant: 'button_registration'},
        {kind: 'button', textKey: 'header.login', variant: 'button_login'},
    ]
}