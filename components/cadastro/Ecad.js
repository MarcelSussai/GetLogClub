import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  cusMQ, cusTR, fontF,
  S_main_base, Input_01, Chk_01,
} from "../../config/theme";
import { axiosSimp } from '../services/axios';
import Inpt_01 from './inpt_01';



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
      "tit1 tit1 tit1 tit1 tit1 tit1 tit1 tit1"
      "a    a    a    a    b    b    b    b"
      "c    c    c    c    d    d    d    d"
      "e    e    e    e    f    f    f    f"
      "g    g    g    g    o    o    o    o"
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
      ".    .    .    .    .    u    u    u"
    ;
  }
  
  ${cusMQ(1024)} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas: 
      "tit1 tit1 tit1 tit1 tit1 tit1 tit1 tit1"
      "a    a    b    b    c    c    d    d"
      "e    e    f    f    g    g    o    o"
      "sub1 sub1 sub1 sub1 sub1 sub1 sub1 sub1"
      "h    h    h    h    i    i    j    j"
      "k    k    l    l    m    m    n    n"
      "hr1  hr1  hr1  hr1  hr1  hr1  hr1  hr1 "
      "sub2 sub2 sub2 sub2 sub2 sub2 sub2 sub2"
      "p    p    p    p    p    p    .    ."
      "hr2  hr2  hr2  hr2  hr2  hr2  hr2  hr2 "
      "tit2 tit2 tit2 tit2 tit2 tit2 tit2 tit2"
      "q    q    r    r    s    s    t    t"
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
  
  &:hover {
    background: ${ ({theme}) => theme.colors.aqua.c700 };

  }
`

const S_div_01 = styled.div`
  grid-area: ${({ga}) => ga};
  font-size: 12px;
`
const S_div_02 = styled.div`
  grid-area: ${ ({ga}) => ga };
  display: grid;
  grid-template-columns: 80px 1fr;
  width: 100%;

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
  align-items: center;
  border-right: solid 1px ${ ({theme}) => theme.colors.brown.c600 };
  border-left: ${ ({theme, on}) => on === 'y' ? 'solid 1px' + theme.colors.brown.c600 : 'solid 1px' + theme.colors.white };
  border-bottom: ${ ({theme, on}) => on === 'y' ? 'solid 1px' + theme.colors.brown.c600 : 'solid 1px' + theme.colors.white };
  cursor: pointer;
  ${cusTR('.2s')}
