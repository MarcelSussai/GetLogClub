// ________________________________________________________________
import { useState, useEffect, useRef } from 'react';
import styled, {keyframes} from 'styled-components';
import {
  cusMQ, cusTR, fontF,
  S_main_base, Input_01, Chk_01,
} from "../../config/theme";
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



/*
  div 11
  h3 01
  div 12
  p 03
  p 04
  div 13
  div 14
  span 01
  inpt_02
  btn 02

  -------

  onPesquisa          => 'y' || 'n'
  hasError            => true or false
  iniciou             => true or false
  nomeRest            => String com nome do restaurante vindo do back
  codeRest            => String com o código do restaurante vindo do back
  hi1                 => hdl_inpt_02 => função que seta o valor
  hi1                 => valor
  hf2                 => hdl_inpt_03 => função que seta o valor
  hf2                 => valor
  validTotal          => true or false
*/

const S_div_01 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${cusMQ(1160)} {
    flex-direction: row;
    width: fit-content;
  }
`
const S_div_02 = styled.div`
  height: ${ ({tem}) => tem === 'y' ? '100%' : '0px' };
  overflow: hidden;
  ${cusTR('.1s')}
  opacity: ${ ({tem}) => tem === 'y' ? '1' : '0' };
  position: ${ ({tem}) => tem === 'y' ? 'relative' : 'absolute' };
  padding: 16px;
  border: solid 4px ${ ({theme, bc}) => bc === 'y' ? theme.colors.aqua.c600 : theme.colors.yellow.c600 };
  border-top-left-radius: 32px;
  border-bottom-right-radius: 32px;
  color: ${ ({theme}) => theme.colors.gray.c500 };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 296px;
  background: ${ ({theme}) => theme.colors.blackShadow5 };
`
const S_div_03 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* margin-bottom: 8px; */
  padding-bottom: 8px;
  /* border-bottom: solid 1px ${ ({theme}) => theme.colors.gray.c600 }; */
  gap: 8px;
`
const S_div_04 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  `
const S_div_05 = styled.div`
  display: flex;
  flex-direction: column;
  display: ${ ({tem}) => tem === 'y' ? 'none' : 'unset' };
  `
const S_div_06 = styled.div`
  display: ${ ({tem}) => tem === 'y' ? 'unset' : 'none' };
`

const S_div_07 = styled.div`
  padding: 8px 8px 6px 8px;
  border-radius: 50%;
  line-height: 1;
  border: solid 1px;
  align-self: flex-end;
  font-weight: 800;
  color: ${ ({theme}) => theme.colors.red.c600 };
  background: ${ ({theme}) => theme.colors.red.c100 };
  transform: translate(8px, -8px);
  cursor: pointer;
  ${cusTR('.1s')}
  
  &:hover {
    color: ${ ({theme}) => theme.colors.red.p500 };
    background: ${ ({theme}) => theme.colors.red.c200 };

  }
`
const S_p_01 = styled.p`
  font-size: 14px;
  font-weight: 600;
  display: ${ ({tem}) => tem === 'y' ? 'unset' : 'none' };
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .mark {
    font-size: 12px;
    color: ${ ({theme}) => theme.colors.aqua.c700 };
    font-weight: 800;
    display: inline-block;
    /* text-transform: uppercase; */
    width: 80px;
  }
`
const S_p_02 = styled.p`
  margin-top: 16px;
  padding-top: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  border-top: solid 1px ${ ({theme}) => theme.colors.gray.c600 };
  color: ${ ({theme}) => theme.colors.gray.c800 };
`
const S_span_01 = styled.p`
  margin-top: 0;
  font-size: 12px;
  color: ${ ({theme}) => theme.colors.aqua.c700 };
  font-weight: 800;
  display: inline-block;
`
const S_inpt_01 = styled.input`
  color: ${ ({theme}) => theme.colors.gray.c500 };
  padding: 4px 6px;
  font-size: 16px;
  ${cusTR('.1s')}
  border: solid 2px;
  font-weight: 600;
  &:Focus {
    color: ${ ({theme}) => theme.colors.gray.c800 };
    outline: 0;
  }
`
const S_btn_01 = styled.button`
  font-size: 14px;
  border: none;
  background: ${ ({theme, on}) => on === 'y' ? theme.colors.aqua.c600 : theme.colors.gray.c200 };
  color: ${ ({theme}) => theme.colors.white };
  line-height: 1;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  ${cusTR('.1s')}
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${ ({theme, on}) => on === 'y' ? theme.colors.aqua.c700 : theme.colors.gray.c200 };
  }
`
const S_btn_02 = styled.button`
  font-size: 14px;
  border: none;
  background: ${ ({theme, on}) => on === 'y' ? theme.colors.blue.c600 : theme.colors.gray.c200 };
  color: ${ ({theme}) => theme.colors.white };
  line-height: 1;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  margin-top: 8px;
  border-radius: 16px;
  /* border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px; */
  ${cusTR('.1s')}
  width: 100%;
  cursor: pointer;
  display: ${ ({tem}) => tem === 'y' ? 'unset' : 'none' };

  &:hover {
    background: ${ ({theme, on}) => on === 'y' ? theme.colors.aqua.c700 : theme.colors.gray.c200 };
  }
`


const CardRestaurant = (props) => {

  const {
    ocultar2, fechar, confirmado, confirmar, editar,
    nomeRest, codeRest, hdlHi, hdlHf , hi, hf,
    validTotal
  } = props

//   const [confirmado, setConfirmado] = useState(false)

// const confirmar = () => {setConfirmado(true)}
// const editar = () => {setConfirmado(false)}

useEffect(() => { console.log(confirmado) }, [confirmado])

  return (
  <>
    <S_div_01>

      <S_div_02 bc={confirmado ? 'y' : 'n'} tem={ocultar2}>

        <S_div_07 onClick={fechar}>
          {`✖`}
        </S_div_07>

        <S_p_01 tem={`y`}> <span className="mark">{'nome:'}</span> {nomeRest} </S_p_01>
        <S_p_01 tem={`y`}> <span className="mark">{'código:'}</span> {codeRest} </S_p_01>

        <S_div_06 tem={confirmado ? 'y' : 'n'}>
          <S_p_01 tem={confirmado ? 'y' : 'n'}> <span className="mark">{'hora inicial:'}</span> {hi} </S_p_01>
          <S_p_01 tem={confirmado ? 'y' : 'n'}> <span className="mark">{'hora final:'}</span> {hf} </S_p_01>
        </S_div_06>

        <S_div_05 tem={confirmado ? 'y' : 'n'}>
          <S_p_02> {`Selecione a hora inicial e a hora final que deseja trabalhar nesse restaurante:`} </S_p_02>

          <S_div_03>

            <S_div_04>
              <S_span_01> {`hora inicial`} </S_span_01>
              <S_inpt_01 onChange={hdlHi} value={hi} type="time" />
            </S_div_04>

            <S_div_04>
              <S_span_01> {`hora final`} </S_span_01>
              <S_inpt_01 onChange={hdlHf} value={hf} type="time" />
            </S_div_04>

          </S_div_03>
          <S_btn_01 onClick={confirmar} disabled={!validTotal} on={!validTotal ? 'n' : 'y'}> {`confirmar horário`} </S_btn_01>
        </S_div_05>
        <S_btn_02 tem={confirmado ? 'y' : 'n'} onClick={editar} on={'y'}> {`editar horário`} </S_btn_02>
        
      </S_div_02>
    </S_div_01>
  </>
);

}

export default CardRestaurant;