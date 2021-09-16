// ________________________________________________________________
import Cookies from 'js-cookie';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  cusMQ, cusTR, fontF,
  S_main_base, Input_01, Chk_01,
} from "../../config/theme";
import { axiosSimp } from '../services/axios';
import Inpt_01 from './inpt_01';
import { useRouter } from 'next/router'
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



// ________________________________________________________________
const S_main = styled(S_main_base)`
`
const S_section_01 = styled.section`
  width: 100%;
  background: ${ ({theme}) => theme.colors.white };
  border-left: solid 1px ${ ({theme}) => theme.colors.red.c300 };
  border-right: solid 1px ${ ({theme}) => theme.colors.red.c300 };
  box-shadow: 0 8px 16px ${ ({theme}) => theme.colors.blackShadow };
  padding: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${cusMQ(1024)} {
    width: 960px;
  }
`
const S_form = styled.form`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  
  ${cusMQ(560)} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas: 
      "desc desc desc desc desc desc desc desc"
      "tit1 tit1 tit1 tit1 tit1 tit1 tit1 tit1"
      "a    a    a    a    a    a    a    a"
      "b    b    b    b    c    c    c    c"
      "d    d    d    d    e    e    e    e"
      "f    f    f    f    o    o    o    o"
      "g    g    g    g    g    g    g    g"
      "sub1 sub1 sub1 sub1 sub1 sub1 sub1 sub1"
      "h    h    h    h    i    i    j    j"
      "k    k    l    l    m    m    n    n"
      "hr1  hr1  hr1  hr1  hr1  hr1  hr1  hr1 "
      "sub2 sub2 sub2 sub2  sub2 sub2 sub2 sub2"
      "p    p    p    p    p    p    p    p"
      "hr2  hr2  hr2  hr2  hr2  hr2  hr2  hr2 "
      "tit2 tit2 tit2 tit2 tit2 tit2 tit2 tit2"
      "q    q    q    q    r    r    r    r"
      "s    s    s    s    t    t    t    t"
      "v    v    v    v    v    v    v    v"
      ".    .    .    .    .    u    u    u"
    ;
  }
  
  ${cusMQ(1024)} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas: 
      "desc desc desc desc desc desc desc desc"
      "tit1 tit1 tit1 tit1 tit1 tit1 tit1 tit1"
      "a    a    a    a    b    b    b    b"
      "d    d    d    d    e    e    c    c"
      "g    g    g    g    f    f    o    o"
      "sub1 sub1 sub1 sub1 sub1 sub1 sub1 sub1"
      "h    h    h    h    i    i    j    j"
      "k    k    l    l    m    m    n    n"
      "hr1  hr1  hr1  hr1  hr1  hr1  hr1  hr1 "
      "sub2 sub2 sub2 sub2 sub2 sub2 sub2 sub2"
      "p    p    p    p    p    p    .    ."
      "hr2  hr2  hr2  hr2  hr2  hr2  hr2  hr2 "
      "tit2 tit2 tit2 tit2 tit2 tit2 tit2 tit2"
      "q    q    r    r    s    s    t    t"
      "v    v    v    v    v    v    v    v"
      ".    .    .    .    .    u    u    u"
    ;
  }
`
const S_btn_01 = styled.button`
  ${cusTR('.2s')}
  grid-area: ${ ({ga}) => ga };
  padding: 8px 16px 8px 16px;
  font-weight: 600;
  border: none;
  width: 100%;
  background: ${ ({theme}) => theme.colors.aqua.c600 };
  color: ${ ({theme}) => theme.colors.green.p300 };
  border-radius: 8px;
  box-shadow: 2px 4px 8px ${ ({theme}) => theme.colors.blackShadow3 };
  cursor: pointer;
  opacity: ${ ({disa}) => !disa ? '.2' : '1' };
  
  &:hover {
    background: ${ ({theme}) => theme.colors.aqua.c700 };
  }
  
`
const S_inpt_upload = styled.input`
  display: none;
`
const S_label_upload = styled.label`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 24px;
  border-radius: 8px;
  background: ${ ({theme}) => theme.colors.aqua.c600 };
  gap: 8px;
  cursor: pointer;
  color: ${ ({theme}) => theme.colors.green.p300 };
  margin-top: 2px;
  font-weight: 600;
  font-size: 14px;
  ${cusTR('.2s')}
  
  &:hover {
    background: ${ ({theme}) => theme.colors.aqua.c700 };
  }
`
const S_txt_label = styled.p`
  line-height: 1;
  color: ${ ({theme}) => theme.colors.brown.c600 };
  top: -8px;
  font-weight: 600;
  padding: 2px 8px 2px 8px;
`
const S_div_01 = styled.div`
  grid-area: ${({ga}) => ga};
  font-size: 12px;
  display: flex;
  transform: translateY(-8px);
  flex-direction: row;
`
const S_div_02 = styled.div`
  grid-area: ${ ({ga}) => ga };
  display: grid;
  grid-template-columns: 80px 1fr;
  width: 100%;
  margin-bottom: 16px;

  ${cusMQ(560)} {
    grid-template-columns: 120px 1fr;
  }
  /* ${cusMQ(1024)} {
    width: 64%;
  } */
`
const S_div_03 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-right: solid 1px ${ ({theme}) => theme.colors.brown.c600 };
  border-left: ${ ({theme, on}) => on === 'y' ? 'solid 1px' + theme.colors.brown.c600 : 'solid 1px' + theme.colors.white };
  border-bottom: ${ ({theme, on}) => on === 'y' ? 'solid 1px' + theme.colors.brown.c600 : 'solid 1px' + theme.colors.white };
  border-top: ${ ({theme, on}) => on === 'y' ? 'solid 16px' + theme.colors.brown.c600 : 'solid 16px' + theme.colors.white };
  cursor: pointer;
  height: 120%;
  ${cusTR('.2s')}
