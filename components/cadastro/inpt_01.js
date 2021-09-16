import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from "../../config/theme";



const S_container_div = styled.div`
  grid-area: ${({ga}) => ga};
  ${fontF}
  position: relative;
  width: 100%;
  padding-left: ${ ({ml}) => ml === 'y' ? '8px' : '' };
  ${ ({ml}) => ml === 'y' ? 'padding-right: 16px;' : '' };
`
const S_label = styled.label`
  position: absolute;
  top: -10px;
  left: ${ ({ml}) => ml === 'y' ? '16px' : '8px' };
  line-height: 1;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 8px 4px 8px;
  background: ${({theme}) => theme.colors.white };
  border-radius: 50%;
  color: ${({theme, d}) => d === 'y' ? theme.colors.brown.c200 : theme.colors.brown.c600 };
`
const S_input = styled.input`
  ${cusTR('.2s')}
  padding: 10px 8px 4px 8px;
  width: 100%;
  font-weight: 500;
  border-top: solid 4px ${({theme, valid}) => valid === 'y' ? theme.colors.brown.c600 : theme.colors.red.p500 };
  border-right: solid 1px ${({theme, valid}) => valid === 'y' ? theme.colors.brown.c600 : theme.colors.red.p500 };
  border-bottom: solid 2px ${({theme, valid}) => valid === 'y' ? theme.colors.brown.c600 : theme.colors.red.p500 };
  border-left: solid 1px ${({theme, valid}) => valid === 'y' ? theme.colors.brown.c600 : theme.colors.red.p500 };
  background: ${({theme}) => theme.colors.white };
  border-top-left-radius: 8px;
  /* border-top-right-radius: 8px; */
  border-bottom-right-radius: 8px;
  color: ${({theme}) => theme.colors.gray.c800 };

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-datetime-edit {
  }
  &::-webkit-datetime-edit-fields-wrapper {
    color: ${ ({theme}) => theme.colors.gray.c400 };
    font-size: 14px;
  }
  &::-webkit-datetime-edit-text { padding: 0 .2rem; }
  &::-webkit-datetime-edit-month-field { text-transform: uppercase; }
  &::-webkit-datetime-edit-day-field { text-transform: uppercase; }
  &::-webkit-datetime-edit-year-field { text-transform: uppercase; }
  &::-webkit-inner-spin-button { display: none; }
  &::-webkit-calendar-picker-indicator { opacity: .4; cursor: pointer; }
  /* &::-webkit-calendar-picker-indicator {  filter: invert(100%); } */
  
  &::placeholder {
    color: ${({theme, d}) => d === 'y' ? theme.colors.gray.c200 : theme.colors.gray.c400 };
    font-size: 14px;
    ${cusTR('.2s')}
  }
  &:focus {
    outline: none;
    border-top: solid 4px ${({theme}) => theme.colors.brown.c800 };
    border-right: solid 1px ${({theme}) => theme.colors.brown.c800 };
    border-bottom: solid 2px ${({theme}) => theme.colors.brown.c800 };
    border-left: solid 1px ${({theme}) => theme.colors.brown.c800 };
  }

  &:disabled {
    /* background: ${({theme}) => theme.colors.gray.c100 }; */
    border-top: solid 4px ${({theme}) => theme.colors.brown.c200 };
    border-right: solid 1px ${({theme}) => theme.colors.brown.c200 };
    border-bottom: solid 2px ${({theme}) => theme.colors.brown.c200 };
    border-left: solid 1px ${({theme}) => theme.colors.brown.c200 };
    color: ${({theme}) => theme.colors.gray.c200 };
  }
`

const Inpt_01 = (props) => {

  const { onChange, type, value, name, placeholder, textLabel, ga, disable, ml, valid, onFocus, onLoad } = props

  const onF = (e) => {}

  return (
  <>
    <S_container_div ga={ga || ''} ml={ml ? 'y' : 'n'}>
      <S_label ml={ml ? 'y' : 'n'} HTMLFor={name} d={disable ? 'y' : 'n'}> {textLabel || 'Label'} </S_label>
      <S_input 
        onChange={onChange} onFocus={onFocus || onF}
        type={type || 'text'}
        value={value}
        name={name}
        onLoad={onLoad || onF}
        id={name}
        placeholder={placeholder}
        disabled={disable}
        className={disable ? 'desativado' : ''}
        d={disable ? 'y' : 'n'}
        valid={valid ? 'y' : 'n' }
      />
    </S_container_div>
  </>
);

}

export default Inpt_01;