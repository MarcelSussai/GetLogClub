// ________________________________________________________________
import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { cusMQ, cusTR, fontF, S_main_base, Input_01, Chk_01, } from "../../config/theme"
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



// ________________________________________________________________
const S_div_01 = styled.div`
  ${fontF}
  position: fixed;
  bottom: 0;
  width: 100%;
  background: ${ ({theme}) => theme.colors.blue.c100 };
  border-top: solid 4px ${ ({theme}) => theme.colors.red.c600 };
  padding: 16px;
  ${cusTR('.2s')}
  display: grid;
  grid-template-areas:
  "ga0    ga1    ga2    ga2"
  ".      ga4    ga4    ."
  ;
  z-index: 200;
  gap: 8px;
  transform: translateY(calc(100% + -4px));
  &.open {
    border-top: solid 4px ${ ({theme}) => theme.colors.red.p500 };
    transform: translateY(0);
  }
  
  ${cusMQ(768)} {
    padding: 12px 0 12px 12px;
    display: flex;
    flex-direction: column;
    border-left: solid 8px ${ ({theme}) => theme.colors.red.c600 };
    border-bottom: solid 1px ${ ({theme}) => theme.colors.red.c600 };
    width: 200px;
    align-self: flex-end;
    position: fixed;
    bottom: unset;
    top: 88px;
    right: 0px;
    border-top: none;
    border-top: solid 1px ${ ({theme}) => theme.colors.red.c600 };
    &.open {
      border-top: solid 1px ${ ({theme}) => theme.colors.red.c600 };

    }
    transform: translateY(0);
    gap: 16px;
  }
  ${cusMQ(1024)} {
    border-left: solid 16px ${ ({theme}) => theme.colors.red.c600 };
  }
  ${cusMQ(1480)} {
    border-left: solid 1px ${ ({theme}) => theme.colors.red.c600 };
    border-right: solid 1px ${ ({theme}) => theme.colors.red.c600 };
    border-bottom: solid 8px ${ ({theme}) => theme.colors.red.c600 };
    border-top: none;
    /* border-left: none;
    border-right: none; */
    top: 0;
    right: 120px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 600px;
    padding: 12px;
  }
`
const S_div_02 = styled.div`
  position: absolute;
  top: -64px;
  right: 0;
  width: 64px;
  height: 64px;
  background: ${ ({theme}) => theme.colors.red.c200 };
  border-right: solid 4px ${ ({theme}) => theme.colors.red.c600 };
  border-bottom: solid 4px ${ ({theme}) => theme.colors.red.c600 };
  border-top: solid 2px ${ ({theme}) => theme.colors.red.p500 };
  border-left: solid 2px ${ ({theme}) => theme.colors.red.p500 };
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  border-top-right-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${cusTR('.1s')}
  cursor: pointer;
  font-size: 12px;
  line-height: 1;
  padding-left: 4px;
  font-weight: 700;
  color: ${ ({theme}) => theme.colors.red.c600 };
  &.open {
    color: ${ ({theme}) => theme.colors.red.p500 };
    background: ${ ({theme}) => theme.colors.yellow.c300 };
    border-right: solid 4px ${ ({theme}) => theme.colors.red.p500 };
    border-bottom: solid 4px ${ ({theme}) => theme.colors.red.p500 };
    border-top: solid 2px ${ ({theme}) => theme.colors.red.c400 };
    border-left: solid 2px ${ ({theme}) => theme.colors.red.c400 };
  }
  
  &:hover {
    background: ${ ({theme}) => theme.colors.yellow.c200 };
    
  }
  
  ${cusMQ(768)} {
    display: none;
  }
`
const S_div_03 = styled.div`
  color: ${ ({theme}) => theme.colors.red.c600 };
  font-size: 24px;
  line-height: 1;
  ${cusTR('.3s')}
  &.open {
    transform: rotate(180deg);
    color: ${ ({theme}) => theme.colors.red.p500 };
  }
`
const S_btn_01 = styled.button`
  grid-area: ${ ({ga}) => ga };
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: ${ ({theme}) => theme.colors.green.p300 };
  padding: 8px;
  line-height: 1;
  border: none;
  border-left: ${ ({theme, b}) => b ? 'solid 1px' + theme.colors.green.p300 : 'solid 1px' + theme.colors.blue.c800 };
  border-right: ${ ({theme, b}) => b ? 'solid 1px' + theme.colors.green.p300 : 'solid 1px' + theme.colors.blue.c800 };
  border-top: ${ ({theme, b}) => b ? 'solid 2px' + theme.colors.green.p300 : 'solid 2px' + theme.colors.blue.c800 };
  border-bottom: ${ ({theme, b}) => b ? 'solid 2px' + theme.colors.green.p300 : 'solid 2px' + theme.colors.blue.c800 };
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  background: ${ ({theme}) => theme.colors.blue.c800 };
  /* background: ${ ({theme}) => theme.colors.brown.p900 }; */
  box-shadow: 4px 4px 8px ${ ({theme}) => theme.colors.blackShadow2 };
  ${cusTR('.2s')}
  cursor: pointer;
  border-radius: 18px;
  &:hover {
    background: ${ ({theme}) => theme.colors.aqua.c600 };
  }
  
  ${cusMQ(768)} {
    box-shadow: -4px 4px 8px ${ ({theme}) => theme.colors.blackShadow6 };
    border-radius: unset;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
  }
  
  ${cusMQ(1480)} {
    border-radius: 24px;
    
  }

`
const S_span_01 = styled.span`
  display: flow-root;
  width: 100%;
`
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



const MenuzinE = () => {

  const [open, setOpen] = useState(false)
  const hdl_open = () => setOpen(!open)
  return (
  <>
    <S_div_01 className={open ? 'open' : ''}>
      <S_div_02 className={open ? 'open' : ''} onClick={hdl_open}>
        <S_div_03 className={open ? 'open' : ''}> {`🡱`} </S_div_03>
        {`menu`}
      </S_div_02>
      <S_btn_01 b={true} ga={`ga0`}> <S_span_01> {`painel`}            </S_span_01> </S_btn_01>
      <S_btn_01 ga={`ga1`}> <S_span_01> {`perfil`}            </S_span_01> </S_btn_01>
      <S_btn_01 ga={`ga2`}> <S_span_01> {`financeiro`}        </S_span_01> </S_btn_01>
      <S_btn_01 ga={`ga4`}> <S_span_01> {`fale conosco`}      </S_span_01> </S_btn_01>
    </S_div_01>
  </>
);

}

export default MenuzinE;