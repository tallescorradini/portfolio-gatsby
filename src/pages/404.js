import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

export default function PageNotFound() {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <div>
      <h1>(404) Page not found.</h1>
    </div>
  )
}
