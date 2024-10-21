import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import InputField from "~/components/form/InputField";
import CustomForm from "~/components/form/CustomForm";

export default function SignInForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
      </CardHeader>
      <CustomForm method="post">
        <CardContent className="space-y-2">
          <InputField name="username" label="Username" />
          <InputField name="password" label="Passwor" type="password" />
        </CardContent>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </CustomForm>
    </Card>
  );
}
