import type { FormProps } from '../components/ui/Form/Form.tsx';

export const FormSendingContainer: FormProps = {
    labelKey: "form.label",
    FormContainer: [
        {kind: "field", type: "text", placeholderKey: "form.name", name: "name", labelKey: "form.name", variant: "input_standart"},
        {kind: "field", type: "email", placeholderKey: "form.email", name: "email", labelKey: "form.email", variant: "input_standart"},
        {kind: "select", labelKey: "form.reason", name: "form.reason", variant: "select_reason", options: [
            {value: "1", textKey: "form.option1"},
            {value: "2", textKey: "form.option2"},
            {value: "3", textKey: "form.option3"}
        ]},
        {kind: "field", type: "text", placeholderKey: "form.message", name: "message", labelKey: "form.message", variant: "input_massage"},
        {kind: "field", type: "file", placeholderKey: "form.file", name: "file", labelKey: "form.file", variant: "input_file"},
        {kind: "field", type: "checkbox", name: "checkbox", labelKey: "form.checkbox", variant: "input_checkbox"},
        {kind: "button", type: "submit", textKey: "form.submit", variant: "button_send", name: "button"}
    ]
}
