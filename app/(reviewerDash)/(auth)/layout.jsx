import React from 'react'
import Link from 'next/link'

export default function AuthenLayout({children}) {
  return (
    <>
        <nav>
            <h1>Query Tracker</h1>
            <Link href={'/reviewerLogin'}>Login</Link>
            <Link href={'/reviewerSignup'}>Sign up</Link>
        </nav>
        {children}
    </>
  )
}
