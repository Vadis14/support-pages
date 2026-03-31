
import type { ButtonProps } from '../components/ui/Button/Button.tsx';
import type { SelectProps } from '../components/ui/Select/Select.tsx';

export type HeaderItem = ({kind: 'button'} & ButtonProps) | ({kind: 'select'} & SelectProps);