/**
 * 全屏居中，自定义宽度
 */
import styled from 'styled-components';
import Themes from '@/styles/theme';


const FullPageWrapper = styled.div.attrs((props)=>({
  formWidth:props.formWidth || '500px'
}))`
  display:flex;
  height: 100vh;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  
  form {
     /* TODO: media Query width */
    width:${props => props.formWidth};
    border:2px dashed ${Themes.normalColor};
    background: rgba(0,0,0,0.2);
    button {
      width: 100%;
    }
    a {
      float: right;
      vertical-align:bottom;
    }
  }

`
export default FullPageWrapper