import React from 'react'
import Link from 'next/link'

export default function VerifyEmail() {
  return (
    <main className='text-center'>
        <h2>Thank you for registering</h2>
        <p>You can now log in to the platform:</p>
        <Link href='/reviewerLogin'>
            <button className='btn-primary'>Log In</button>
        </Link>
    </main>
  )
}
