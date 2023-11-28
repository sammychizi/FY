"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function addTicket(formData) {

  const supabase = createServerActionClient({ cookies })
const {title, body, priority} = formData;
  console.log("formdata", formData);
  // get current user session
  const { data: { session } } = await supabase.auth.getSession()
  const { data, error } = await supabase
  .from('tickets')
  .insert([
    { title: title, body: body, priority: priority },
  ])
  .select()
  console.log("success")
        
  
    if (error) {
      console.log("Error", error);
      throw new Error('Could not add the new ticket.')
    }

  revalidatePath('/tickets')
  redirect('/tickets')
}

export async function deleteTicket(id) {
  const supabase = createServerActionClient({ cookies })

  const { error } = await supabase.from('tickets')
    .delete()
    .eq('id', id)
  
  if (error) {
    throw new Error('Could not delete the ticket.')
  }

  revalidatePath('/tickets')
  redirect('/tickets')
} 