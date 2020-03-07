import React, { useState, useEffect, Fragment, FC } from 'react'

interface SettingProps {
   props: any
}

const Setting: FC<SettingProps> = (props) => {

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
export default React.memo(Setting)