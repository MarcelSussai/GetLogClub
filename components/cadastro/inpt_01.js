import styled from 'styled-components';
import {
  cusMQ, cusTR, fontF,
  S_main_base, Input_01, Chk_01,
} from "../../config/theme";



const S_container_div = styled.div`
  grid-area: ${({ga}) => ga};
  ${fontF}
  position: relative;
  width: 100%;
`
const S_label = styled.label`
  position: absolute;
  top: -10px;
  left: 8px;
  line-height: 1;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 8px 4px 8px;
  background: ${({theme}) => theme.colors.white };
  border-radius: 50%;
  color: ${({theme}) => theme.colors.brown.c600 };
`
const S_input = styled.input`
  ${cusTR('.2s')}
  padding: 10px 8px 4px 8px;
  width: 100%;
  font-weight: 500;
  border-top: solid 4px ${({theme}) => theme.colors.brown.c600 };
  border-right: solid 1px ${({theme}) => theme.colors.brown.c600 };
  border-bottom: solid 2px ${({theme}) => theme.colors.brown.c600 };
  border-left: solid 1px ${({theme}) => theme.colors.brown.c600 };
  background: ${({theme}) => theme.colors.white };
  border-top-left-radius: 8px;
  /* border-top-right-radius: 8px; */
  border-bottom-right-radius: 8px;
  color: ${({theme}) => theme.colors.gray.c800 };

  
  &::placeholder {
    color: ${({theme}) => theme.colors.gray.c400 };
    font-size: 14px;
    
  }
  &:focus {
    outline: none;
    border-top: solid 4px ${({theme}) => theme.colors.brown.c800 };
    border-right: solid 1px ${({theme}) => theme.colors.brown.c800 };
    border-bottom: solid 2px ${({theme}) => theme.colors.brown.c800 };
    border-left: solid 1px ${({theme}) => theme.colors.brown.c800 };
  }
`

const Inpt_01 = (props) => {

  const { onChange, type, value, name, placeholder, textLabel, ga } = props

  return (
  <>
    <S_container_div ga={ga || ''}>
      <S_label HTMLFor={name}> {textLabel || 'Label'} </S_label>
      <S_input 
        onChange={onChange}
        type={type || 'text'}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </S_container_div>
  </>
);

}

export default Inpt_01;