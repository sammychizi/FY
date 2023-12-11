import RequestTypes from '@/app/components/RequestTypes'
import React from 'react'

export default function Categories() {
  return (
    <>
      <p className="flex justify-center">Pick the type of request you would like to make. If the category you wish to address is not here, pick other</p>
    
    <div className="flex justify-center">
    
      <RequestTypes href="/tickets/create/results"  title="Results"/>
      <RequestTypes href="/tickets/create/course" title="Course overload"/>
      <RequestTypes href="/tickets/create/quotaList" title="Quota List"/>
      <RequestTypes href="/tickets/create/programme" title="Change Study Programme"/>
      <RequestTypes href="/tickets/create/programme" title="Other"/>
    </div>
    </>
  )
}
