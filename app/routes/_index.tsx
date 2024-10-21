import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/Tabs";
import SignInForm from "~/pages/login/SignInForm";
import SignUpForm from "~/pages/login/SignUpForm";
import { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  return {
    errors: {
      username: "Required",
    },
  };
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Tabs defaultValue="signin" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign in</TabsTrigger>
          <TabsTrigger value="signup">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SignInForm />
        </TabsContent>
        <TabsContent value="signup">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
