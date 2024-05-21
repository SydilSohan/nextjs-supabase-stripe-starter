import SecurityForm from '@/app/account/(accountRoutes)/settings/SecurityForm';
import ResetPass from '@/components/auth/ResetPass';
import { Params } from '@/types/types';
import { createClient } from '@/utils/supabase/server';
import React from 'react';

type Props = {};

const page = async ({ searchParams }: Params) => {
  return (
    <div className="max-w-screen-sm w-full mx-auto">
      <SecurityForm redirectUrl={'/account/settings'} />;
    </div>
  );
};

export default page;
