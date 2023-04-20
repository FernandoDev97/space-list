import {
  ComponentProps,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";
import { InputContainer, InputWrapper, Label } from "./styles";

export type InputProps = ComponentProps<typeof InputContainer> &
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    icon: ReactNode;
  };

export function Input({ label, icon, id, ...rest }: InputProps) {
  const [fucused, setFocused] = useState(false);

  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputContainer isFocused={fucused}>
        {icon}
        <input
          {...rest}
          id={id}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </InputContainer>
    </InputWrapper>
  );
}
