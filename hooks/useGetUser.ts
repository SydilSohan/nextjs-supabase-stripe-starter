import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';

const useGetUser = () => {
  const [user, setUser] = useState<User>();
  const [authEvent, setAuthEvent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const supabase = createClient();
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setLoading(true);

        console.log(event, session);
        setAuthEvent(event);
        if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
          // setUser(session?.user);
        } else if (event === 'SIGNED_OUT') {
          // setUser(undefined);
        }

        setLoading(false);
      }
    );

    // Clean up the auth state change listener when the component unmounts
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        setUser(undefined);
      } else {
        setUser(data.user);
      }
      setLoading(false);
    };
    if (!user) fetchUser();
    return;
  }, [authEvent]);

  return { user, authEvent, loading };
};

export default useGetUser;
