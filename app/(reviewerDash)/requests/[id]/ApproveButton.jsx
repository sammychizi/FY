'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
export default function ApproveButton({id}) {
    const supabase = createClient('https://lsyfsabemejvfqrsenfc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzeWZzYWJlbWVqdmZxcnNlbmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NDA0MDQsImV4cCI6MjAxNjExNjQwNH0.qcmC3XqFOST1fitpYdh6nU2SRxJYk-niG2WSdYwsESk')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleClick = async () => {
        console.log("ID", id);
        setIsLoading(true)


        
const { data, error } = await supabase
  .from('tickets')
  .update({ status: 'Request Approved' })
  .eq("id", id)
  .select()
          
       

        if(error){
            console.log("Failure")
            setIsLoading(false)
        }
        if(data){
            router.refresh()
            
            router.push('/requests')
        }
    }

  return (
    <button
        className='btn-primary'
        onClick={handleClick}
        disabled={isLoading}
        // href='/requests/approvalSuccess'
    >
    {isLoading && (
        <>
           {/* <button>Approve</button> */}
           Approving...
        </>
    )}
    {!isLoading && (
        <>
            <button>Approve</button>
        </>
    )}
    </button>
  )
}
