import { Input } from "@nextui-org/input";
import { useController } from "react-hook-form";

type InputProps = {
  label: string;
  name: string;
  control: any;
  className?: string;
};

export default function InputField({
  label,
  name,
  control,
  className,
}: InputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Input
      isRequired
      className={className}
      errorMessage={error?.message}
      isInvalid={!!error}
      label={label}
      labelPlacement="inside"
      name={field.name}
      value={field.value}
      variant="bordered"
      onValueChange={field.onChange}
    />
  );
}
