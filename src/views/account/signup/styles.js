import FullPageWrapper from '@/styles/components/FullPageWrapper'
import styled from 'styled-components'
import Themes from '@/styles/theme'

export const SignUpWrapper = styled(FullPageWrapper)`
  h3 {
    text-align:center;
    border-bottom: 3px dashed ${Themes.lightColor};
    margin-bottom:${Themes.middleSpacingV};
  }

  img {
    padding: ${Themes.middleSpacingV};
  }
`