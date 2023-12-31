import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../components/questionLogo.png'


export const metadata = {
    title: 'Query Tracker',
    description: 'Generated by Samantha C',
  }

export default function Reviwerlayout( {children}) {
    return (
        <>
        <nav>
            <Image
            src={Logo}
            alt='Query Tracker'
            width={40}
            placeholder='blur'
            quality={100}
            />
            <h1>Sup Query Tracker</h1>
            <Link  href="/reviewerDash">My Dashboard</Link>
            <Link  href="/requests" className="mr-auto">Requests</Link> 
        </nav>
        {children}
      </>
    )
  }
