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
      <Link href='/requestCategories' className="ml-auto">
          <button className="btn-primary">Make A Request</button>
        </Link>
      
    </main>
  )
}
