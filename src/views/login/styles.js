import styled from 'styled-components';
import Themes from '@/styles/theme';
import FullPageWrapper from '@/styles/components/FullPageWrapper';

export const LoginWrapper = styled(FullPageWrapper)`
  form{
    margin-bottom: 80px;
    padding:${Themes.largeSpacingV};
  }
`;

export const LOGO = styled.img`
  width: 70%;
  margin-left: 15%;
  margin-bottom: ${Themes.largeSpacingV};
  vertical-align:top;
`;