`
const S_div_04 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  align-items: center;
  cursor: pointer;
  height: 120%;
  padding-bottom: 8px;
  border-right: ${ ({theme, on}) => on === 'y' ? 'solid 1px' + theme.colors.brown.c600 : 'solid 1px' + theme.colors.white };
  border-bottom: ${ ({theme, on}) => on === 'y' ? 'solid 1px' + theme.colors.brown.c600 : 'solid 1px' + theme.colors.white };
  border-top: ${ ({theme, on}) => on === 'y' ? 'solid 16px' + theme.colors.brown.c600 : 'solid 16px' + theme.colors.white };
  ${cusTR('.2s')}
`
const S_div_05 = styled.div`
  
`
const S_div_06 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  /* padding: 24px; */
  width: 100%;
  grid-area: ${ ({ga}) => ga };
`
const S_div_07 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  /* justify-content: center; */
  align-items: center;
  gap: 8px;
`
const S_div_08 = styled.div`
  width: fit-content;
`
const S_div_09 = styled.div`
  /* padding: 0 8px; */
  margin-left: 8px;
  /* border-bottom: solid 1px; */
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
`
const S_div_10 = styled.div`
  font-size: 12px;
  line-height: 1;
  width: fit-content;
  height: fit-content;
  padding: 4px 8px;
  border: solid 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  color: ${ ({theme}) => theme.colors.aqua.c600 };
  ${cusTR('.2s')}
  font-weight: 600;
  
  width: 100%;
  
  ${cusMQ(560)} {
    width: calc(50% - 3px);
    
  }

  &:hover {
    background: ${ ({theme}) => theme.colors.aqua.c100 };
  }
`
const S_div_11 = styled.div`
  width: fit-content;
  height: fit-content;
  font-weight: 900;
  margin-left: 8px;
`
const S_h1 = styled.h1`
  width: 100%;
  padding: 8px;
  line-height: 1.3;
  font-weight: 900;
  font-size: 22px;
  color: ${ ({theme}) => theme.colors.brown.c700 };
  background: ${ ({theme}) => theme.colors.brown.c100 };
  text-align: center;
  
  ${cusMQ(425)} {
    font-size: 24px;
  }
  ${cusMQ(600)} {
    font-size: 28px;
  }
  ${cusMQ(768)} {
    font-size: 32px;
  }
`
const S_h2 = styled.h2`
  grid-area: ${ ({ga}) => ga };
  width: 100%;
  padding: 8px;
  line-height: 1.3;
  font-weight: 600;
  font-size: 16px;
  color: ${ ({theme}) => theme.colors.brown.c100 };
  background: ${ ({theme}) => theme.colors.brown.c700 };
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  text-align: center;

  ${cusMQ(425)} {
    font-size: 18px;
  }
  ${cusMQ(600)} {
    font-size: 22px;
  }
  ${cusMQ(768)} {
    font-size: 26px;
  }
`
const S_h3 = styled.h3`
  grid-area: ${ ({ga}) => ga };
  width: 100%;
  line-height: 1.4;
  font-weight: 600;
  padding: 4px;
  font-size: 12px;
  color: ${ ({theme}) => theme.colors.gray.c400 };
  border-bottom: solid 1px ${ ({theme}) => theme.colors.gray.c400 };
  /* background: ${ ({theme}) => theme.colors.brown.c600 }; */
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;


  ${cusMQ(425)} {
    font-size: 14px;
  }
  ${cusMQ(600)} {
    font-size: 18px;
  }
  ${cusMQ(768)} {
    font-size: 22px;
  }
`
const S_p_01 = styled.p`
  ${cusTR('.2s')}
  font-size: 14px;
  color: ${ ({theme}) => theme.colors.brown.c700 };
  font-weight: 500;
  grid-area: ${ ({ga}) => ga };
  
  ${cusMQ(425)} {
    font-size: 16px;
  }
  ${cusMQ(768)} {
    font-size: 18px;
  }
`
const S_p_02 = styled.p`
  font-size: 12px;
  color: ${ ({theme, on}) => on === 'y' ? theme.colors.red.c600 : theme.colors.white };
  font-weight: 600;
  position: ${ ({on}) => on === 'y' ? 'relative' : 'absolute' };
  padding: 8px 16px;
  /* width: 100%; */
  text-align: center;
  /* border-bottom-right-radius: 8px;
  border-top-right-radius: 8px; */
  border-left:  ${ ({theme, on}) => on === 'y' ? 'solid 4px' + theme.colors.red.p500 : 'none' };
  border-bottom:  ${ ({theme, on}) => on === 'y' ? 'solid 1px' + theme.colors.red.c200 : 'none' };
  border-top:  ${ ({theme, on}) => on === 'y' ? 'solid 1px' + theme.colors.red.c200 : 'none' };
  background: ${ ({theme, on}) => on === 'y' ? theme.colors.red.c100 : theme.colors.white };
  width: ${ ({on}) => on === 'y' ? 'fit-content' : '0px' };
  height: ${ ({on}) => on === 'y' ? 'fit-content' : '0px' };
  opacity: ${ ({on}) => on === 'y' ? '1' : '0' };
  ${cusTR('.2s')}
`
const S_img_01 = styled.img`
  width: 48%;
  opacity: ${ ({on}) => on === 'y' ? '1' : '.4'};
  margin-bottom: 8px;
`
const S_hr_01 = styled.hr`
  width: 100%;
  stroke: ${ ({theme}) => theme.colors.gray.c400 };
  transform: translateY(-8px);
  grid-area: ${ ({ga}) => ga };
`
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



