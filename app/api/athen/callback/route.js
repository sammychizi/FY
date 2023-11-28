import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET(request){
    const supabase = createRouteHandlerClient({cookies})
    const { data, error } = await supabase.auth.signInWithOtp({
        email: 'example@email.com',
        options: {
          emailRedirectTo: 'localhost:3000/reviewerDash'
        }
    })

    if (error) {
        console.log(error)
        return NextResponse.redirect('/login')
    }

    const url = 'localhost:3000/reviewerDash'
    const code = url.searchParams.get('code')

    if (code){
        await supabase.auth.exchangeCodeForSession(code)
    }
    return NextResponse.redirect(url)
}