import React from 'react'
import Link from 'next/link'

export default function RequestSubmitted() {
  return (
    <main>
        <p>Your request has been submitted successfully</p>
        <Link href={'/myRequests'} className='btn-primary'>
            <button className='btn-primary'>See Submitted Requests</button>
        </Link>
    </main>
  )
}
