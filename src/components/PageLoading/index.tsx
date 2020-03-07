import React, { useState, useEffect, Fragment, FC } from 'react'

interface PageLoadingProps {
   props: any
}

const PageLoading: FC<PageLoadingProps> = (props) => {

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
export default React.memo(PageLoading)