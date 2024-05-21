import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClientLoginForm from './SignIn';
import SignUpForm from './Signup';
import ResetPass from './ResetPass';
export default function AuthTabs() {
  return (
    <Tabs
      defaultValue="signin"
      className="w-full sm:w-[400px] mx-auto my-4 min-h-screen"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Sign in</TabsTrigger>
        <TabsTrigger value="signup">Sign up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <ClientLoginForm />
      </TabsContent>
      <TabsContent value="signup">
        <SignUpForm />
      </TabsContent>
      <TabsContent value="reset">
        <ResetPass />
      </TabsContent>
      <TabsList className="bg-transparent p-0 ml-2">
        <TabsTrigger
          className="bg-transparent p-0 data-[state=active]:hidden"
          value="reset"
        >
          Forgot password?
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
