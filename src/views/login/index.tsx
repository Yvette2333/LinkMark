import React, { useState, useEffect, Fragment, FC } from 'react'

import GlobalHeader from '@/components/GlobalHeader'

interface LoginProps {
   props: any
}

const Login: FC<LoginProps> = (props) => {

  const [state, setState] = useState<any>();

  useEffect(() => {
    setState('Hello Function Component')
  }, []) 

  return (
    <Fragment>
      {state}
      <GlobalHeader props={""}/>
    </Fragment>
  )
}
export default React.memo(Login)