import styled from 'styled-components';
import Themes from '@/styles/theme';

export const Header = styled.div`
  position: sticky;
  top: 0px;
  background: #fff;
  border-bottom: 2px dashed ${ Themes.lightColor};
  padding: ${Themes.smallSpacingH};
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  img {
    height: 34px;
  }
`;
