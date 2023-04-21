import { InputProps } from "../Input";
import { Input } from "../Input";
import { Container } from "./styles";
import { Controller } from "react-hook-form";

type Props = InputProps & {
  id: string;
  control: any;
  error?: string;
};

export function HookFormInput({ control, id, error, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <Input {...rest} onChange={onChange} value={value} id={id} />
        )}
        name={id}
      />
      {error && <p>{error}</p>}
    </Container>
  );
}
