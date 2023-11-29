import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Welcome to our request submission platform! We are thrilled to have you on board. Here, you can effortlessly submit your requests, and our dedicated team is ready to assist you every step of the way. Feel free to navigate through the user-friendly interface and begin streamlining your request process today.</p>

      {/* <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div> */}
      <div className="flex justify-center items-center p-8">
        <Link href='/requestCategories' className="m-8">
            <button className="btn-primary">New Request</button>
        </Link>

        <Link href='/myRequests' className="m-8">
            <button className="btn-primary">Previous Requests</button>
        </Link>
      </div>
    </main>
  )
}
