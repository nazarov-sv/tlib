//

import React from 'react'
import { Spinner } from 'react-bootstrap'

type Props = {
  isSmall?: boolean
}

export const Loader: React.FC<Props> = ({ isSmall }) => {
  return (
    <Spinner
      animation='border'
      role='status'
      variant='success'
      size={isSmall ? 'sm' : undefined}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}
