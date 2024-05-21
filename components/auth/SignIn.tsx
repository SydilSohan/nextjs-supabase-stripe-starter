'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
// import LoginWithProvider from './LoginWithProvider';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import SubmitButton from '../global/SubmitButton';
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long',
  }),
});
type SchemType = z.infer<typeof schema>;
export default function ClientLoginForm({
  currentUrl,
}: {
  currentUrl?: string;
}) {
  const form = useForm<SchemType>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();

  const onSubmit = async (data: SchemType) => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    error
      ? toast.error('Error', {
          description: error.message,
        })
      : toast.success('Success', {
          description: 'Logged in',
        });
    router.refresh();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
        <Card className="m-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Login</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                  Enter strong password
                </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton isLoading={form.formState.isSubmitting}>
                Login
              </SubmitButton>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
