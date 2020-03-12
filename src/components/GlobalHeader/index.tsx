import React, { Fragment, FC } from 'react'
import { Header } from './styles';

interface GlobalHeaderProps {
}

const GlobalHeader: FC<GlobalHeaderProps> = (props) => {

  return (
    <Fragment>
      <Header>
        <img src={require("@/assets/images/logo.png")} alt="Link Mark"/>
      </Header>
    </Fragment>
  )
}
export default React.memo(GlobalHeader)