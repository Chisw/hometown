import React from 'react'
import { Spinner } from '@blueprintjs/core'

interface CoverSpinnerProps {
  size?: number
  backgroundColor?: string
}

export default function CoverSpinner(props: CoverSpinnerProps) {

  const {
    size = 40,
    backgroundColor = 'rgba(26, 32, 44, .8)',
  } = props

  return (
    <div
      className="htc-cover-spinner absolute z-20 trbl-0 flex justify-center items-center cursor-wait"
      style={{ backgroundColor }}
    >
      <Spinner size={size} />
    </div>
  )
}