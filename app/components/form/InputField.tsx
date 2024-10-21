import { Label } from "~/components/ui/Label";
import { Input } from "~/components/ui/Input";
import * as React from "react";
import { useFormErrors } from "~/components/form/CustomForm";
import { FieldDescription, FieldError } from "~/components/form/Field";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  description?: string;
}

export default function InputField({
  label,
  description,
  name,
  ...rest
}: InputFieldProps) {
  const { errors } = useFormErrors();

  return (
    <>
      {label && <Label>{label}</Label>}
      <Input name={name} {...rest} />
      <FieldError>{errors?.[name]}</FieldError>
      <FieldDescription>{description}</FieldDescription>
    </>
  );
}
