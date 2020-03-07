import React, { useState, useEffect, Fragment, FC } from 'react'

interface FunctionComponentNameProps {
  props: any
}

const FunctionComponentName: FC<FunctionComponentNameProps> = (props) => {

  const [state, setState] = useState<any>();
  
  useEffect(() => {
    setState('Hello Function Component ')
  }, [])

  return (
    <Fragment>
      {state}
    </Fragment>
  )
}

export default React.memo(FunctionComponentName)