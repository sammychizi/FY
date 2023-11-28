"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

// components
import AuthForm from "../AuthForm"

export default function Signup() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [computerId, setComputerId] = useState('')

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setError('')

    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    })
    if (error) {
      setError(error.message)
    }
    if (!error) {
      router.push('/verify')
    } 
  }

  return (
    <main>
      <h2 className="text-center">Requester Sign up</h2>

      <form onSubmit={(e) => handleSubmit(e, email, password)}>
      <label>
        <span>Full Name:</span>
        <input
          type="text"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
      </label>
      <label>
          <span>Computer Number:</span>
          <input
            type="text"
            onChange={(e) => setComputerId(e.target.value)}
            value={computerId}
          />
      </label>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required 
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required 
        />
      </label>
      <button className="btn-primary">Submit</button>
    </form>

      {error && (
        <div className="error">{error}</div>
      )}
    </main>
  )
}