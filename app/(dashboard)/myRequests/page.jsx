import React from 'react'
import TicketList from '../tickets/TicketList'
import { Suspense } from 'react'
import Loading from '../loading'

export default function MyRequests() {
  return (
    <main className='bg-green'>
    <nav>
      <div>
        <h2>My Requests</h2>
      </div>
      {/* <Link href="/tickets/create" className="ml-auto">
        <button className="btn-primary">New Ticket</button>
      </Link> */}
    </nav>
    <Suspense fallback={<Loading />}>
      <TicketList />
    </Suspense>
  </main>
  )
}
