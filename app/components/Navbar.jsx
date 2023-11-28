import Link from 'next/link'
import LogoutButton from './LogoutButton'
import Image from 'next/image'
import Logo from './questionLogo.png'
// import LogoutButton from './LogoutButton.png'

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Query Tracker logo'
        width={40}
        placeholder='blur'
        quality={100}
      />
      <h1>Query Tracker</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">Requests</Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  )
}