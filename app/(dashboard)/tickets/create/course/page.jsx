import CreateForm from '../CreateForm'

export default async function CreateTicket(props) {
  return (
    <main>
      <h2 className="text-center">Open a New Ticket</h2>
      <CreateForm request1="Course Overload" request2="Results Missing" document="Results:" />
    </main>
  )
}