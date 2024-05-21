'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { createClient } from '@/utils/supabase/client';
import SubmitButton from '@/components/global/SubmitButton';
import { toast } from 'sonner';
import { SignUpSchema } from '@/types/schemas';
import { Checkbox } from '../ui/checkbox';
import Link from 'next/link';

type SIgnUpFormType = z.infer<typeof SignUpSchema>;
export default function SignUpForm() {
  const form = useForm<SIgnUpFormType>({
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit = async (data: SIgnUpFormType) => {
    const supabase = createClient();
    const { data: signUpData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.first_name,
          last_name: data.last_name,
        },
      },
    });
    error ? toast.error(error.message) : toast.success('Signup successful!');
  };
  const [isPending, startTransition] = useTransition();

  const handleSignInOAuth = async (provider: 'google' | 'facebook') => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    });
    error ? toast.error(error.message) : toast.success('Signup successful!');
  };
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="John" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Doe" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirm_password"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormDescription>Confirm your password</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="acceptance"
                render={({ field }) => (
                  <FormItem className="w-full space-x-2">
                    <FormControl>
                      <Checkbox
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormLabel>
                      I accept the{' '}
                      <Link
                        className="underline"
                        href={'/terms-and-conditions'}
                      >
                        terms and conditions
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton
                isLoading={form.formState.isSubmitting}
                className="w-full"
              >
                Create an account
              </SubmitButton>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  onClick={() => handleSignInOAuth('google')}
                  type="button"
                  variant="outline"
                  className="w-full"
                >
                  Sign up with Google
                </Button>
              </div>
            </div>
          </form>
        </Form>
        {/*        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="#" className="underline">
            Sign in
          </Link>
        </div> */}
      </CardContent>
    </Card>
  );
}
