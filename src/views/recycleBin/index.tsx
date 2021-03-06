/*
 * @Author: yuwei 回收站
 * @Date: 2020-03-03 21:32:29 
 * @Last Modified by: yuwei
 * @Last Modified time: 2020-04-29 10:34:46
 */

import React, { useState, useEffect, Fragment, FC } from 'react'

interface RecycleBinProps {
   props: any
}

const RecycleBin: FC<RecycleBinProps> = (props) => {

  const [state, setState] = useState<any>();

  useEffect(() => {
    setState('Hello Function Component 回收站')
  }, [])

  return (
    <Fragment>
      {state}
    </Fragment>
  )
}
export default React.memo(RecycleBin)