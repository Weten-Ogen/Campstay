import { Skeleton } from '../components/ui/skeleton'
import React from 'react'

export default function Loading() {
  return (
    <div className="text-lg text-red font-bold">
      <Skeleton></Skeleton>
   </div>
  )
}
