/**日历 */
import React, { useState, useEffect, Fragment, FC } from 'react'
import Toast from '@/components/Toast'
import { Button } from 'antd';
interface DailyProps {
   props: any
}

const Daily: FC<DailyProps> = (props) => {

  const [state, setState] = useState<any>();

  useEffect(() => {
    setState('Hello Function Component 日历～ ')
  }, [])

  const showToaast = () => {
    Toast.warn('6666')
  } 

  return (
    <Fragment>
      {state}
      <Button onClick={showToaast}>
        点击提示toast
      </Button>
    </Fragment>
  )
}
export default React.memo(Daily)