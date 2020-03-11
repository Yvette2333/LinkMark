import styled from 'styled-components';
import Themes from '@/styles/theme';


export const Header = styled.div`
  position: sticky;
  top: 0px;
  background: #fff;
  border-bottom: 2px dashed ${ Themes.lightColor};
  padding: ${Themes.smallSpacingH};
  img {
    height: 34px;
  }
`

