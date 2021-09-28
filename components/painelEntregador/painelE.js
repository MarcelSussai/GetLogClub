// IMPORTS_________________________________________________________
import Cookies from 'js-cookie';
import { useState, useEffect, useRef } from 'react';
import styled, {keyframes} from 'styled-components';
import {
  cusMQ, cusTR, fontF,
  S_main_base, Input_01, Chk_01,
} from "../../config/theme";
import { axiosSimp } from '../services/axios';
import { useRouter } from 'next/router'
// import GoogleMapReact from 'google-map-react'
import MenuzinE from './menuzinE'
import CardRestaurant from './cardRestaurant'
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

/*

  todos>> DATAS
  21/09/2021 16:20
        milesimos segundos      segundos   minutos   horas     dias
  time = (end - start)          / 1000     / 60      / 60      / 24
  
  ISO 8601
  2021-09-21T16:00:00-03:00

  hi2 not > hi1 && hi2 not < hi1 && hi2 not > hf2
  hf2 not < hf1 && hf2 not > hi1 && hf2 not < hi2


  ___  hora final     hf1
  |
  |    hora >= hi1 && hora <= hf1
  |
  ‾‾‾  hora inicial   hi1

--  º------------------------------------------------º  => 24 hrs
--                |--------------------|                => HI1
--    |---------|                                       => H12
--                                        |---------|   => HI3
--  -------|                                    |-----  => HI4
--  -----------------|                          |-----  => HI5
--              |-------------|                         => HI6
--                                  |--------|          => HI7
--                      |---------|                     => HI8

00:00
00: 
23:
__  HI2 =>    hi2  <  hi1         __  HI6 =>    hi2  <  hi1
__            hf2  <  hi1         __            hf2  >  hi1
__    OK      hi2  <  hf1         __     X      hi2  <  hf1
__            hf2  <  hf1         __            hf2  <  hf1

__  HI3 =>    hi2  >  hi1         __  HI7 =>    hi2  >  hi1
__            hf2  >  hi1         __            hf2  >  hi1
__    OK      hi2  >  hf1         __     X      hi2  <  hf1
__            hf2  >  hf1         __            hf2  >  hf1

__  HI4 =>    hi2  >  hi1         __  HI8 =>    hi2  >  hi1
__            hf2  <  hi1         __            hf2  >  hi1
__    OK      hi2  >  hf1         __     X      hi2  <  hf1
__            hf2  <  hf1         __            hf2  <  hf1

__  HI5 =>    hi2  >  hi1
__            hf2  >  hi1
__     X      hi2  >  hf1
__            hf2  <  hf1



  todos>> painel
  dados a atualizar e aprovação
  selecionar para quem pretende trabalhar, se para a getlogclub ou para algum restaurante cadastrado
  fornecer o código do restaurante, no máximo dois restaurantes
  opção para escolher GetLogClub
  opção para escolher Restaurante, nessa opção aparece um campo e um botão de adicionar, 
  ao adicionar vai aparecer o código e o nome do restaurante ou uma mensagem exibindo que o restaurante não existe


  depois de aprovado:
  quantidade de pedidos entregues
  quantidade de quilometros rodados
  valor ganho total da semana

  antes de aprovado:
  avisando que precisa de aprovação
  
  falar sobre os dados cadastrados, e sobre a possibilidade de mudar a foto perfil

  editar restaurantes
  trabalhar para getlogclub

  todos>> perfil
  mostrar todos os dados cadastrais para edição
  editar foto de perfil,
  ver fotos dos documentos

  todos>> financeiro
  valor total ganho por semana
  valor total do dia

  valor a receber
  valor recebido

  adicionar conta pra transferir
  editar dados da conta

*/

// ANIMAÇÕES_______________________________________________________
const rotate_ani_01 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

