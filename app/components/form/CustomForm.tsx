import { Form, useActionData } from "@remix-run/react";
import * as React from "react";
import { RemixFormProps } from "@remix-run/react/dist/components";
import { createContext, useContext } from "react";

interface CustomFormProps
  extends RemixFormProps,
    React.RefAttributes<HTMLFormElement> {}

type FormContexType = {
  errors?: Record<string, string>;
};

const FormContext = createContext<FormContexType>({
  errors: undefined,
});

export function useFormErrors() {
  return useContext(FormContext);
}

export default function CustomForm<
  T extends { errors?: Record<string, string> }
>({ ...rest }: CustomFormProps) {
  const actionData = useActionData<T>();
  return (
    <FormContext.Provider value={{ ...actionData }}>
      <Form {...rest}>{rest.children}</Form>
    </FormContext.Provider>
  );
}
