import type { FieldProps } from "../components/ui/Field/Field.tsx";
import type { SelectProps } from "../components/ui/Select/Select.tsx";
import type { ButtonProps } from "../components/ui/Button/Button.tsx";

export type FormItem =
  | ({ kind: "field" } & FieldProps)
  | ({ kind: "select" } & SelectProps)
  | ({ kind: "button" } & ButtonProps);
