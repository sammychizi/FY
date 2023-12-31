import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

// components
import ApproveButton from './ApproveButton'


export const dynamicParams = true
//metadata
export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies })

  //get ticket from database
  const { data: ticket } = await supabase.from('tickets')
    .select()
    .eq('id', params.id)
    .single()

  return {
    title: `Query Tracker | ${ticket?.title || 'Ticket not Found'}`
  }
}

async function getTicket(id) {
  const supabase = createServerComponentClient({ cookies })

  const { data } = await supabase.from('tickets')
    .select()
    .eq('id', id)
    .single()

    if (!data) {
      notFound()
    }
  
    return data
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id)

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  return (
    <main>
      <nav>
        <h2>Request Details</h2>
        <div className="ml-auto">
          <ApproveButton id={ticket.id}/>
        </div>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        {/* <small>Created by {ticket.user_email}</small> */}
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>

        {/* approve request */}
            {/* <Link href='/requests/approvalSuccess'>
                <button className='btn-primary'>Approve</button>
            </Link> */}
       
        
        
      </div>
    </main>
  )
}