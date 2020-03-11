/**
 * Content
 */

import styled from "styled-components";
import Themes from '@/styles/theme'

const Content = styled.section.attrs((props) => ({
  MenuWidth: props.MenuWidth || Themes.MenuWidth || '225px'
}))`
  width:calc(100% - ${props => props.MenuWidth});
  padding: ${Themes.smallSpacingV} ${Themes.middleSpacingH};
  float:right;
  background: ${Themes.normalColor};
  height:100vh;
`

export default Content