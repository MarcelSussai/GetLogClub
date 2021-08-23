import { useState } from 'react';
import styled from 'styled-components';
import {
  cusMQ, cusTR, fontF,
  S_main_base, Input_01, Chk_01,
} from "../../config/theme";
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
`

const S_div_01 = styled.div`
  grid-area: ${({ga}) => ga};
  font-size: 12px;
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

const S_hr_01 = styled.hr`
  width: 100%;
  stroke: ${ ({theme}) => theme.colors.gray.c400 };
  transform: translateY(-8px);
`



const Rcad = () => {

  // Dados pessoais do representante
  const [nome, setNome] =                 useState('')
  const [rg, setRg] =                     useState('')
  const [cpf, setCpf] =                   useState('')
  const [email, setEmail] =               useState('')
  const [tel_01, setTel_01] =             useState('')
  const [data_nasc, setData_nasc] =       useState('')
  
  const [rua, setRua] =                   useState('')
  const [numero, setNumero] =             useState('')
  const [obs, setObs] =                   useState('')
  const [bairro, setBairro] =             useState('')
  const [cidade, setCidade] =             useState('')
  const [estado, setEstado] =             useState('')
  const [cep, setCep] =                   useState('')
  
  // dados do restaurante
  const [nomeR, setNomeR] =               useState('')
  const [rSocial, setRSocial] =           useState('')
  const [cnpj, setCnpj] =                 useState('')
  const [tel_02, setTel_02] =             useState('')

  const [ruaR, setRuaR] =                 useState('')
  const [numeroR, setNumeroR] =           useState('')
  const [obsR, setObsR] =                 useState('')
  const [bairroR, setBairroR] =           useState('')
  const [cidadeR, setCidadeR] =           useState('')
  const [estadoR, setEstadoR] =           useState('')
  const [cepR, setCepR] =                 useState('')

  // onChange, type, value, name, placeholder, textLabel, ga

  // handlers de captura dos dados
  const hdl_nome                = (e) => setNome(e.target.value)
  const hdl_rg                  = (e) => setRg(e.target.value)
  const hdl_cpf                 = (e) => setCpf(e.target.value)
  const hdl_email               = (e) => setEmail(e.target.value)
  const hdl_tel_01              = (e) => setTel_01(e.target.value)
  const hdl_data_nasc           = (e) => setData_nasc(e.target.value)
  const hdl_rua                 = (e) => setRua(e.target.value)
  const hdl_numero              = (e) => setNumero(e.target.value)
  const hdl_obs                 = (e) => setObs(e.target.value)
  const hdl_bairro              = (e) => setBairro(e.target.value)
  const hdl_cidade              = (e) => setCidade(e.target.value)
  const hdl_estado              = (e) => setEstado(e.target.value)
  const hdl_cep                 = (e) => setCep(e.target.value)

  return (
  <>
    <S_main>
      <S_section_01>

        <S_h1> {`Cadastro de Restaurantes`} </S_h1>

        <S_form>
          <S_h2 ga="tit1"> {`Dados pessoais do representante do restaurante`} </S_h2>
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

          <S_h3 ga="sub1"> {`Endereço do representante`} </S_h3>
          <Inpt_01
            onChange={hdl_rua}
            value={rua}
            name={'field_rua'}
            placeholder={`digite o nome da rua`}
            textLabel={`Rua`}
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
          <S_hr_01 />

          <S_h2 ga="tit2"> {`Dados da empresa`} </S_h2>

        </S_form>

      </S_section_01>
    </S_main>
  </>
);

}

export default Rcad;