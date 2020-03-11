import styled from "styled-components";
import Themes from '@/styles/theme';

const CopyRight = styled.div`
  border-top: 2px dashed ${Themes.lightColor};
  color:${Themes.baseTextColor};
  width:100%;
  text-align:center;
  position:fixed;
  bottom:0;
  transform:translateY(-100%);
  margin: -${Themes.middleSpacingV};
`

export default CopyRight