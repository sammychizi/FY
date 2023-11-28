'use client'


import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


import { useState } from 'react'
import React from 'react'

export default function Login() {
    const [error, setError] = useState('')
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        
        const supabase = createClientComponentClient()
        const {error} =  await supabase.auth.signInWithPassword({
            email,
            password
        })
        if(error){
            setError(error.message)
        }
        if(!error){
            router.push('/reviewerDash')
        }
    }

  return (
    <>
       <h1 className='flex justify-center'>Login</h1>
       <form onSubmit={handleSubmit}>
            <label>
                <span>Email:</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>Password</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <button type='submit' className='btn-primary'>
                Login
            </button>
       </form>
       {error && (
        <div clasName="error">{error}</div>
       )}
    </>
  )
}
