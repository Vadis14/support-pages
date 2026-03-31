import { Field } from "../Field/Field.tsx";
import { Button } from "../Button/Button.tsx";
import styles from "./Form.module.css";
import { Select } from "../Select/Select.tsx";
import type { FormItem } from "../../../type/Form.ts";
import { validationSchema } from "../../../validation/ValidationForm.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
type FormValues = z.infer<typeof validationSchema>;

const isSchemaFieldName = (name: string): name is keyof FormValues =>
  name === "name" ||
  name === "email" ||
  name === "message" ||
  name === "checkbox";

export interface FormProps {
  FormContainer: FormItem[];
  labelKey: string;
}

export function Form({ FormContainer, labelKey }: FormProps) {
  const { t } = useTranslation();
  const form = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      checkbox: false,
    },
  });
  const onSubmit = (data: z.infer<typeof validationSchema>) => {
    console.log("Form submitted:", data);
  };
  console.log(form.formState.errors);

  return (
    <form
      className={styles.form_container}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <h1 className={styles.form_label}>{t(labelKey ?? "")}</h1>
      <div className={styles.form_container_fields}>
        {FormContainer.map((item) => {
          switch (item.kind) {
            case "field":
              return (
                <div key={item.name}>
                  <Field
                    placeholderKey={item.placeholderKey}
                    type={item.type}
                    name={item.name}
                    labelKey={item.labelKey}
                    variant={item.variant}
                    required={item.required}
                    registration={
                      isSchemaFieldName(item.name)
                        ? form.register(item.name)
                        : undefined
                    }
                  />
                  {item.name === "name" &&
                    form.formState.errors.name?.message && (
                      <p className={styles.form_error}>
                        {String(form.formState.errors.name.message)}
                      </p>
                    )}
                  {item.name === "email" &&
                    form.formState.errors.email?.message && (
                      <p className={styles.form_error}>
                        {String(form.formState.errors.email.message)}
                      </p>
                    )}
                  {item.name === "message" &&
                    form.formState.errors.message?.message && (
                      <p className={styles.form_error}>
                        {String(form.formState.errors.message.message)}
                      </p>
                    )}
                  {item.name === "checkbox" &&
                    form.formState.errors.checkbox?.message && (
                      <p className={styles.form_error}>
                        {String(form.formState.errors.checkbox.message)}
                      </p>
                    )}
                </div>
              );
            case "select":
              return (
                <Select
                  key={item.name}
                  options={item.options.map((option) => ({
                    value: option.value,
                    textKey: option.textKey,
                  }))}
                  name={item.name}
                  value={item.value}
                  variant={item.variant}
                  labelKey={item.labelKey}
                />
              );
            case "button":
              return (
                <Button
                  key={item.key}
                  type={item.type}
                  textKey={item.textKey}
                  name={item.name}
                />
              );
          }
        })}
      </div>
    </form>
  );
}
