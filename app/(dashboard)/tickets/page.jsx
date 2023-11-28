import { Suspense } from "react"
import TicketList from "./TicketList"
import Loading from "../loading"
import Link from "next/link"

export const metadata = {
  title: 'Dojo Helpdesk | Tickets'
}

export default function Tickets() {
  return (
    <main>
      <nav>
        <div >
          <h2 className="flex justify-center">My Requests</h2>
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