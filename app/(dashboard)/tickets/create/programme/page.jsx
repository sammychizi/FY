import CreateForm from '../CreateForm'

export default async function CreateTicket(props) {
  return (
    <main>
      <h2 className="text-center">Open a New Ticket</h2>
      <CreateForm request="Programme" request1="Change Programme" request2="Change School" document="Results:"/>
    </main>
  )
}