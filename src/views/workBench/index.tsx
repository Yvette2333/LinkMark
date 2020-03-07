import React, { useState, useEffect, Fragment, FC } from 'react'

interface WorkBenchProps {
   props: any
}

const WorkBench: FC<WorkBenchProps> = (props) => {

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
export default React.memo(WorkBench)