import React, { useState, useEffect, Fragment, FC } from 'react'

interface GlobalHeaderProps {
   props: any
}

const GlobalHeader: FC<GlobalHeaderProps> = (props) => {

  const [state, setState] = useState<any>();

  useEffect(() => {
    setState('Hello Function Component')
  }, [])

  return (
    <Fragment>
      {state}
    </Fragment>
  )
}
export default React.memo(GlobalHeader)