// ESTILOS_________________________________________________________
const S_main = styled(S_main_base)`
  padding: unset;
  padding: 0;
`
const S_section_01 = styled.section`
  position: relative;
  width: 100%;
  background: ${ ({theme}) => theme.colors.white };
  border-top: solid 2px ${ ({theme}) => theme.colors.blue.c600 };
  border-bottom: solid 2px ${ ({theme}) => theme.colors.blue.c600 };
  border-left: solid 8px ${ ({theme}) => theme.colors.blue.c600 };
  border-right: solid 8px ${ ({theme}) => theme.colors.blue.c600 };
  box-shadow: 0 8px 16px ${ ({theme}) => theme.colors.blackShadow4 };
  /* padding: 16px 0 32px 0; */
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${cusTR('.2s')}
  margin-bottom: 1024px;
  padding-bottom: 400px;

  ${cusMQ(768)} {
    width: calc(100% - 200px);
    align-self: flex-start;
  }
  ${cusMQ(1024)} {
    border-left: solid 16px ${ ({theme}) => theme.colors.blue.c600 };
    border-right: solid 16px ${ ({theme}) => theme.colors.blue.c600 };
  }
  ${cusMQ(1480)} {
    width: 1280px;
    align-self: center;
  }
`
const S_div_01 = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
  /* border-left: solid 1px; */
  border-top: solid 4px ${ ({theme}) => theme.colors.blue.c600 };
  border-bottom: solid 2px ${ ({theme}) => theme.colors.blue.p500 };
  border-left: solid 2px ${ ({theme}) => theme.colors.blue.p500 };
  border-right: solid 4px ${ ({theme}) => theme.colors.blue.c600 };
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  background-image: url(${ ({url}) => url });
  background-color: ${ ({theme}) => theme.colors.blue.c200 };
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 64px;
  height: 64px;
  /* box-shadow: -4px 8px 16px ${ ({theme}) => theme.colors.blue.c300 }; */
  ${cusTR('.2s')}
  ${cusMQ(768)} {
    width: 80px;
    height: 80px;

  }
`
const S_div_02 = styled.div`
  /* position: absolute; */
  /* top: 16px; */
  width: 100%;
  background: ${ ({theme}) => theme.colors.yellow.c100 };
  padding: 16px 0 0 0;
  border: solid 8px ${ ({theme}) => theme.colors.yellow.c300 };
  /* border-bottom: solid 8px ${ ({theme}) => theme.colors.yellow.c300 }; */
  /* border-bottom: solid 4px ${ ({theme}) => theme.colors.blue.c600 }; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const S_div_03 = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* border-top: solid 2px ${ ({theme}) => theme.colors.yellow.c200 }; */
`
const S_div_04 = styled.div`
  padding: 16px 16px;
  cursor: pointer;
  border: solid 8px ${ ({theme, on}) => on === 'y' ? theme.colors.aqua.c600 : theme.colors.gray.c200 };
  background: ${ ({theme}) => theme.colors.white };
  width: fit-content;
  width: 100%;
  /* min-height: 240px; */
  min-height: ${ ({l}) => l === 'y' ? '100%' : '280px' };
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${ ({jf}) => jf === 'y' ? 'flex-start' : 'center' };
  align-items: ${ ({jf}) => jf === 'y' ? 'flex-start' : 'center' };
  box-shadow: 4px 4px 8px ${ ({theme}) => theme.colors.blackShadow2 };
  ${cusTR('.1s')}
  opacity: ${ ({on}) => on === 'y' ? '1' : '.6' };
  gap: 16px;
  border-top-left-radius: ${ ({l}) => l === 'y' ? '24px' : '0' };
  border-top-right-radius: ${ ({l}) => l === 'y' ? '24px' : '0' };
  border-bottom-right-radius: ${ ({l}) => l === 'y' ? '0' : '24px' };
  border-bottom-left-radius: ${ ({l}) => l === 'y' ? '0' : '24px' };

  &:hover {
    border: solid 8px ${ ({theme}) => theme.colors.yellow.p500 };
  }
    /* padding-bottom: ${ ({l}) => l === 'y' ? '16px' : '48px' }; */

  ${cusMQ(768)} {
    min-height: 240px;
    border-top-left-radius: ${ ({l}) => l === 'y' ? '24px' : '0' };
    border-top-right-radius: ${ ({l}) => l === 'y' ? '0' : '24px' };
    border-bottom-right-radius: ${ ({l}) => l === 'y' ? '0' : '24px' };
    border-bottom-left-radius: ${ ({l}) => l === 'y' ? '24px' : '0' };
    padding-left: 24px;
    height: 100%;
  }
