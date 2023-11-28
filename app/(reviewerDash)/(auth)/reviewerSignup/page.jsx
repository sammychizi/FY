'use client'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { useState } from 'react'

export default function ReviewerSignup() {
    const router = useRouter()
    const [error, setError] = useState('')

const [fullName, setFullName] = useState('')
const [reviewerId, setReviewerId] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const handleSubmit = async (e) =>{
    e.preventDefault()
    const supabase = createClientComponentClient()

    const {error} = await supabase.auth.signUp({
        fullName,
        reviewerId,
        email,
        password,
        options: {
            emailRedirectTo: `${location.origin}/api/auth/callback`
        }
    })

    if(error){
        setError(error.message)
    }
    if(!error){
        router.push('/verify')
    }
}

  return (
    <>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Full Name:</span>
                <input
                    type="text"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                />
            </label>
            <label>
                <span>Reviewer Number:</span>
                <input
                    type="text"
                    onChange={(e) => setReviewerId(e.target.value)}
                    value={reviewerId}
                />
            </label>
            <label>
                <span>Email:</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <labe>
                <span>Password</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </labe>
            <button type='submit' className='btn-primary'>
                Sign Up
            </button>
       </form>
       {error && (
        <div className='error'>{error}</div>
       )}
    </>
  )
}
