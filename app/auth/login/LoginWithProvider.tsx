'use client'
import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'


const LoginWithProvider = ({provider , currentUrl} : { provider : 'google' | 'facebook', currentUrl : string}) => {
    const supabase = createClient()
    const router = useRouter()
    const handleLoginWithProvider = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
          
            options: {
                redirectTo:  `${origin}/auth/callback`,
             
            },
          })
        
        if (error) {
            console.error('OAuth error:', error.message);
            toast.error('OAuth error:', {
                description : error.message
            })
        } else {
            router.push('/private')
        }
    }
  return (
    <Button type='button' onClick={handleLoginWithProvider} variant="outline" className="w-fit mx-auto">
    Login with {provider}
</Button>
  )
}

export default LoginWithProvider