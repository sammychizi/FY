import React from 'react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import LogoutButton from '@/app/components/LogOutBtn'

export default async function ReviewerDash() {
  const supabase = createServerComponentClient({cookies})
  const {data} = await supabase.auth.getSession()
  return (
    <>
        <nav>
          <h1 className='mr-auto'>QueryTracker</h1>
          <span>Welcome</span>
          <LogoutButton/>
          
        </nav>
        <Link href='/requests' className='flex justify-center'>
            <button className='btn-primary'>View Available Requests</button>
        </Link>
    </>
  )
}