`
const S_div_05 = styled.div`
  /* display: flex;
  flex-direction: row; */
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  
  ${cusMQ(768)} {
    grid-template-columns: 1.4fr 4fr;
  }
  
`
const S_div_06 = styled.div`
  /* margin-top: 8px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`
const S_div_07 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
`
const S_div_08 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  min-height: 112px;
  
  ${cusMQ(1024)} {
    flex-direction: row;
  }
`
const S_div_09 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  /* padding: 24px; */
  position: relative;
  
  ${cusMQ(1160)} {
    flex-direction: row;

  }
`
const S_div_10 = styled.div`
  font-size: 64px;
  font-weight: 900;
  line-height: .84;
  border-radius: 50%;
  overflow: hidden;
  /* ${cusTR('.1s')} */
  position: absolute;
  top: 50%;
  width: 56px;
  opacity: ${ ({play}) => play === 'y' ? '1' : '0'};
  height: ${ ({play}) => play === 'y' ? '56px' : '0'};
  transform-origin: 50% 50%;
  animation-name: ${rotate_ani_01} ;
  animation: ${rotate_ani_01} 1s linear ${ ({play}) => play === 'y' ? 'infinite' : 'none'};
  color: ${ ({theme}) => theme.colors.aqua.c600 };
`
const S_h2_01 = styled.h2`
  font-size: 24px;
  text-align: center;
  font-weight: 800;
  color: ${ ({theme}) => theme.colors.red.p500 };
  line-height: 1;
  padding: 8px;
  border-top: solid 2px ${ ({theme}) => theme.colors.red.p500 };
  border-bottom: solid 2px ${ ({theme}) => theme.colors.red.p500 };
  margin-bottom: 8px;
`
const S_h3_01 = styled.h3`
  height: ${ ({tem}) => tem === 'y' ? 'fit-content' : '0px' };
  overflow: hidden;
  ${cusTR('.1s')}
  opacity: ${ ({tem}) => tem === 'y' ? '1' : '0' };
  position: ${ ({tem}) => tem === 'y' ? 'relative' : 'absolute' };
  text-align: center;
  font-size: 16px;
  color: ${ ({theme}) => theme.colors.red.p500 };
  padding: 8px;
  line-height: 1;
  border-radius: 16px;
  border: ${ ({tem}) => tem === 'y' ? 'solid 2px' : 'none'};
  width: 100%;

`
const S_p_01 = styled.p`
  padding: 14px;
  font-weight: 600;
  color: ${ ({theme}) => theme.colors.red.c600 };
  text-align: center;
  width: 100%;