`
const S_div_04 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  align-items: center;
  cursor: pointer;
  height: 100%;
  padding-bottom: 16px;
  border-right: ${ ({theme, on}) => on === 'y' ? 'solid 1px' + theme.colors.brown.c600 : 'solid 1px' + theme.colors.white };
  border-bottom: ${ ({theme, on}) => on === 'y' ? 'solid 1px' + theme.colors.brown.c600 : 'solid 1px' + theme.colors.white };
  ${cusTR('.2s')}
`
const S_div_05 = styled.div`
  width: 100%;
  height: 16px;
  background: ${ ({theme, on}) => on === 'y' ? theme.colors.brown.c500 : theme.colors.white };
  /* border: solid 1px ${ ({theme, on}) => on === 'y' ? theme.colors.brown.c600 : theme.colors.gray.c300 }; */
  margin-bottom: 16px;
  ${cusTR('.2s')}
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



const Ecad = () => {

  
  const [pass, setPass]                 = useState('')

  const [nome, setNome]                 = useState('')
  const [rg, setRg]                     = useState('')
  const [cpf, setCpf]                   = useState('')
  const [email, setEmail]               = useState('')
  const [tel_01, setTel_01]             = useState('')
  const [data_nasc, setData_nasc]       = useState('')
  
  const [rua, setRua]                   = useState('')
  const [numero, setNumero]             = useState('')
  const [obs, setObs]                   = useState('')
  const [bairro, setBairro]             = useState('')
  const [cidade, setCidade]             = useState('')
  const [estado, setEstado]             = useState('')
  const [cep, setCep]                   = useState('')
  
  const [tel_02, setTel_02]             = useState('')
  const [restaurante, setRestaurante]   = useState('')

  const [ano, setAno]                   = useState('')
  const [modelo, setModelo]             = useState('')
  const [placa, setPlaca]               = useState('')
  const [cor, setCor]                   = useState('')

  const [onG, setOnG]                   = useState(true)
  const [onR, setOnR]                   = useState(false)

  const [admin, setAdmin]               = useState('[ENTREGADOR] - [GETLOGCLUB]')

  const [dadosCadUser, setDadosCadUser] = useState()
  const [dadosCadVehicle, setDadosCadVehicle] = useState()

  const hdl_choice_G = () => {
    setOnG(true)
    setOnR(false)
    setAdmin('[ENTREGADOR] - [GETLOGCLUB]');
    setRestaurante('')
  }
  const hdl_choice_R = () => {
    setOnG(false)
    setOnR(true)
    setAdmin('[ENTREGADOR] - [RESTAURANTE]');
  }
  /*
  [ENTREGADOR] - [GETLOGCLUB]
  [ENTREGADOR] - [RESTAURANTE]
  */

  useEffect(() => {
    let vemail = Cookies.get('email')
    let vpass = Cookies.get('pass')
    // console.log(vemail, vpass);
    setEmail(vemail)
    setPass(vpass)
  }, [])

  const submitHdl = async (e) => {
    e.preventDefault()

    console.log('[LOG] - COMEÇO SUBMIT HANDLE - valor do admin:', admin);
    
    if(onR) {
      if(admin === '[ENTREGADOR] - [RESTAURANTE]') {
        setAdmin(admin + ' - ' + restaurante)
      }
      console.log('[LOG] - SELECIONOU OUTRO RESTAURANTE - valor do admin:', admin);
    }

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
      console.log('[LOG] - FEITO O POST PARA USER - valor do idUser:', {...dadosCadUser});

      
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
        }).then(res2 => res2.data).then((r2) => {
          setDadosCadVehicle(r2)
          // console.log(r2)
          if ( r2.hasOwnProperty('error')) { return console.log('[ERROR] -', r2.error) } else {
            // CRIAÇÃO DOS COOKIES COM AS INFORMAÇÕES QUE SERÃO USADAS PARA O PAINEL ENTREGADOR
            // AQUI VAI A CHAMADA PARA OUTRA PÁGINA
            console.log('[SUCESSO] - ROTEANDO PARA A OUTRA PÁGINA!')
          }

        }
      )}
    })
  }

  useEffect(() => {
    console.log('________________________________________________________________');
    console.log(admin)
    console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
    if(dadosCadUser) {
      if(dadosCadUser.hasOwnProperty('error')) { console.log('ERRO USUÁRIO JÁ EXISTE') }
    }
    console.log('________________________________________________________________');
    console.log(dadosCadVehicle);
    console.log(dadosCadUser);
    console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  }, [admin, dadosCadVehicle, dadosCadUser])

  const hdl_restaurante     = (e) => setRestaurante(e.target.value)
  // onChange, type, value, name, placeholder, textLabel, ga

  // handlers de captura dos dados
  const hdl_nome            = (e) => setNome(e.target.value)
  const hdl_rg              = (e) => setRg(e.target.value)
  const hdl_cpf             = (e) => setCpf(e.target.value)
  const hdl_email           = (e) => setEmail(e.target.value)
  const hdl_tel_01          = (e) => setTel_01(e.target.value)
  const hdl_data_nasc       = (e) => setData_nasc(e.target.value)
  const hdl_rua             = (e) => setRua(e.target.value)
  const hdl_numero          = (e) => setNumero(e.target.value)
  const hdl_obs             = (e) => setObs(e.target.value)
  const hdl_bairro          = (e) => setBairro(e.target.value)
  const hdl_cidade          = (e) => setCidade(e.target.value)
  const hdl_estado          = (e) => setEstado(e.target.value)
  const hdl_cep             = (e) => setCep(e.target.value)
  const hdl_tel_02          = (e) => setTel_02(e.target.value)

  const hdl_ano             = (e) => setAno(e.target.value)
  const hdl_modelo          = (e) => setModelo(e.target.value)
  const hdl_placa           = (e) => setPlaca(e.target.value)
  const hdl_cor             = (e) => setCor(e.target.value)

  return (
  <>
    <S_main>
      <S_section_01>

        <S_h1> {`Cadastro de Entregadores`} </S_h1>

        <S_form>
          <S_h2 ga="tit1"> {`Dados do entregador`} </S_h2>
          <Inpt_01
            onChange={hdl_nome}
            value={nome}
            name={'field_nome'}
            placeholder={`Digite seu nome completo`}
            textLabel={`Nome`}
            ga="a"
          />

          <Inpt_01
            onChange={hdl_rg}
            value={rg}
            name={'field_rg'}
            placeholder={`Digite seu RG`}
            textLabel={`RG`}
            ga="b"
          />

          <Inpt_01
            onChange={hdl_cpf}
            value={cpf}
            name={'field_cpf'}
            placeholder={`Digite seu CPF`}
            textLabel={`CPF`}
            ga="c"
          />

          <Inpt_01
            onChange={hdl_email}
            value={email}
            name={'field_email'}
            placeholder={`Digite seu e-mail`}
            textLabel={`E-mail`}
            ga="d"
          />

          <Inpt_01
            onChange={hdl_tel_01}
            value={tel_01}
            name={'field_tel_01'}
            type="number"
            placeholder={`Digite seu telefone`}
            textLabel={`Telefone`}
            ga="e"
          />

          <Inpt_01
            onChange={hdl_data_nasc}
            value={data_nasc}
            name={'field_data_nasc'}
            type="date"
            placeholder={``}
            textLabel={`Data de nascimento`}
            ga="f"
          />

          <S_div_01 ga="g"> espaço para upload documentos </S_div_01>

          <S_h3 ga="sub1"> {`Endereço do entregador`} </S_h3>
          <Inpt_01
            onChange={hdl_rua}
            value={rua}
            name={'field_rua'}
            placeholder={`digite o nome da rua`}
            textLabel={`Rua / Logradouro`}
            ga="h"
          />

          <Inpt_01
            onChange={hdl_numero}
            value={numero}
            name={'field_numero'}
            placeholder={`Número da casa`}
            textLabel={`Número`}
            ga="i"
          />

          <Inpt_01
            onChange={hdl_obs}
            value={obs}
            name={'field_obs'}
            placeholder={`Observações`}
            textLabel={`Observações`}
            ga="j"
          />

          <Inpt_01
            onChange={hdl_bairro}
            value={bairro}
            name={'field_bairro'}
            placeholder={`Bairro`}
            textLabel={`Bairro`}
            ga="k"
          />

          <Inpt_01
            onChange={hdl_cidade}
            value={cidade}
            name={'field_cidade'}
            placeholder={`Cidade`}
            textLabel={`Cidade`}
            ga="l"
          />

          <Inpt_01
            onChange={hdl_estado}
            value={estado}
            name={'field_estado'}
            placeholder={`Estado`}
            textLabel={`Estado`}
            ga="m"
          />

          <Inpt_01
            onChange={hdl_cep}
            value={cep}
            name={'field_cep'}
            placeholder={`CEP`}
            textLabel={`CEP`}
            ga="n"
          />

          <S_hr_01 ga="hr1" />

          <Inpt_01
            onChange={hdl_tel_02}
            value={tel_02}
            name={'field_tel_02'}
            placeholder={`Digite o telefone para contato`}
            textLabel={`Telefone emergência`}
            ga="o" type="number"
          />

          <S_h3 ga="sub2"> {`Selecione se quer trabalhar pra GetLogClub ou se trabalha para algum restaurante cadastrado!`} </S_h3>

          <S_div_02 ga="p">
            <S_div_03 on={onG ? 'y' : 'n'} onClick={hdl_choice_G}>
              <S_div_05 on={onG ? 'y' : 'n'} />
              <S_img_01  on={onG ? 'y' : 'n'} src="/raposa.svg" />
            </S_div_03>
            <S_div_04 on={onR ? 'y' : 'n'} onClick={hdl_choice_R}>
              <S_div_05 on={onR ? 'y' : 'n'} />
              <Inpt_01
                onChange={hdl_restaurante}
                value={restaurante}
                name={'field_restaurante'}
                placeholder={`Restaurante`}
                textLabel={`Restaurante`}
                disable={onR ? false : true}
                ml={true}
              />
            </S_div_04>
          </S_div_02>

          <S_hr_01 ga="hr2" />

          <S_h2 ga="tit2"> {`Dados do veículo`} </S_h2>

          <Inpt_01
            onChange={hdl_ano}
            value={ano}
            name={'field_ano'}
            placeholder={`Ano`}
            textLabel={`Ano`}
            ga="q" type="number" min="1900" max="2099" step="1"
          />

          <Inpt_01
            onChange={hdl_modelo}
            value={modelo}
            name={'field_modelo'}
            placeholder={`Modelo`}
            textLabel={`Modelo`}
            ga="r"
          />

          <Inpt_01
            onChange={hdl_placa}
            value={placa}
            name={'field_placa'}
            placeholder={`Placa`}
            textLabel={`Placa`}
            ga="s"
          />

          <Inpt_01
            onChange={hdl_cor}
            value={cor}
            name={'field_cor'}
            placeholder={`Cor`}
            textLabel={`Cor`}
            ga="t"
          />


          <S_btn_01 onClick={submitHdl} ga="u"> {`Cadastre`} </S_btn_01>
        </S_form>

      </S_section_01>
    </S_main>
  </>
);

}

export default Ecad;