import React from 'react'
import Link from 'next/link'

export default function RequestTypes(props) {
  return (
    <Link href={props.href}>
        <div
            className='m-4 btn-primary rounded-md'
           >
           <h3 className='text-white p-2'>{props.title}</h3>
        </div>
    </Link>
  )
}
