'use client'
import React, { useState } from 'react';
import SubmitButton from "@/app/components/SubmitButton"
import { addTicket } from "../actions"
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js'


export default function CreateForm(props) {
const router = useRouter()
  // Create a single supabase client for interacting with your database
const supabase = createClient('https://lsyfsabemejvfqrsenfc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzeWZzYWJlbWVqdmZxcnNlbmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NDA0MDQsImV4cCI6MjAxNjExNjQwNH0.qcmC3XqFOST1fitpYdh6nU2SRxJYk-niG2WSdYwsESk')
  const [request, setRequest] = useState('');
  const [body, setBody] = useState('');
  const [document, setDocument] = useState('');

  // Add status state------------------------------------------------------------------------------
  const [status, setStatus] = useState('Pending reviewal'); 
//--------------------------------------------------------------------------------------------------

  // State for loading status
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate an API request or dispatch an action to add the ticket
      // Replace the following with your actual data storage logic
      const formData = {
        request,
        body,
        document,
        status: 'submitted: Pending reviewal'
      };
      console.log('Submitting:', formData);

      // Simulate a delay to represent an asynchronous operation (e.g., API request)
     
     const { data, error } = await supabase
  .from('tickets')
  .insert([
    { request: request, body: body, document: document, status:status },
  ])
  .select()
  console.log("data", data)
        
  
    if (error) {
      console.log("Error", error);
      throw new Error('Could not add the new ticket.')
    }
     console.log("After adding teicket")

        

      // Reset form values and loading status after successful submission
      setRequest('');
      setBody('');
      setPriority('low');
      //setStatus------------------------------------------------------------
      setStatus('submitted: pending reviewal')
      setIsLoading(false);

      console.log('Submission successful');

      router.push('/tickets/requestSubmitted');
    } catch (error) {
      // Handle errors, log them, or update the UI accordingly
      console.error('Error during form submission:', error);
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
      <span>Request:</span>
        <select value={props.request}
          onChange={(e) => setRequest(e.target.value)}>
          <option value={"choose request"}>Choose request type</option>
          <option value={props.request1}>{props.request1}</option>
          <option value={props.request2}>{props.request2}</option>
        </select>
      </label>

      <label>
        <span>Description:</span>
        <textarea required  value={props.body}
          onChange={(e) => setBody(e.target.value)} />
      </label>
      <label>
        <span>{props.document}</span>
        <input
          type='file'
          value=""
          onChange={(e) => setDocument(e.target.value)}
        />
      </label>

      {/* <label>
        <span>Priority:</span>
        <select value={priority}
          onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label> */}
      <SubmitButton />
    </form>
  )
}