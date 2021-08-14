import styled from 'styled-components';
import { cusMQ, cusTR, fontF, theme } from "../../config/theme";

const S_path = styled.path`
  fill: ${ ({theme, cor}) => cor || theme.colors.black };

  
`

const Enter_ico = (props) => {
  const { color } = props
  return (
  <>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <S_path cor={color} 
        d="M12 10L8 6v3H0v2h8v3zm8 0A10 10 0 01.46 13h2.13a8 8 0 100-6H.46A10 10 0 0120 10z"
      />
    </svg>
  </>
);

}

export default Enter_ico;