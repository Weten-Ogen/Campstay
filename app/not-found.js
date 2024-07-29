import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <div>Does not exist</div>
        <Link href="/">go to home</Link>
    </div>
  )
}
