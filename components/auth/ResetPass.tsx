'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import { createClient } from '@/utils/supabase/client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import SubmitButton from '../global/SubmitButton';
const schema = z.object({
  email: z.string().email(),
});
type SchemType = z.infer<typeof schema>;
export default function ResetPass({ currentUrl }: { currentUrl?: string }) {
  const form = useForm<SchemType>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();

  const onSubmit = async (data: SchemType) => {
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset`,
    });
    error
      ? toast.error('Error', {
          description: error.message,
        })
      : toast.success('Success', {
          description: 'Sent email',
        });
    router.refresh();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-2">
        <Card className="m-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Reset Password</CardTitle>
            <CardDescription>Enter email to reset password.</CardDescription>
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

              <SubmitButton isLoading={form.formState.isSubmitting}>
                Send Recovery Email
              </SubmitButton>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
