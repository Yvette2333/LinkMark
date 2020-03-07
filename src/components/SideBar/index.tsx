import React, { useState, useEffect, Fragment, FC } from 'react'

interface SideBarProps {
   props: any
}

const SideBar: FC<SideBarProps> = (props) => {

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
export default React.memo(SideBar)