`
const S_p_02 = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 600;
  color: ${ ({theme, on}) => on === 'y' ? theme.colors.brown.c700 : theme.colors.gray.c200 };
  font-size: 20px;
  padding: 8px 16px;
`
const S_img_01 = styled.img`
  ${cusTR('.1s')}
  width: 48px;
  height: 48px;
  opacity: ${ ({on}) => on === 'y' ? '1' : '.3' };
`
const S_inpt_01 = styled.input`
  background: ${ ({theme}) => theme.colors.blackShadow5 };
  border: none;
  width: 120px;
  border-bottom: solid 4px ${ ({theme, on}) => on === 'y' ? theme.colors.aqua.c600 : theme.colors.gray.c200 };
  border-left: solid 1px ${ ({theme, on}) => on === 'y' ? theme.colors.aqua.c600 : theme.colors.gray.c200 };
  border-top: solid 1px ${ ({theme, on}) => on === 'y' ? theme.colors.aqua.c600 : theme.colors.gray.c200 };
  border-right: solid 4px ${ ({theme, on}) => on === 'y' ? theme.colors.aqua.c600 : theme.colors.gray.c200 };
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  height: 32px;
  padding-left: 12px;
  font-size: 14px;
  line-height: 1;
  font-weight: 600;
  color: ${ ({theme, on}) => on === 'y' ? theme.colors.gray.c600 : theme.colors.gray.c200 };
  &:focus {
    outline: 0;
  }
  &:disabled {
    background: ${ ({theme}) => theme.colors.gray.c200 };
  }
`
const S_label_01 = styled.label`
  font-size: 14px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  /* margin-left: 8px; */
  color: ${ ({theme, on}) => on === 'y' ? theme.colors.brown.c700 : theme.colors.gray.c200 };
`
const S_btn_01 = styled.button`
  font-size: 32px;
  border: none;
  background: ${ ({theme, on}) => on === 'y' ? theme.colors.aqua.c600 : theme.colors.gray.c200 };
  color: ${ ({theme}) => theme.colors.white };
  line-height: 1;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  ${cusTR('.1s')}
  cursor: pointer;
  
  &:hover {
    background: ${ ({theme, on}) => on === 'y' ? theme.colors.aqua.c700 : theme.colors.gray.c200 };

  }
`
const S_btn_02 = styled.button`
  border: none;
  background: ${ ({theme, a}) => a === 'y' ? theme.colors.gray.c400 : theme.colors.aqua.c600 };
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 24px;
  color: ${ ({theme}) => theme.colors.white };
  cursor: pointer;
  ${cusTR('.1s')}
  
  &:hover {
    cursor: ${ ({a}) => !a ? 'not-allowed' : 'pointer' };
    background: ${ ({theme, a}) => a === 'y' ? theme.colors.gray.c400 : theme.colors.aqua.c700 };

  }
`
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾


