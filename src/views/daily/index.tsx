/**日历 */
import React, { useState, useEffect, Fragment, FC } from 'react'

interface DailyProps {
   props: any
}

const Daily: FC<DailyProps> = (props) => {

  const [state, setState] = useState<any>();

  useEffect(() => {
    setState('Hello Function Component 日历～ ')
  }, [])

  return (
    <Fragment>
      {state}
    </Fragment>
  )
}
export default React.memo(Daily)