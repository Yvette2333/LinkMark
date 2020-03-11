import React, { useState, useEffect, Fragment, FC } from 'react'
import { Header } from './styles';

interface GlobalHeaderProps {
}

const GlobalHeader: FC<GlobalHeaderProps> = (props) => {

  return (
    <Fragment>
      <Header>
        <img src={require("@/assets/images/logo.png")} />
      </Header>
    </Fragment>
  )
}
export default React.memo(GlobalHeader)