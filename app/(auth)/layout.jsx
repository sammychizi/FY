import Link from "next/link"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'


export const metadata = {
  title: 'Query Tracker',
  description: 'Generated by Samantha C',
}

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (data.session) {
    redirect('/')
  }

  return (
    <>
      <nav>
        <h1>Query Tracker</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  )
}