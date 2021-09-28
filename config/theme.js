import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const theme = {
  colors: {
    brown: {
      c100: '#F8F0EE',
      c200: '#EEDAD5',
      c300: '#DCB6AA',
      c400: '#CB9180',
      c500: '#B96C55',
      c600: '#95523D',
      c700: '#6B3A2C',
      c800: '#40231A',
      p900: '#160C09',
    },
    red: {
      c100: '#FFECE5',
      c200: '#FFCFBF',
      c300: '#FFA07F',
      c400: '#FF703E',
      p500: '#FD4100',
      c600: '#A92B00',
      c700: '#541600',
      c800: '#200800',
    },
    yellow: {
      c100: '#FFF7DF',
      c200: '#FFF0BF',
      c300: '#FFE89F',
      c400: '#FFD85E',
      p500: '#FDC000',
      c600: '#BE9000',
      c700: '#7F6000',
      c800: '#3F3000',
    },
    green: {
      c100: '#F8FFE5',
      c200: '#EEFFBF',
      p300: '#BCFD00',
      c400: '#8DBE00',
      c500: '#678B00',
      c600: '#475F00',
      c700: '#2F3F00',
      c800: '#182000',
    },
    blue: {
      c100: '#ECFAFF',
      c200: '#CCF2FF',
      c300: '#9FE6FF',
      c400: '#54D3FF',
      p500: '#00BCFD',
      c600: '#008DBE',
      c700: '#005E7F',
      c800: '#002F3F',
    },
    aqua: {
      c100: '#ECFFFA',
      c200: '#BFFFEF',
      c300: '#7FFFE0',
      p400: '#00FDBF',
      c500: '#00BE8F',
      c600: '#007F60',
      c700: '#003F30',
    },
    skin: {
      c100: '#FEFBF5',
      c200: '#FDF6EB',
      p300: '#FAEDD7',
      c400: '#F4D6A3',
      c500: '#EDBF70',
      c600: '#E7A73C',
      c700: '#9B6913',
      c800: '#67460D',
    },
    gray: {
      c100:   '#ebebed',
      c200:   '#D7D7DB',
      c300:   '#c3c3c9',
      c400:   '#9b9ba5',
      c500:   '#747481',
      c600:   '#505059',
      c700:   '#1A1A1D',
      c800:   '#131315',
      c900:   '#101011',
    },
    white:              '#FFFFFF',
    whiteOpacity:       '#FFFFFFdd',
    black:              '#000000',
    blackShadow:        '#00000016',
    blackShadow2:       '#00000048',
    blackShadow3:       '#00000032',
    blackShadow4:       '#00000024',
    blackShadow5:       '#00000008',
    blackShadow6:       '#00000064',
    greenShadow:        '#BCFD0012',
    blueShadow:         '#00BCFD12',
    redShadow:          '#FD410026',
    yellowShadow:       '#FDC00026',
  },
}

export const fontF = `font-family: 'Montserrat', sans-serif;`
export const cusTR = (time) => `transition: all ${time} ease-in;`
export const cusMQ = (size) => `@media (min-width: ${size}px)`
export const CBs = (value) => `cubic-bezier(${value})`

export const CBsValues = {
  cb_01: '0.68, -0.55, 0.265, 1.55',
  cb_02: '0.175, 0.885, 0.32, 1.275',
  cb_03: '0.6, -0.28, 0.735, 0.045',
  cb_04: '0.785, 0.135, 0.15, 0.86',
}

// componentes fábrica ____________________________________________
export const S_main_base = styled.main`
  ${fontF}
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 88px;
  margin-bottom: 96px;
  width: 100%;
  padding: 16px;
  
  ${cusMQ(768)} {
    padding: 32px;
  }
`
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



// Input_01 _______________________________________________________
const S_container_input = styled.div`
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
  background: ${ theme.colors.white };
  border-radius: 50%;
  color: ${ ({valid}) => valid ? theme.colors.blue.c600 : theme.colors.red.c600 };
`
const S_input = styled.input`
  ${cusTR('.2s')}
  padding: 12px 16px 4px 16px;
  width: 100%;
  font-weight: 500;
  border-top: solid 4px ${({valid}) => valid ? theme.colors.blue.c600 : theme.colors.red.c600 };
  border-right: solid 1px ${({valid}) => valid ? theme.colors.blue.c600 : theme.colors.red.c600 };
  border-bottom: solid 2px ${({valid}) => valid ? theme.colors.blue.c600 : theme.colors.red.c600 };
  border-left: solid 1px ${({valid}) => valid ? theme.colors.blue.c600 : theme.colors.red.c600 };
  background: ${ theme.colors.white };
  border-top-left-radius: 8px;
  /* border-top-right-radius: 8px; */
  border-bottom-right-radius: 8px;
  color: ${ ({valid}) => valid ? theme.colors.gray.c800 : theme.colors.red.c400 };
  
  &::placeholder {
    color: ${ theme.colors.gray.c400 };
  }
  &:focus {
    outline: none;
    border-top: solid 4px ${ theme.colors.blue.c700 };
    border-right: solid 1px ${ theme.colors.blue.c700 };
    border-bottom: solid 2px ${ theme.colors.blue.c700 };
    border-left: solid 1px ${ theme.colors.blue.c700 };
  }
`

export const Input_01 = (props) => {

  const { txtLabel, txtPh, oc, name, type, valid, focus, value, } = props

  const fnTrash = (e) => e.preventDefault()

  return (
    <>
      <S_container_input>
        <S_label valid={valid} HTMLFor={name}> {txtLabel || 'texto'} </S_label>
        <S_input value={value} onFocus={focus || fnTrash} valid={valid} autoComplete={type === 'password' ? 'current-password' : ''} onChange={oc} name={name} id={name} type={type || 'text'} placeholder={txtPh} />
      </S_container_input>
    </>
  )
}
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾


// CheckBox _______________________________________________________
  const S_container_chk = styled.div`
    ${cusTR('.2s')}

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 0 0 4px 0;
    border-bottom: solid 1px ${ theme.colors.white };
    &:hover {
      border-bottom: solid 1px ${ theme.colors.aqua.c500 };
    }
  `
  const S_text_chk = styled.p`
    font-size: 12px;
    color: ${ theme.colors.aqua.c500 };
    font-weight: 600;

    /* padding: 4px 8px; */
  `
  const S_box_chk = styled.div`
    width: 24px;
    height: 24px;
    padding: 4px;
    position: relative;
    border: solid 1px ${ theme.colors.aqua.c500 };
    border-radius: 4px;
    ${cusTR('.2s')}
    
    &::before {
      ${cusTR('.2s')}
      border-radius: 2px;
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      background: ${ (props) => props.sele ? theme.colors.aqua.c500 : '' };
      width: 14px;
      height: 14px;

    }
  `

  export const Chk_01 = (props) => {

    const { txtChk, capture } = props

    const [sel, setSel] = useState(Boolean)

    const handle_chk = () => {
      setSel(!sel)
    }

    useEffect(() => {
      console.log(sel);
      capture ? capture(sel) : ''
    }, [sel])


    return (
      <>
        <S_container_chk onClick={handle_chk}>
          <S_text_chk > { txtChk ? txtChk : `Lembrar senha`} </S_text_chk>
          <S_box_chk sele={sel} />
        </S_container_chk>
      </>
    )
  }
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