// ________________________________________________________________
const r_nome    = /^([\S\s]+)/i
const r_rg      = /(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)/i
const r_cpf     = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
const r_email   = /^[a-z0-9_.-]+[@][a-z0-9-]+[\.][a-z0-9-]+[\.]?[a-z0-9-]+$/i
const r_tel     = /^([(]?[1-9]{2}[)]?)[\s]?([0-9]{1})?[\s]?[-]?[\s]?([0-9]{4})[\s]?[-]?[\s]?([0-9]{4})$/i
const r_ano     = /^[\d]{4}$/i
const r_placa   = /[A-Z]{3}-?[0-9][0-9A-Z][0-9]{2}/
const r_cep     = /^\d{5}-?\d{3}$/
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



const Ecad = () => {
  const router = useRouter()

  // ________________________________________________
  const [pass, setPass]                           = useState('')
  const [nome, setNome]                           = useState('')
  const [nomeValid, setNomeValid]                 = useState(false)
  const [rg, setRg]                               = useState('')
  const [rgValid, setRgValid]                     = useState(false)
  const [cpf, setCpf]                             = useState('')
  const [cpfValid, setCpfValid]                   = useState(false)
  const [email, setEmail]                         = useState('')
  const [emailValid, setEmailValid]               = useState(false)
  const [tel_01, setTel_01]                       = useState('')
  const [tel_01Valid, setTel_01Valid]             = useState(false)
  const [data_nasc, setData_nasc]                 = useState('')
  const [data_nascValid, setData_nascValid]       = useState(false)
  const [rua, setRua]                             = useState('')
  const [ruaValid, setRuaValid]                   = useState(false)
  const [numero, setNumero]                       = useState('')
  const [numeroValid, setNumeroValid]             = useState(false)
  const [obs, setObs]                             = useState('')
  const [bairro, setBairro]                       = useState('')
  const [bairroValid, setBairroValid]             = useState(false)
  const [cidade, setCidade]                       = useState('')
  const [cidadeValid, setCidadeValid]             = useState(false)
  const [estado, setEstado]                       = useState('')
  const [estadoValid, setEstadoValid]             = useState(false)
  const [cep, setCep]                             = useState('')
  const [cepValid, setCepValid]                   = useState(false)
  const [tel_02, setTel_02]                       = useState('')
  const [tel_02Valid, setTel_02Valid]             = useState(false)
  const [restaurante, setRestaurante]             = useState('')
  const [restauranteValid, setRestauranteValid]   = useState(false)
  const [ano, setAno]                             = useState('')
  const [anoValid, setAnoValid]                   = useState(false)
  const [modelo, setModelo]                       = useState('')
  const [modeloValid, setModeloValid]             = useState(false)
  const [placa, setPlaca]                         = useState('')
  const [placaValid, setPlacaValid]               = useState(false)
  const [cor, setCor]                             = useState('')
  const [corValid, setCorValid]                   = useState(false)
  const [onG, setOnG]                             = useState(true)
  const [onR, setOnR]                             = useState(false)
  const [admin, setAdmin]                         = useState('[ENTREGADOR] - [GETLOGCLUB]')
  const [dadosCadUser, setDadosCadUser]           = useState(null)
  const [dadosCadVehicle, setDadosCadVehicle]     = useState(null)
  const [filesArrayNames, setFilesArrayNames]     = useState([])
  const [filesArrays, setFilesArrays]             = useState([])
  const [uploadValid, setUploadValid]             = useState(false)
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  const [valAdress, setValAdress] = useState(Number)
  const [valVehicle, setValVehicle] = useState(Number)
  const [valDados, setValDados] = useState(Number)
  const [valTotal, setValTotal] = useState(false)
  const [adressValid, setAdressValid] = useState(false)
  const [vahicleValid, setVehicleValid] = useState(false)
  const [docValid, setDocValid] = useState(false)
  const [inicial, setInicial] = useState(false)
  const [choiceValid, setChoiceValid] = useState(true)

  // ________________________________________________
  useEffect(() => { console.log('valTotal: (atual)', valTotal) }, [valTotal])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
  // ________________________________________________
  // useEffect(() => {
  //   console.log('valVehicle: (atual)', valVehicle)
  // }, [valVehicle])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
  // ________________________________________________
  // useEffect(() => {
  //   console.log('valDados: (atual)', valDados)
  // }, [valDados])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
  // ________________________________________________
  // useEffect(() => {
  //   console.log('valadres: (atual)', valAdress)
  // }, [valAdress])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾


  // ________________________________
  const _img_01 = useRef(null)
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________
  /* [ENTREGADOR] - [GETLOGCLUB]      |      [ENTREGADOR] - [RESTAURANTE] */
  const hdl_choice_G = () => {
    setRestauranteValid(true)
    setOnG(true)
    setOnR(false)
    setAdmin('[ENTREGADOR] - [GETLOGCLUB]');
    setRestaurante('')
    setChoiceValid(true)
  }
  const hdl_choice_R = () => {
    setRestauranteValid(false)
    setOnG(false)
    setOnR(true)
    setAdmin('[ENTREGADOR] - [RESTAURANTE]');
    setChoiceValid(false)
  }
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________________________
  useEffect(() => {
    setPass(Cookies.get('pass'))
    is_email_valid(Cookies.get('email'))
    setInicial(true)
  }, [])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾


  // ________________________________________________
  useEffect(() => {
    // console.log('________________________________');
    // console.log(admin)
    // console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
    if(dadosCadUser) {
      if(dadosCadUser.hasOwnProperty('error')) {
        setDadosCadVehicle(null)
      }
    }
    // console.log('________________________________');
    // console.log(dadosCadUser);
    // console.log(dadosCadVehicle);
    // console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  }, [admin, dadosCadVehicle, dadosCadUser])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________________________
  useEffect(() => {
    console.log(filesArrayNames);
  }, [filesArrayNames])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________________________
  useEffect(() => {
    if(inicial !== false) {
      allValidations()
      validandoTodos()
    }
    console.log('todos', valTotal)
  }, [
    rua, numero, bairro, cidade, estado, filesArrayNames,
    cep, ano, modelo, placa, cor, nome, choiceValid,
    rg, cpf, email, tel_01, data_nasc, tel_02
  ])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
  // ________________________________________________
  // useEffect(() => {
  //   adressValidation()
  // }, [rua, numero, bairro, cidade, estado, cep])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
  // ________________________________________________
  // useEffect(() => {
  //   vehicleValidation()
  // }, [ano, modelo, placa, cor])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  // ________________________________________________
  // useEffect(() => {
  //   dadosValidations()
  // }, [nome, rg, cpf, email, tel_01, data_nasc, tel_02])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________________________
  const is_nome_valid             = (v) => {
    setNome(v)
    v.match(r_nome) ? setNomeValid(true) : setNomeValid(false)
  }
  const is_rg_valid               = (v) => { 
    setRg(v)
    v.match(r_rg) ? setRgValid(true) : setRgValid(false) 
  }
  const is_cpf_valid              = (v) => { 
    setCpf(v)
    v.match(r_cpf) ? setCpfValid(true) : setCpfValid(false) 
  }
  const is_email_valid            = (v) => { 
    setEmail(v)
    v.match(r_email) ? setEmailValid(true) : setEmailValid(false) 
  }
  const is_tel_01_valid           = (v) => { 
    setTel_01(v)
    v.match(r_tel) ? setTel_01Valid(true) : setTel_01Valid(false) 
  }
  const is_rua_valid              = (v) => {
    setRua(v)
    v.match(r_nome) ? setRuaValid(true) : setRuaValid(false)
  }
  const is_numero_valid           = (v) => {
    setNumero(v)
    v.match(r_nome) ? setNumeroValid(true) : setNumeroValid(false)
  }
  const is_bairro_valid           = (v) => {
    setBairro(v)
    v.match(r_nome) ? setBairroValid(true) : setBairroValid(false)
  }
  const is_cidade_valid           = (v) => {
    setCidade(v)
    v.match(r_nome) ? setCidadeValid(true) : setCidadeValid(false)
  }
  const is_estado_valid           = (v) => {
    setEstado(v)
    v.match(r_nome) ? setEstadoValid(true) : setEstadoValid(false)
  }
  const is_restaurante_valid      = (v) => {
    setRestaurante(v)
    onR ? v.match(r_nome) ? setRestauranteValid(true) && setChoiceValid(true) : setRestauranteValid(false) && setChoiceValid(false) : ''
  }
  const is_data_nasc_valid        = (v) => {
    setData_nasc(v)
    v.match(r_nome) ? setData_nascValid(true) : setData_nascValid(false)
  }
  const is_cep_valid              = (v) => {
    setCep(v)
    v.match(r_cep) ? setCepValid(true) : setCepValid(false)
  }
  const is_tel_02_valid           = (v) => { 
    setTel_02(v)
    v.match(r_tel) ? setTel_02Valid(true) : setTel_02Valid(false) 
  }
  const is_ano_valid              = (v) => { 
    setAno(v)
    v.match(r_ano) ? setAnoValid(true) : setAnoValid(false) 
  }
  const is_modelo_valid           = (v) => { 
    setModelo(v)
    v.match(r_nome) ? setModeloValid(true) : setModeloValid(false) 
  }
  const is_placa_valid            = (v) => { 
    setPlaca(v)
    v.match(r_placa) ? setPlacaValid(true) : setPlacaValid(false) 
  }
  const is_cor_valid              = (v) => { 
    setCor(v)
    v.match(r_nome) ? setCorValid(true) : setCorValid(false) 
  }
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  const vehicleValidation = () => {
    let countV = 0
    is_ano_valid(ano)
    is_modelo_valid(modelo)
    is_placa_valid(placa)
    is_cor_valid(cor)
    if (anoValid) { ++countV }
    if (modeloValid) { ++countV }
    if (placaValid) { ++countV }
    if (corValid) { ++countV }
    setValVehicle(countV)
  }

  const adressValidation = () => {
    let count = 0
    is_rua_valid(rua)
    is_numero_valid(numero)
    is_bairro_valid(bairro)
    is_cidade_valid(cidade)
    is_estado_valid(estado)
    is_cep_valid(cep)
    if(ruaValid) { ++count }
    if(numeroValid) { ++count }
    if(bairroValid) { ++count }
    if(cidadeValid) { ++count }
    if(estadoValid) { ++count }
    if(cepValid)  { ++count }
    setValAdress(count)
  }

  const dadosValidations = () => {
    let countD = 0
    is_nome_valid(nome)
    is_rg_valid(rg)
    is_cpf_valid(cpf)
    is_email_valid(email)
    is_tel_01_valid(tel_01)
    is_data_nasc_valid(data_nasc)
    is_tel_02_valid(tel_02)
    if(nomeValid) { ++countD }
    if(rgValid) { ++countD }
    if(cpfValid) { ++countD }
    if(emailValid) { ++countD }
    if(tel_01Valid) { ++countD }
    if(data_nascValid) { ++countD }
    if(tel_02Valid) { ++countD }
    setValDados(countD)
  }

  const allValidations = () => {
    setValTotal(false)
    dadosValidations()
    adressValidation()
    vehicleValidation()
    if(valDados === 7) {
      setDocValid(true)
    } else {
      setDocValid(false)
    }
    if(valVehicle === 4) {
      setVehicleValid(true)
    } else {
      setVehicleValid(false)
    }
    if(valAdress === 6) {
      setAdressValid(true)
    } else {
      setAdressValid(false)
    }
    if(filesArrayNames.length > 0) {
      setUploadValid(true)
    } else {
      setUploadValid(false)
      setSizes(0)
    }
  }

  const validandoTodos = () => {
    if(docValid && vahicleValid && adressValid && choiceValid) {
      if(filesArrayNames.length > 0) { 
        setValTotal(true)
      }
    } else {
      setValTotal(false)
    }
  }

  // ________________________________________________
  const hdl_restaurante     = (e) => {
    is_restaurante_valid(e.target.value)
    setAdmin('[ENTREGADOR] - [RESTAURANTE] - ' + e.target.value)
    if(restauranteValid) { setChoiceValid(true) }
  }
  // onChange, type, value, name, placeholder, textLabel, ga
  const submitHdl = async (e) => {
    e.preventDefault()

    console.log('________________________________');
    console.log('[LOG] - COMEÇO DO ENVIO');
    console.log('[LOG] - valor admin:');
    console.log(admin);
    console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
    
    // if(onR) {
    //   if(admin === '[ENTREGADOR] - [RESTAURANTE]') {
    //     setAdmin(admin + ' - ' + restaurante)
    //   }
    //   console.log('[LOG] - SELECIONOU OUTRO RESTAURANTE - valor do admin:', admin);
    // }

    await axiosSimp({
      method: 'post',
      url: '/addUser',
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Authorization", 
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
          "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        name: nome,
        email: email,
        pass: pass,
        rg: rg,
        cpf: cpf,
        tel1: tel_01,
        tel2: tel_02,
        nasc: data_nasc,
        admin: admin,
        rua: rua,
        numero: numero,
        obs: obs || "",
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep
      }
    }).then(res => res.data).then(async (r) => {
      setDadosCadUser(r)

      if (r.hasOwnProperty('error')) { return console.log('[ERROR] -', r.error) }

      console.log('________________________________');
      console.log('[LOG] - FEITO O POST PARA USER ');
      console.log('[LOG] - valor user:');
      console.log({...dadosCadUser});
      console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');

      
      if (r.hasOwnProperty('idUser')) {
        await axiosSimp({
          method: 'post',
          url: '/addVehicle',
          headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Authorization", 
              "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
              "Content-Type": "application/json;charset=UTF-8"
          },
          data: {
            ano: ano,
            modelo: modelo,
            placa: placa,
            cor: cor,
            UserIdUser: r.idUser
          }
        }).then(res2 => res2.data).then(async (r2) => {
          setDadosCadVehicle(r2)
          // console.log(r2)
          if ( r2.hasOwnProperty('error')) { return console.log('[ERROR] -', r2.error) } else {
            // AQUI HAVERÁ O UPLOAD DAS IMAGENS CARREGADAS
            console.log('________________________________');
            console.log('[LOG] - FEITO O POST PARA VEHICLE ');
            console.log('[LOG] - valor vehicle:');
            console.log({...dadosCadVehicle});
            console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');

            if(filesArrayNames.length > 0) {
              console.log('tem array');
              console.log(filesArrayNames);
              await filesArrayNames.map(async (v, i) => {
                await axiosSimp({
                  method: 'post',
                  url: '/addImageUser',
                  headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Access-Control-Allow-Headers": "Authorization", 
                      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
                  },
                  data: {
                    name: v.nameFile,
                    b64: v.b64,
                    type: v.type,
                    userIdUser: r.idUser,
                  }
                }).then(res3 => res3.data).then((r3) => console.log(r3))
              })
            }
            // CRIAÇÃO DOS COOKIES COM AS INFORMAÇÕES QUE SERÃO USADAS PARA O PAINEL ENTREGADOR
            // AQUI VAI A CHAMADA PARA OUTRA PÁGINA
            console.log('[SUCESSO] - ROTEANDO PARA A OUTRA PÁGINA!')
            router.push('/loginPage')
          }
        }
      )}
    })
  }
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________________________
  // handlers de captura dos dados
  const hdl_nome            = (e) => { is_nome_valid(e.target.value) }
  const hdl_rg              = (e) => { is_rg_valid(e.target.value) }
  const hdl_cpf             = (e) => { is_cpf_valid(e.target.value) }
  const hdl_email           = (e) => { is_email_valid(e.target.value) }
  const hdl_tel_01          = (e) => { is_tel_01_valid(e.target.value) }
  const hdl_data_nasc       = (e) => { is_data_nasc_valid(e.target.value) }
  const hdl_rua             = (e) => { is_rua_valid(e.target.value) }
  const hdl_numero          = (e) => { is_numero_valid(e.target.value) }
  const hdl_obs             = (e) => { setObs(e.target.value) }
  const hdl_bairro          = (e) => { is_bairro_valid(e.target.value) }
  const hdl_cidade          = (e) => { is_cidade_valid(e.target.value) }
  const hdl_estado          = (e) => { is_estado_valid(e.target.value) }
  const hdl_cep             = (e) => { is_cep_valid(e.target.value) }
  const hdl_tel_02          = (e) => { is_tel_02_valid(e.target.value) }
  const hdl_ano             = (e) => { is_ano_valid(e.target.value) }
  const hdl_modelo          = (e) => { is_modelo_valid(e.target.value) }
  const hdl_placa           = (e) => { is_placa_valid(e.target.value.toUpperCase()) }
  const hdl_cor             = (e) => { is_cor_valid(e.target.value) }
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  const [sizes, setSizes] = useState(Number)
  useEffect(() => {
    console.log('total:', sizes)
    // 6 000 000
    // 7 288 138
  }, [sizes])

  // ________________________________________________
  const hdlw_fileDel = (v) => {
    let values = filesArrayNames
    let files = filesArrays
    values.splice(v,1)
    files.splice(v,1)
    setFilesArrayNames([...values])
    setFilesArrays([...filesArrays])
    if(filesArrayNames.length > 0) { setUploadValid(true) } else {
      setUploadValid(false)
      setSizes(0)
    }
    validandoTodos()
  }
  const hdl_upload_images = (e) => {
    if(e.target.files) {
      // console.log('[TIPO]', e.target.files[0].type);
      setSizes(sizes + e.target.files[0].size)
      console.log('arquivo selecionado:', e.target.files[0].size)
      let read = new FileReader()
      if (sizes > 6000000) {
        window.alert('Os arquivos estão muito grandes')
      } else {
        read.readAsDataURL(e.target.files[0])
        read.onloadend = () => {
          setFilesArrayNames([...filesArrayNames, { 
            nameFile: e.target.files[0].name,
            b64: read.result,
            type: e.target.files[0].type,
            size: e.target.files[0].size
          }])
        }
      }
      setFilesArrays([ ...filesArrays, { file: e.target.files[0] }])
      if(filesArrayNames.length > 0) { 
        console.log('maior que 0 a quantidade de imagens')
        setUploadValid(true)
      } else { 
        setUploadValid(false)
        setSizes(0)
      }
      validandoTodos()
    }
  }
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  return (
  <>
    <S_main>
      <S_section_01>

        <S_h1> {`Cadastro de Entregadores`} </S_h1>



        <S_form>
          <S_p_01 ga="desc"> {`Por favor informe seus dados, para cadastro em nossa plataforma, e com isso poder contratar e usar nossos serviços`} </S_p_01>
          <S_h2 ga="tit1"> {`Dados do entregador`} </S_h2>
          <Inpt_01
            onChange={hdl_nome}
            onFocus={hdl_nome}
            value={nome}
            name={'field_nome'}
            placeholder={`Digite seu nome completo`}
            textLabel={`Nome Completo`}
            ga="a" valid={nomeValid}
          />

          <Inpt_01
            onChange={hdl_rg}
            onFocus={hdl_rg}
            value={rg}
            name={'field_rg'}
            placeholder={`Digite seu RG`}
            textLabel={`RG`}
            ga="b" valid={rgValid}
          />

          <Inpt_01
            onChange={hdl_cpf}
            onFocus={hdl_cpf}
            value={cpf}
            name={'field_cpf'}
            placeholder={`Digite seu CPF`}
            textLabel={`CPF`}
            ga="c" valid={cpfValid}
          />

          <Inpt_01
            onChange={hdl_email}
            onFocus={hdl_email}
            onLoad={hdl_email}
            value={email}
            name={'field_email'}
            placeholder={`Digite seu e-mail`}
            textLabel={`E-mail`}
            ga="d" valid={emailValid}
          />

          <Inpt_01
            onChange={hdl_tel_01}
            onFocus={hdl_tel_01}
            value={tel_01}
            name={'field_tel_01'}
            type="number"
            placeholder={`Digite seu telefone`}
            textLabel={`Telefone`}
            ga="e" type="number" valid={tel_01Valid}
          />

          <Inpt_01
            onChange={hdl_data_nasc}
            onFocus={hdl_data_nasc}
            value={data_nasc}
            name={'field_data_nasc'}
            type="date"
            placeholder={``}
            textLabel={`Data de nascimento`}
            ga="f" valid={data_nascValid}
          />

          <S_div_01 ga="g">
            <S_div_08>
              <S_txt_label>
                {`RG - CPF e/ou CNPJ`}
              </S_txt_label>
              <S_label_upload htmlFor='imageUp'>
                {`Adicionar fotos`}
                <S_inpt_upload onChange={hdl_upload_images} name="imageUp" id="imageUp" accept="image/*" type="file" />
              </S_label_upload>
            </S_div_08>
            <S_div_09>
              {

                filesArrayNames.map((v, i) => {

                  return (
                    <S_div_10 key={i} onClick={() => hdlw_fileDel(i)}>
                      {v.nameFile.substring(0,8) + '...'}
                      <S_div_11>x</S_div_11>
                    </S_div_10>
                  )
                })
              }
            </S_div_09>
          </S_div_01>

          <S_h3 ga="sub1"> {`Endereço do entregador`} </S_h3>
          <Inpt_01
            onChange={hdl_rua}
            onFocus={hdl_rua}
            value={rua}
            name={'field_rua'}
            placeholder={`digite o nome da rua`}
            textLabel={`Rua / Logradouro`}
            ga="h" valid={ruaValid}
          />

          <Inpt_01
            onChange={hdl_numero}
            onFocus={hdl_numero}
            value={numero}
            name={'field_numero'}
            placeholder={`Número da casa`}
            textLabel={`Número`}
            ga="i" valid={numeroValid}
          />

          <Inpt_01
            onChange={hdl_obs}
            onFocus={hdl_obs}
            value={obs}
            name={'field_obs'}
            placeholder={`Observações`}
            textLabel={`Observações`}
            ga="j" valid={true}
          />

          <Inpt_01
            onChange={hdl_bairro}
            onFocus={hdl_bairro}
            value={bairro}
            name={'field_bairro'}
            placeholder={`Bairro`}
            textLabel={`Bairro`}
            ga="k" valid={bairroValid}
          />

          <Inpt_01
            onChange={hdl_cidade}
            onFocus={hdl_cidade}
            value={cidade}
            name={'field_cidade'}
            placeholder={`Cidade`}
            textLabel={`Cidade`}
            ga="l" valid={cidadeValid}
          />

          <Inpt_01
            onChange={hdl_estado}
            onFocus={hdl_estado}
            value={estado}
            name={'field_estado'}
            placeholder={`Estado`}
            textLabel={`Estado`}
            ga="m" valid={estadoValid}
          />

          <Inpt_01
            onChange={hdl_cep}
            onFocus={hdl_cep}
            value={cep}
            name={'field_cep'}
            placeholder={`CEP`}
            textLabel={`CEP`}
            ga="n" valid={cepValid}
          />

          <S_hr_01 ga="hr1" />

          <Inpt_01
            onChange={hdl_tel_02}
            onFocus={hdl_tel_02}
            value={tel_02}
            name={'field_tel_02'}
            placeholder={`Digite o telefone para contato`}
            textLabel={`Telefone emergência`}
            ga="o" type="number" valid={tel_02Valid}
          />

          <S_h3 ga="sub2"> {`Selecione se quer trabalhar pra GetLogClub ou se trabalha para algum restaurante cadastrado!`} </S_h3>

          <S_div_02 ga="p">
            <S_div_03 on={onG ? 'y' : 'n'} onClick={hdl_choice_G}>
              <S_img_01  on={onG ? 'y' : 'n'} src="/raposa.svg" />
            </S_div_03>
            <S_div_04 on={onR ? 'y' : 'n'} onClick={hdl_choice_R}>
              <Inpt_01
                onChange={hdl_restaurante}
                onFocus={hdl_restaurante}
                value={restaurante}
                name={'field_restaurante'}
                placeholder={`Restaurante`}
                textLabel={`Restaurante`}
                disable={onR ? false : true}
                ml={true} valid={restauranteValid}
              />
            </S_div_04>
          </S_div_02>

          <S_hr_01 ga="hr2" />

          <S_h2 ga="tit2"> {`Dados do veículo`} </S_h2>

          <Inpt_01
            onChange={hdl_ano}
            onFocus={hdl_ano}
            value={ano}
            name={'field_ano'}
            placeholder={`digite o ano no formato: 9999`}
            textLabel={`Ano`} valid={anoValid}
            ga="q" type="number" min="1900" max="2099" step="1"
          />

          <Inpt_01
            onChange={hdl_modelo}
            onFocus={hdl_modelo}
            value={modelo}
            name={'field_modelo'}
            placeholder={`Modelo`}
            textLabel={`Modelo`}
            ga="r" valid={modeloValid}
          />

          <Inpt_01
            onChange={hdl_placa}
            onFocus={hdl_placa}
            value={placa}
            name={'field_placa'}
            placeholder={`Placa`}
            textLabel={`Placa`}
            ga="s" valid={placaValid}
          />

          <Inpt_01
            onChange={hdl_cor}
            onFocus={hdl_cor}
            value={cor}
            name={'field_cor'}
            placeholder={`Cor`}
            textLabel={`Cor`}
            ga="t" valid={corValid}
          />



          <S_div_06 ga="v">
            <S_div_07>
              <S_p_02 on={!nomeValid ? 'y' : 'n'}> {`Seu nome completo!`} </S_p_02>
              <S_p_02 on={!rgValid ? 'y' : 'n'}> {`Um RG Válido`} </S_p_02>
              <S_p_02 on={!cpfValid ? 'y' : 'n'}> {`Um CPF Válido`} </S_p_02>
              <S_p_02 on={!emailValid ? 'y' : 'n'}> {`Seu email válido`} </S_p_02>
              <S_p_02 on={!tel_01Valid ? 'y' : 'n'}> {`Um Telefone para contato`} </S_p_02>
              <S_p_02 on={!tel_02Valid ? 'y' : 'n'}> {`Um Telefone para emergências`} </S_p_02>
              <S_p_02 on={!uploadValid ? 'y' : 'n'}> {`Fotos dos documentos`} </S_p_02>
              <S_p_02 on={!adressValid ? 'y' : 'n'}> {`Endereço correto`} </S_p_02>
              <S_p_02 on={!vahicleValid ? 'y' : 'n'}> {`Dados do veículo`} </S_p_02>
            </S_div_07>
          </S_div_06>



          <S_btn_01 disa={valTotal} disabled={!valTotal} onClick={submitHdl} ga="u"> {`Cadastre`} </S_btn_01>
        </S_form>

      </S_section_01>

      <img ref={_img_01} />
    </S_main>
  </>
);

}

export default Ecad;