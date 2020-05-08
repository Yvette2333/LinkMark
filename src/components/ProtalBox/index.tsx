import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledContainer } from './styled';
let Container = window.document.createElement("div");
Container.id = 'ProtalBox'
function ProtalBox(props: any) {

  useEffect(() => {
    window.document.body.appendChild(Container);
    return () => {
      window.document.body.removeChild(Container);
    }
  }, [Container])

  return createPortal(
    <StyledContainer>
      <h3>Title</h3>
      
      <div>
        content , 这是protal 的哟～ 
      </div>
    </StyledContainer>,
    Container
  )
}

export default React.memo(ProtalBox)