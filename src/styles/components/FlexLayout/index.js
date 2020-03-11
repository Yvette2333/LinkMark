/**
 * 元素居中布局
 */

import styled from "styled-components";

const FlexLayout = styled.div.attrs((props) => ({
  flexDirection: props.flexDirection || 'row',
  justifyContent: props.justifyContent || 'center',
  alignItems: props.alignItems || 'center'
}))`
  display:flex;
  flex-direction:${props => props.flexDirection};
  justify-content:${props =>props.justifyContent};
  align-items: ${props =>props.alignItems};
`

export default FlexLayout