import CreateForm from '../CreateForm'

export default async function CreateTicket(props) {
  return (
    <main>
      <h2 className="text-center">Open a New Ticket</h2>
      <CreateForm request="Quota List" request1="Name Missing" request2="Change Program Appeal" document="Results:"/>
    </main>
  )
}