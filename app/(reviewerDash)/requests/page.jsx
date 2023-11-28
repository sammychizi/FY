import { Suspense } from "react"
// import TicketList from "@/app/(dashboard)/tickets/TicketList"
import RequestList from "./RequestList"
import Loading from "@/app/(dashboard)/loading"
import Link from "next/link"

export const metadata = {
  title: 'Query Tracker | Tickets'
}

export default function Tickets() {
  return (
    <main>
      <nav>
        <div >
          <h2 className="flex justify-center">Requests To Review</h2>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <RequestList />
      </Suspense>
    </main>
  )
}