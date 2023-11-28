import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function UPDATE(_, {params}){
  const id  = params.id

  const supabase = createRouteHandlerClient({cookies})

  const {data, error } = await supabase.from('tickets')
  .update({ status: 'Request Approved' })
  .eq('id', id)
  .select()

  return NextResponse.json({data, error})
}
