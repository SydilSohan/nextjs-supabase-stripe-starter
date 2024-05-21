'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(userData : any) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email : userData.email,
   password : userData.password
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/login?status=failed')
  }
  console.log(error)
  revalidatePath('/', 'layout')
  if(userData.email === "mdsohan383@gmail.com") redirect('/account/dashboard')
  redirect('/login?status=failed')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
export const signOut = async () => { 
    const supabase = createClient()
    await supabase.auth.signOut()
    revalidatePath('/', 'layout')
    redirect('/')
}