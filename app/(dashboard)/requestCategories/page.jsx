import RequestTypes from '@/app/components/RequestTypes'
import React from 'react'

export default function Categories() {
  return (
    <div className="flex justify-left">
      <RequestTypes href="/tickets/create/results"  title="Results"/>
      <RequestTypes href="/tickets/create/course" title="Course overload"/>
      <RequestTypes href="/tickets/create/quotaList" title="Quota List"/>
      <RequestTypes href="/tickets/create/programme" title="Change Study Programme"/>
    </div>
  )
}
