import CreateForm from '../CreateForm'

export default async function CreateTicket(props) {
  return (
    <main>
      <h2 className="text-center">Make A new Request</h2>
      <CreateForm request="Results" request1="Results Missing" request2="Results Appeal" document="Results:"/>
    </main>
  )
}