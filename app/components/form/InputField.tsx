import { ReactNode } from "react";
import * as React from "react";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Input } from "~/components/ui/Input";

type InputFieldProps = {
  name: string;
  label?: ReactNode;
  description?: string;
  readonly?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  name,
  label,
  description,
  ...rest
}: InputFieldProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input id={name} {...field} {...rest} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