// ________________________________
const PainelE = () => {

  // ◡
  // ◠
  // ◜
  // ◝
  // ◞
  // ◟


  const [onG, setOnG]                   = useState('n')
  const [onR, setOnR]                   = useState('n')
  const [onPesquisa, setOnPesquisa]     = useState('n')
  const [vInpt_01, setVInpt_01]         = useState('')
  const [perfilImage, setPerfilImage]   = useState('/person.svg')
  const [btnAddOn, setBtnAddOn]         = useState(true)
  const [nomeRest1, setNomeRest1]         = useState('_')
  const [codeRest1, setCodeRest1]         = useState('_')
  const [nomeRest2, setNomeRest2]         = useState('_')
  const [codeRest2, setCodeRest2]         = useState('_')
  const [hasError, setHasError]         = useState(false)
  const [msgError, setMsgError]         = useState('')
  const [hasError2, setHasError2]         = useState(false)
  const [msgError2, setMsgError2]         = useState('')
  const [hasError3, setHasError3]         = useState(false)
  const [msgError3, setMsgError3]         = useState('')
  const [iniciou, setIniciou]           = useState(false)
  const [hi_1, setHi_1]                 = useState('')
  const [hf_1, setHf_1]                 = useState('')
  const [hi_2, setHi_2]                 = useState('')
  const [hf_2, setHf_2]                 = useState('')
  const [hi_valid_1, setHi_valid_1]     = useState('')
  const [hf_valid_1, setHf_valid_1]     = useState('')
  const [hi_valid_2, setHi_valid_2]     = useState('')
  const [hf_valid_2, setHf_valid_2]     = useState('')
  const [validTotal, setValidTotal]     = useState(false)
  const [validTotal2, setValidTotal2]     = useState(false)
  const [objDadosR, setObjDadosR]       = useState([])
  const [doisRest, setDoisRest]         = useState(false)
  const [umRest, setUmRest]         = useState(false)
  const [validHora2, setValidHora2]     = useState(false)
  const [completeRest, setCompleteRest] = useState(false)



useEffect(() => {

  
  // objDadosR.map((v, i) => {
  //   if(v.hasOwnProperty('error')) {
  //     console.log('[ERRO]')
  //     setHasError(true)
  //     setMsgError(v.error)
  //   }
  // })

  if (onG === 'y') {
    setCompleteRest(true)
  } else {
    objDadosR.length >=1 ? setCompleteRest(false) : setCompleteRest(true)
    validarHora()
    console.log('VALIDAR -----------', validHora2)
  }

  
  console.log('objDadosR =>', objDadosR)
  console.log('objDadosR.length =>', objDadosR.length)
}, [objDadosR])

useEffect(() => {
  
  console.log('VALIDAR ------TRUE-----', validHora2)
}, [validHora2])

  useEffect(() => {
    // console.log(objDadosR)
    hi_1.length === 5 ? setHi_valid_1(true) : ''
    hf_1.length === 5 ? setHf_valid_1(true) : ''
    if(hi_valid_1 && hf_valid_1) {
      let ai = hi_1.substring(0, 2)
      let bi = hi_1.substring(3, 5)
      
      let af = hf_1.substring(0, 2)
      let bf = hf_1.substring(3, 5)
      
      if(ai === af) { bi >= bf ? setValidTotal(false) : setValidTotal(true) }
      else { setValidTotal(true) }


    }
    
    hi_2.length === 5 ? setHi_valid_2(true) : ''
    hf_2.length === 5 ? setHf_valid_2(true) : ''
    
    if(hi_valid_2 && hf_valid_2) {
      let ai = hi_2.substring(0, 2)
      let bi = hi_2.substring(3, 5)
      
      let af = hf_2.substring(0, 2)
      let bf = hf_2.substring(3, 5)
      
      if(ai === af) { bi >= bf ? setValidTotal2(false) : setValidTotal2(true) }
      else { setValidTotal2(true) }
    }

    console.log('hi_1 =>', hi_1, hi_valid_1)
    console.log('hf_1 =>', hf_1, hf_valid_1)
    console.log('hi_2 =>', hi_2, hi_valid_2)
    console.log('hf_2 =>', hf_2, hf_valid_2)
    
      // doisRest ? hf_2.length === 5 ? setHf_valid_2(true) : '' : ''

  }, [hi_1, hf_1, hi_2, hf_2])


  const validarHora = () => {

    
    /*
      --  º------------------------------------------------º  => 24 hrs
      --                |--------------------|                => HI1
      --    |---------|                                       => H12
      --                                        |---------|   => HI3
      --  -------|                                    |-----  => HI4
      --  -----------------|                          |-----  => HI5
      --              |-------------|                         => HI6
      --                                  |--------|          => HI7
      --                      |---------|                     => HI8
      --                 

      00:00
      00: 
      23:
      __  HI2 =>    hi2  <  hi1         __  HI6 =>    hi2  <  hi1
      __            hf2  <  hi1         __            hf2  >  hi1
      __    OK      hi2  <  hf1         __     X      hi2  <  hf1
      __            hf2  <  hf1         __            hf2  <  hf1

      __  HI3 =>    hi2  >  hi1         __  HI7 =>    hi2  >  hi1
      __            hf2  >  hi1         __            hf2  >  hi1
      __    OK      hi2  >  hf1         __     X      hi2  <  hf1
      __            hf2  >  hf1         __            hf2  >  hf1

      __  HI4 =>    hi2  >  hi1         __  HI8 =>    hi2  >  hi1
      __            hf2  <  hi1         __            hf2  >  hi1
      __    OK      hi2  >  hf1         __     X      hi2  <  hf1
      __            hf2  <  hf1         __            hf2  <  hf1

      __  HI5 =>    hi2  >  hi1
      __            hf2  >  hi1
      __     X      hi2  >  hf1
      __            hf2  <  hf1

      hora inicial:
      hor_ai2 === hor_ai1 {
        
      } hor_ai2 === hor_af2 {
        
      }
      hor_ai2 < hor_ai1

    */


      let hor_ai1 = hi_1.substring(0, 2)
      let min_ai1 = hi_1.substring(3, 5)
      let hor_af1 = hf_1.substring(0, 2)
      let min_af1 = hf_1.substring(3, 5)
  
      let hor_ai2 = hi_2.substring(0, 2)
      let min_ai2 = hi_2.substring(3, 5)
      let hor_af2 = hf_2.substring(0, 2)
      let min_af2 = hf_2.substring(3, 5)

      let hrs = {
        h1: {
          i: { h: Number(hor_ai1), m: Number(min_ai1) },
          f: { h: Number(hor_af1), m: Number(min_af1) },
        },
        h2: {
          i: { h: Number(hor_ai2), m: Number(min_ai2) },
          f: { h: Number(hor_af2), m: Number(min_af2) },
        }
      }

      if (hi_2 === '') {
        console.log('SALVAR')
        return ''
      } else {
        if(hrs.h2.i.h > hrs.h1.i.h) { 

        }
        // console.log('Hora inicial 1 =>', hrs.h1.i.h, ' -', 'minuto inicial 1 =>', hrs.h1.i.m )
        // console.log('Hora final 1 =>', hrs.h1.f.h, ' -', 'minuto final 1 =>', hrs.h1.f.m )
        
        // console.log('Hora inicial 2 =>', hrs.h2.i.h, ' -', 'minuto inicial 2 =>', hrs.h2.i.m )
        // console.log('Hora final 2 =>', hrs.h2.f.h, ' -', 'minuto final 2 =>', hrs.h2.f.m )
  
        // console.log(Number( hrs.h1.i.h))
        // console.log(completeRest)
      }


      // if (
      //   hor_ai2 < hor_ai1 &&
      //   hor_af2 < hor_ai1 &&
      //   hor_ai2 < hor_af1 &&
      //   hor_af2 < hor_af1 ) {
      //     setValidHora2(true)
      //     setCompleteRest(true)
      //     // console.log('VALIDAR ------TRUE-----', validHora2)
      //     console.log('[ok] - 1 => anterior', validHora2)
      //     return ''
      // } else {
      //   if (
      //     hor_ai2 > hor_ai1 &&
      //     hor_af2 > hor_ai1 &&
      //     hor_ai2 > hor_af1 &&
      //     hor_af2 > hor_af1 ) {
      //       setValidHora2(true)
      //       setCompleteRest(true)
      //       // console.log('VALIDAR -----------', validHora2)
      //       console.log('[ok] - 2 => posterior', validHora2)
      //       return ''
      //   } else {
      //     if (
      //       hor_ai2 > hor_ai1 &&
      //       hor_af2 < hor_ai1 &&
      //       hor_ai2 > hor_af1 &&
      //       hor_af2 < hor_af1 ) {
      //         setValidHora2(true)
      //         setCompleteRest(true)
      //         // console.log('VALIDAR -----------', validHora2)
      //         console.log('[ok] - 3 => hi posterior e hf anterior', validHora2)
      //         return ''
      //     }
      //     if (
      //       hor_ai2 < hor_ai1 &&
      //       hor_af2 < hor_ai1 &&
      //       hor_ai2 === hor_af1 && 
      //       hor_af2 > hor_af1 ) {
      //         if (min_ai2 > min_af1) {
      //           setValidHora2(true)
      //           setCompleteRest(true)
      //           console.log('[ok] - 4 => posterior', validHora2)
      //           return ''
      //         }
      //         // console.log('VALIDAR -----------', validHora2)
      //     }
      //     if (
      //       hor_ai2 < hor_ai1 &&
      //       hor_af2 < hor_ai1 &&
      //       hor_ai2 > hor_af1 &&
      //       hor_af2 > hor_af1 ) {
      //         setValidHora2(true)
      //         setCompleteRest(true)
      //         // console.log('VALIDAR -----------', validHora2)
      //         console.log('[ok] - 5 => posterior', validHora2)
      //         return ''
      //       } else {
      //         setValidHora2(false)
      //         setCompleteRest(false)
      //         console.log('[FALSE]', validHora2)
      //         return ''
      //       // console.log('VALIDAR -----------', validHora2)
      //     }
      //     }

      //   if( hor_af2 === hor_ai1 ) {
      //     min_af2 < min_ai1 ? setValidHora2(true) && setCompleteRest(false) : setValidHora2(false)  && setCompleteRest(true)
      //   }
      //   if( hor_ai2 === hor_af1 ) {
      //     min_ai2 > min_af1 ? setValidHora2(true) && setCompleteRest(false) : setValidHora2(false)  && setCompleteRest(true)
      //   }
        // setValidHora2(false)
        // setCompleteRest(true)
        // console.log('VALIDAR ----FALSE-----', validHora2)
     // }


  }


  const test_on = (v) => {
    if (v.length <= 8) {
      setBtnAddOn(false)
      setVInpt_01(v.toUpperCase())
    }
    if (v.length === 0) {
      setBtnAddOn(true)
      setVInpt_01(v.toUpperCase())
    }
  }
  const hdl_onG = () => {
    setOnG('y')
    setOnR('n')
    setBtnAddOn(true)
    setCompleteRest(true)
    setObjDadosR([])

  }
  const hdl_onR = () => {
    setOnR('y')
    setOnG('n')
    test_on(vInpt_01)
    objDadosR.length >=1 ? setCompleteRest(true) : setCompleteRest(false)
  }
  const hdl_inpt_01 = (e) => {
    test_on(e.target.value)
  }
  const hdl_inpt_hi_1 = (e) => { setHi_1(e.target.value) }
  const hdl_inpt_hf_1 = (e) => { setHf_1(e.target.value) }

  const hdl_inpt_hi_2 = (e) => { setHi_2(e.target.value) }
  const hdl_inpt_hf_2 = (e) => { setHf_2(e.target.value) }

  const fechar1 = () => {
    setUmRest(true)
    objDadosR.splice(0, 1)
    if(doisRest) {
      setUmRest(false)
      setDoisRest(false)
      setIniciou(false)
      hasError3 ? setHasError3(false) : ''
    }
  }
  const fechar2 = () => {
    setDoisRest(true)
    if(umRest) {
      setUmRest(false)
      setIniciou(false)
      objDadosR.splice(0, 1)
      hasError3 ? setHasError3(false) : ''
    } else {
      objDadosR.splice(1, 1)
    }

  }

  const hdl_pesquisar = async () => {
    console.log(objDadosR.length)
    setIniciou(true)
    setOnPesquisa('y')
    setHasError(false)
    await axiosSimp({
      method: 'GET',
      url: `/findRestaurantByCode/${vInpt_01}`,
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Authorization", 
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
          "Content-Type": "application/json;charset=UTF-8"
      }
    }).then(resp1 => resp1.data).then(
      (resp2) => {
        setOnPesquisa('n')
        if(resp2.hasOwnProperty('error')) {
          // console.log('[ERRO]')
          if(objDadosR.length < 1) {
            setHasError(true)
            setMsgError(resp2.error)
          } 
          if(objDadosR.length === 1) {
            setHasError2(true)
            setMsgError2(resp2.error)
            // setDoisRest(true)
          }
        } else {
          if(objDadosR.length < 2) {
            if(objDadosR.length < 1) {
              setHasError(false)
              setNomeRest1(resp2.nomeRestaurant)
              setCodeRest1(resp2.code)
              setObjDadosR([{...resp2}])
              setDoisRest(true)
              
            }
            if(objDadosR.length === 1) {
              if(umRest) {
                setUmRest(false)
                setHasError(false)
                setNomeRest1(resp2.nomeRestaurant)
                setCodeRest1(resp2.code)
                setObjDadosR([{...resp2}, ...objDadosR])
                setHasError3(false)
              } else {
                setHasError2(false)
                setNomeRest2(resp2.nomeRestaurant)
                setCodeRest2(resp2.code)
                setObjDadosR([...objDadosR, {...resp2}])
                setDoisRest(false)
              }
            }
          } else {
            setHasError3(true)
            setMsgError3('Máximo 2 restaurantes!')
          }
        }
        // console.log(resp2)
        // console.log(objDadosR)
      }
    )

  }

  const hdl_completar = async () => {
    validarHora()
  }
  return (
  <>
    <S_main>
      <MenuzinE />
      <S_div_01 url={perfilImage} />
      <S_section_01>

      <S_div_02>
        <S_h2_01> {`Atenção`} </S_h2_01>
        <S_p_01>
          {`Para completar o cadastro, é preciso informar se quer trabalhar diretamente para a GetLogClub ou se quer trabalhar para algum restaurante cadastrado, nesse caso forneça o código do restaurante, no máximo 2 restaurantes!`}
        </S_p_01>
        <S_div_03>

          <S_p_02 on={'y'}> {`Selecione para quem quer trabalhar:`} </S_p_02>

          <S_div_05>

            <S_div_04 on={onG} l={'y'} onClick={hdl_onG}>
              <S_p_02 on={true ? 'y' : 'n'}> {`GetLogClub`} </S_p_02>
              <S_img_01 on={onG} src="/raposa.svg" />
            </S_div_04>

            <S_div_04 on={onR} jf={'y'} onClick={hdl_onR}>
              <S_p_02 on={true ? 'y' : 'n'}> {`Restaurante Cadastrado`} </S_p_02>
              <S_div_08>
                <S_div_06>
                  <S_label_01 on={onR}> {`Adicionar Código:`} </S_label_01>
                  <S_div_07>
                    <S_inpt_01 onChange={hdl_inpt_01} value={vInpt_01} on={onR} disabled={onR === 'y' ? false : true} />
                    <S_btn_01 onClick={hdl_pesquisar} disabled={btnAddOn} on={btnAddOn ? 'n' : 'y'}> {`+`} </S_btn_01>
                  </S_div_07>
                </S_div_06>

                <S_div_09>
                  <S_div_10 play={onPesquisa}> {`◠`} </S_div_10>

                    <S_h3_01 tem={onPesquisa === 'y' ? 'n' : hasError ? 'y' : 'n' }>{msgError}</S_h3_01>
                    <S_h3_01 tem={onPesquisa === 'y' ? 'n' : hasError2 ? 'y' : 'n' }>{msgError2}</S_h3_01>
                    <S_h3_01 tem={onPesquisa === 'y' ? 'n' : hasError3 ? 'y' : 'n' }>{msgError3}</S_h3_01>

                    <CardRestaurant fechar={fechar1}
                      nomeRest={nomeRest1}
                      codeRest={codeRest1}
                      hdlHi={hdl_inpt_hi_1}
                      hdlHf={hdl_inpt_hf_1}
                      hi={hi_1} hf={hf_1} validTotal={validTotal}
                      ocultar2={umRest? 'n' : iniciou ? onPesquisa === 'y' ? 'n' : !hasError ? 'y' : 'n' : 'n' }
                    />

                    <CardRestaurant fechar={fechar2}
                      ocultar2={doisRest ? 'n' : iniciou ? onPesquisa === 'y' ? 'n' : !hasError ? 'y' : 'n' : 'n' }
                      nomeRest={nomeRest2}
                      codeRest={codeRest2}
                      hdlHi={hdl_inpt_hi_2}
                      hdlHf={hdl_inpt_hf_2}
                      hi={hi_2} hf={hf_2} validTotal={validTotal2}
                    />

                </S_div_09>
              </S_div_08>
            </S_div_04>
          </S_div_05>
          
          {/* <S_btn_02 onClick={hdl_completar} disabled={completeRest} a={completeRest ? 'y' : 'n'}> {`completar cadastro`} </S_btn_02> */}
          <S_btn_02 onClick={hdl_completar} a={'n'}> {`completar cadastro`} </S_btn_02>

        </S_div_03>



      </S_div_02>

      </S_section_01>
    </S_main>
  </>
);

}
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

export default PainelE;