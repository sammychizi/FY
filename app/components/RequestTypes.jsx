import React from 'react'
import Link from 'next/link'

export default function RequestTypes(props) {
  return (
    <Link href='/tickets/create'>
        <div
            className='w-20 h-6  bg-primary'
           >
           <h2 className='text-white px-2'>Results</h2>
        </div>
    </Link>
  )
}
