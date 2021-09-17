// ________________________________________________________________
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
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
      "a    a    a    a    b    b    b    b"
      "c    c    c    c    d    d    d    d"
      "e    e    e    e    f    f    f    f"
      "g    g    g    g    g    g    g    g"
      "sub1 sub1 sub1 sub1 sub1 sub1 sub1 sub1"
      "h    h    h    h    i    i    j    j"
      "k    k    l    l    m    m    n    n"
      "hr1  hr1  hr1  hr1  hr1  hr1  hr1  hr1"
      "tit2 tit2 tit2 tit2 tit2 tit2 tit2 tit2"
      "o    o    o    o    p    p    p    p"
      "q    q    q    q    r    r    r    r"
      "sub2 sub2 sub2 sub2 sub2 sub2 sub2 sub2"
      "s    s    s    s    t    t    u    u"
      "v    v    w    w    x    x    y    y"
      "hr2  hr2  hr2  hr2  hr2  hr2  hr2  hr2"
      "red  red  red  red  red  red  red  red"
      ".    .    .    .    z    z    z    z"
    ;
  }
  ${cusMQ(1024)} {
    grid-template-areas: 
      "desc desc desc desc desc desc desc desc"
      "tit1 tit1 tit1 tit1 tit1 tit1 tit1 tit1"
      "a    a    b    b    c    c    e    e"
      "d    d    f    f    g    g    g    g"
      "sub1 sub1 sub1 sub1 sub1 sub1 sub1 sub1"
      "h    h    h    h    i    i    j    j"
      "k    k    l    l    m    m    n    n"
      "hr1  hr1  hr1  hr1  hr1  hr1  hr1  hr1 "
      "tit2 tit2 tit2 tit2 tit2 tit2 tit2 tit2"
      "o    o    o    o    p    p    p    p"
      "q    q    q    q    r    r    r    r"
      "sub2 sub2 sub2 sub2 sub2 sub2 sub2 sub2"
      "s    s    s    s    t    t    u    u"
      "v    v    w    w    x    x    y    y"
      "hr2  hr2  hr2  hr2  hr2  hr2  hr2  hr2 "
      "red  red  red  red  red  red  red  red"
      ".    .    .    .    .    z    z    z"
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
  line-height: 1;
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
const r_cep     = /^\d{5}-?\d{3}$/
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



const Rcad = () => {
  const router = useRouter()

  // ________________________________________________
  const [pass, setPass]                           = useState('')
  // Dados pessoais do representante
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
  // dados do restaurante
  const [nomeR, setNomeR]                         = useState('')
  const [nomeRValid, setNomeRValid]               = useState(false)
  const [rSocial, setRSocial]                     = useState('')
  const [rSocialValid, setRSocialValid]           = useState(false)
  const [cnpj, setCnpj]                           = useState('')
  const [cnpjValid, setCnpjValid]                 = useState(false)
  const [tel_02, setTel_02]                       = useState('')
  const [tel_02Valid, setTel_02Valid]             = useState(false)
  
  const [ruaRest, setRuaRest]                     = useState('')
  const [ruaRestValid, setRuaRestValid]           = useState(false)
  
  const [numeroR, setNumeroR]                     = useState('')
  const [numeroRValid, setNumeroRValid]           = useState(false)
  
  const [obsR, setObsR]                           = useState('')
  
  const [bairroR, setBairroR]                     = useState('')
  const [bairroRValid, setBairroRValid]           = useState(false)
  
  const [cidadeR, setCidadeR]                     = useState('')
  const [cidadeRValid, setCidadeRValid]           = useState(false)
  
  const [estadoR, setEstadoR]                     = useState('')
  const [estadoRValid, setEstadoRValid]           = useState(false)
  
  const [cepR, setCepR]                           = useState('')
  const [cepRValid, setCepRValid]                 = useState(false)
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  // ________________________________________________
  const [dadosCadUser, setDadosCadUser]               = useState(null)
  const [dadosRestaurantUser, setRestaurantCadUser]   = useState(null)
  const [filesArrayNames, setFilesArrayNames]         = useState([])
  const [filesArrays, setFilesArrays]                 = useState([])
  const [uploadValid, setUploadValid]                 = useState(false)
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  // ________________________________________________
  const [valUserAdress, setValUserAdress]                   = useState(Number)
  const [valRestaurantAdress, setValRestaurantAdress]       = useState(Number)
  const [valUserDados, setValUserDados]                     = useState(Number)
  const [valRestaurantDados, setValRestaurantDados]         = useState(Number)
  const [valTotal, setValTotal]                             = useState(false)
  const [userAdressValid, setUserAdressValid]               = useState(false)
  const [restaurantAdressValid, setRestaurantAdressValid]   = useState(false)
  const [restaurantValid, setRestaurantValid]               = useState(false)
  const [dadosValid, setDadosValid]                         = useState(false)
  const [inicial, setInicial]                               = useState(false)
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  // ________________________________________________
  const [sizes, setSizes] = useState(Number)
  const [admin, setAdmin] = useState('[RESTAURANTE]')
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
  const is_data_nasc_valid        = (v) => {
    setData_nasc(v)
    v.match(r_nome) ? setData_nascValid(true) : setData_nascValid(false)
  }
  const is_cep_valid              = (v) => {
    setCep(v)
    v.match(r_cep) ? setCepValid(true) : setCepValid(false)
  }
  const is_nomeR_valid            = (v) => {
    setNomeR(v)
    v.match(r_nome) ? setNomeRValid(true) : setNomeRValid(false)
  }
  const is_Rsocial_valid          = (v) => {
    setRSocial(v)
    v.match(r_nome) ? setRSocialValid(true) : setRSocialValid(false)
  }
  const is_cnpj_valid             = (v) => { 
    setCnpj(v)
    v.match(r_cpf) ? setCnpjValid(true) : setCnpjValid(false) 
  }
  const is_tel_02_valid           = (v) => { 
    setTel_02(v)
    v.match(r_tel) ? setTel_02Valid(true) : setTel_02Valid(false) 
  }
  const is_ruaRest_valid             = (v) => { 
    setRuaRest(v)
    v.match(r_nome) ? setRuaRestValid(true) : setRuaRestValid(false) 
  }
  const is_numeroR_valid          = (v) => {
    setNumeroR(v)
    v.match(r_nome) ? setNumeroRValid(true) : setNumeroRValid(false)
  }
  const is_bairroR_valid          = (v) => {
    setBairroR(v)
    v.match(r_nome) ? setBairroRValid(true) : setBairroRValid(false)
  }
  const is_cidadeR_valid          = (v) => {
    setCidadeR(v)
    v.match(r_nome) ? setCidadeRValid(true) : setCidadeRValid(false)
  }
  const is_estadoR_valid          = (v) => {
    setEstadoR(v)
    v.match(r_nome) ? setEstadoRValid(true) : setEstadoRValid(false)
  }
  const is_cepR_valid             = (v) => {
    setCepR(v)
    v.match(r_cep) ? setCepRValid(true) : setCepRValid(false)
  }
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________________________
  useEffect(() => {
    setPass(Cookies.get('pass'))
    is_email_valid(Cookies.get('email'))
    setInicial(true)
  }, [])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  useEffect(() => {
    if(inicial !== false) {
      allValidations()
      validandoTodos()
    }
  }, [
    nome, rg, cpf, email, tel_01, data_nasc, rua, numero,
    bairro, cidade, estado, cep, nomeR, rSocial, cnpj, tel_02,
    ruaRest, numeroR, bairroR, cidadeR, estadoR, cepR
  ])

  // ________________________________________________
  const hdl_upload_images = (e) => {
    if(e.target.files) {
      if(e.target.files[0].size >= 1000000) {
        window.alert('O arquivo está muito grande')
        return;
      } else {
        setSizes(sizes + e.target.files[0].size)
        console.log('arquivo selecionado:', e.target.files[0].size)
      }
      if (sizes > 6000000) {
        window.alert('Os arquivos estão muito grandes')
      } else {
        let read = new FileReader()
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
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  // ________________________________________________
  const userAdressValidation = () => {
    let c = 0
    is_rua_valid(rua)
    is_numero_valid(numero)
    is_bairro_valid(bairro)
    is_cidade_valid(cidade)
    is_estado_valid(estado)
    is_cep_valid(cep)
    if(ruaValid) { ++c }
    if(numeroValid) { ++c }
    if(bairroValid) { ++c }
    if(cidadeValid) { ++c }
    if(estadoValid) { ++c }
    if(cepValid)  { ++c }
    setValUserAdress(c)
  }
  const restaurantAdressValidation = () => {
    let c = 0
    is_ruaRest_valid(ruaRest)
    is_numeroR_valid(numeroR)
    is_bairroR_valid(bairroR)
    is_cidadeR_valid(cidadeR)
    is_estadoR_valid(estadoR)
    is_cepR_valid(cepR)
    if(ruaRestValid) { ++c }
    if(numeroRValid) { ++c }
    if(bairroRValid) { ++c }
    if(cidadeRValid) { ++c }
    if(estadoRValid) { ++c }
    if(cepRValid)  { ++c }
    setValRestaurantAdress(c)
  }
  const userDadosValidation = () => {
    let c = 0
    is_nome_valid(nome)
    is_rg_valid(rg)
    is_cpf_valid(cpf)
    is_email_valid(email)
    is_tel_01_valid(tel_01)
    is_data_nasc_valid(data_nasc)
    if(nomeValid) { ++c }
    if(rgValid) { ++c }
    if(cpfValid) { ++c }
    if(emailValid) { ++c }
    if(tel_01Valid) { ++c }
    if(data_nascValid) { ++c }
    setValUserDados(c)
  }
  const restaurantDadosValidation = () => {
    let c = 0
    is_nomeR_valid(nomeR)
    is_Rsocial_valid(rSocial)
    is_cnpj_valid(cnpj)
    is_tel_02_valid(tel_02)
    if(nomeRValid) { ++c }
    if(rSocialValid) { ++c }
    if(cnpjValid) { ++c }
    if(tel_02Valid) { ++c }
    setValRestaurantDados(c)
  }
  const allValidations = () => {
    setValTotal(false)
    userDadosValidation()
    restaurantDadosValidation()
    restaurantAdressValidation()
    userAdressValidation()
    if(valUserDados === 6) { setDadosValid(true) }
    if(valRestaurantDados === 4) { setRestaurantValid(true) }
    if(valRestaurantAdress === 6) { setRestaurantAdressValid(true) }
    if(valUserAdress === 6) { setUserAdressValid(true) }
    if(filesArrayNames.length > 0) {
      setUploadValid(true)
    } else {
      setUploadValid(false)
      setSizes(0)
    }
  }
  const validandoTodos = () => {
    if(dadosValid && restaurantValid && userAdressValid && restaurantAdressValid) {
      if(filesArrayNames.length > 0) {
        setValTotal(true)
      }
    } else {
      setValTotal(false)
    }
  }
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  // ________________________________________________
  const submitHdl = async (e) => {
    e.preventDefault()

    console.log('________________________________')
    console.log('começa o envio user')
    console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')

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
        tel2: "",
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
      
      console.log('________________________________')
      console.log('retorno do envio user')
      console.log('começo do envio restaurant')
      console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')

      if (r.hasOwnProperty('idUser')) {
        await axiosSimp({
          method: 'post',
          url: '/addRestaurant',
          headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Authorization", 
              "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
              "Content-Type": "application/json;charset=UTF-8"
          },
          data: {
            nomeRestaurant: nomeR,
            socialReason: rSocial,
            cnpj: cnpj,
            tel1: tel_01,
            rua: ruaRest,
            numero: numeroR,
            obs: obsR || "",
            bairro: bairroR,
            cidade: cidadeR,
            estado: estadoR,
            cep: cepR,
            userIdUser: r.idUser
          }
        }).then(res2 => res2.data).then(async (r2) => {
          setRestaurantCadUser(r2)
          if ( r2.hasOwnProperty('error')) { return console.log('[ERROR] -', r2.error) }
          
          console.log('________________________________')
          console.log('retorno do envio restaurant')
          console.log('começo do envio imagensUser')
          console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')

          if(filesArrayNames.length > 0) {
            await filesArrayNames.map(async (v, i) => {
              await axiosSimp({
                method: 'post',
                url: '/addImageUser',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Authorization", 
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
                    "Content-Type": "application/json;charset=UTF-8"
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
          console.log('________________________________')
          console.log('Fim do envio das imagens')
          console.log('Fim de todo envio')
          console.log('Roteando para a outra página!')
          console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')
          router.push('/loginPage')
        })
      }


    })

  }
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  // ________________________________________________
  // handlers de captura dos dados
  const hdl_nome            = (e) => {
    is_nome_valid(e.target.value)
  }
  const hdl_rg              = (e) => {
    is_rg_valid(e.target.value)
  }
  const hdl_cpf             = (e) => {
    is_cpf_valid(e.target.value)
  }
  const hdl_email           = (e) => {
    is_email_valid(e.target.value)
  }
  const hdl_tel_01          = (e) => {
    is_tel_01_valid(e.target.value)
  }
  const hdl_data_nasc       = (e) => {
    is_data_nasc_valid(e.target.value)
  }
  const hdl_rua             = (e) => {
    is_rua_valid(e.target.value)
  }
  const hdl_numero          = (e) => {
    is_numero_valid(e.target.value)
  }
  const hdl_obs             = (e) => {
    setObs(e.target.value)
  }
  const hdl_bairro          = (e) => {
    is_bairro_valid(e.target.value)
  }
  const hdl_cidade          = (e) => {
    is_cidade_valid(e.target.value)
  }
  const hdl_estado          = (e) => {
    is_estado_valid(e.target.value)
  }
  const hdl_cep             = (e) => {
    is_cep_valid(e.target.value)
  }
  const hdl_nome_r          = (e) => {
    is_nomeR_valid(e.target.value)
  }
  const hdl_r_social        = (e) => {
    is_Rsocial_valid(e.target.value)
  }
  const hdl_cnpj            = (e) => {
    is_cnpj_valid(e.target.value)
  }
  const hdl_tel_02          = (e) => {
    is_tel_02_valid(e.target.value)
  }
  const hdl_rua_rest           = (e) => {
    is_ruaRest_valid(e.target.value)
  }
  const hdl_numero_r        = (e) => {
    is_numeroR_valid(e.target.value)
  }
  const hdl_obs_r           = (e) => {
    setObsR(e.target.value)
  }
  const hdl_bairro_r        = (e) => {
    is_bairroR_valid(e.target.value)
  }
  const hdl_cidade_r        = (e) => {
    is_cidadeR_valid(e.target.value)
  }
  const hdl_estado_r        = (e) => {
    is_estadoR_valid(e.target.value)
  }
  const hdl_cep_r           = (e) => {
    is_cepR_valid(e.target.value)
  }
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  return (
  <>
    <S_main>
      <S_section_01>

        <S_h1> {`Cadastro de Restaurantes`} </S_h1>

        <S_form>
          <S_p_01 ga="desc"> {`Por favor informe seus dados, para cadastro em nossa plataforma, e com isso poder contratar e usar nossos serviços`} </S_p_01>
          <S_h2 ga="tit1"> {`Dados pessoais do representante do restaurante`} </S_h2>
          <Inpt_01
            onChange={hdl_nome}
            onFocus={hdl_nome}
            value={nome}
            name={'field_nome'}
            placeholder={`Digite seu nome completo`}
            textLabel={`Nome`}
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

          <S_h3 ga="sub1"> {`Endereço do representante`} </S_h3>
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

          <S_h2 ga="tit2"> {`Dados da empresa`} </S_h2>

          <Inpt_01
            onChange={hdl_nome_r}
            onFocus={hdl_nome_r}
            value={nomeR}
            name={'field_nome_r'}
            placeholder={`Digite o nome do restaurante`}
            textLabel={`Nome do restaurante`}
            ga="o" valid={nomeRValid}
          />
          
          <Inpt_01
            onChange={hdl_r_social}
            onFocus={hdl_r_social}
            value={rSocial}
            name={'field_r_social'}
            placeholder={`Digite a razão social`}
            textLabel={`Razão Social`}
            ga="p" valid={rSocialValid}
          />
          
          <Inpt_01
            onChange={hdl_cnpj}
            onFocus={hdl_cnpj}
            value={cnpj}
            name={'field_cnpj'}
            placeholder={`Digite o CNPJ`}
            textLabel={`CNPJ`}
            ga="q" valid={cnpjValid}
          />
          
          <Inpt_01
            onChange={hdl_tel_02}
            onFocus={hdl_tel_02}
            value={tel_02}
            name={'field_tel_02'}
            placeholder={`Digite o telefone para contato`}
            textLabel={`Telefone Empresa`}
            ga="r" type="number" valid={tel_02Valid}
          />
          
          <S_h3 ga="sub2"> {`Endereço do restaurante`} </S_h3>

          <Inpt_01
            onChange={hdl_rua_rest}
            onFocus={hdl_rua_rest}
            value={ruaRest}
            name={'field_rua_r'}
            placeholder={`digite o nome da rua do restaurante`}
            textLabel={`Rua / Logradouro`}
            ga="s" valid={ruaRestValid}
          />

          <Inpt_01
            onChange={hdl_numero_r}
            onFocus={hdl_numero_r}
            value={numeroR}
            name={'field_numero_r'}
            placeholder={`Número da casa`}
            textLabel={`Número`}
            ga="t" valid={numeroRValid}
          />

          <Inpt_01
            onChange={hdl_obs_r}
            onFocus={hdl_obs_r}
            value={obsR}
            name={'field_obs_r'}
            placeholder={`Observações`}
            textLabel={`Observações`}
            ga="u" valid={true}
          />

          <Inpt_01
            onChange={hdl_bairro_r}
            onFocus={hdl_bairro_r}
            value={bairroR}
            name={'field_bairro_r'}
            placeholder={`Bairro`}
            textLabel={`Bairro`}
            ga="v" valid={bairroRValid}
          />

          <Inpt_01
            onChange={hdl_cidade_r}
            onFocus={hdl_cidade_r}
            value={cidadeR}
            name={'field_cidade_r'}
            placeholder={`Cidade`}
            textLabel={`Cidade`}
            ga="w" valid={cidadeRValid}
          />

          <Inpt_01
            onChange={hdl_estado_r}
            onFocus={hdl_estado_r}
            value={estadoR}
            name={'field_estado_r'}
            placeholder={`Estado`}
            textLabel={`Estado`}
            ga="x" valid={estadoRValid}
          />

          <Inpt_01
            onChange={hdl_cep_r}
            onFocus={hdl_cep_r}
            value={cepR}
            name={'field_cep_r'}
            placeholder={`CEP`}
            textLabel={`CEP`}
            ga="y" valid={cepRValid}
          />
          <S_hr_01 ga="hr2" />

          <S_div_06 ga="red">
            <S_div_07>
              <S_p_02 on={!nomeValid ? 'y' : 'n'}> {`Nome completo do representante!`} </S_p_02>
              <S_p_02 on={!rgValid ? 'y' : 'n'}> {`Um RG Válido`} </S_p_02>
              <S_p_02 on={!cpfValid ? 'y' : 'n'}> {`Um CPF Válido`} </S_p_02>
              <S_p_02 on={!emailValid ? 'y' : 'n'}> {`Seu email válido`} </S_p_02>
              <S_p_02 on={!tel_01Valid ? 'y' : 'n'}> {`telefone do representante`} </S_p_02>
              <S_p_02 on={!userAdressValid ? 'y' : 'n'}> {`Endereço correto`} </S_p_02>
              <S_p_02 on={!uploadValid ? 'y' : 'n'}> {`Fotos dos documentos`} </S_p_02>
            </S_div_07>
          </S_div_06>

          <S_btn_01 disa={valTotal} disabled={!valTotal} onClick={submitHdl} ga="z"> {`Cadastre`} </S_btn_01>
        </S_form>

      </S_section_01>
    </S_main>
  </>
);

}

export default Rcad;


  // onChange, type, value, name, placeholder, textLabel, ga