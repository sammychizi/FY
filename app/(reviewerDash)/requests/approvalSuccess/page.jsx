import React from 'react'
import Approval from '../ApprovalSuccess'
import { Suspense } from 'react'
import Loading from '@/app/(dashboard)/loading'

export default function ApprovalSuccess() {
  return (
    <Suspense fallback={<Loading />}>
        <Approval/>
    </Suspense>
    
  )
}
