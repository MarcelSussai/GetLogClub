import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { cusMQ, cusTR, fontF, Input_01, S_main_base } from "../../config/theme";
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'


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
  ${cusTR('.2s')}

  ${cusMQ(768)} {
    width: 480px;
  }
`

const S_div_01 = styled.div`
  width: 100%;
  padding: 16px;
  background: ${ ({theme}) => theme.colors.green.c200 };
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${ ({theme}) => theme.colors.red.c300 };
  ${cusTR('.2s')}
`
const S_div_02 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  ${cusTR('.2s')}
`
const S_div_03 = styled.div`
  padding: 4px 16px;
  border-bottom: solid 1px ${ ({theme}) => theme.colors.blue.c400 };
  border-top: ${ ({theme, sel}) => sel ? 'solid 1px ' + theme.colors.blue.c400 : 'solid 1px ' + theme.colors.white };
  background: ${ ({theme, sel}) => sel ? theme.colors.blue.c100 : '' };
  position: relative;
  ${cusTR('.2s')}
  cursor: pointer;

  &:hover {
    background: ${ ({theme}) => theme.colors.gray.c100 };
  }
`
const S_div_04 = styled.div`
  padding: 4px 16px;
  border-bottom: ${ ({theme, sel}) => sel ? 'solid 1px ' + theme.colors.blue.c400 : 'solid 1px ' + theme.colors.white };
  background: ${ ({theme, sel}) => sel ? theme.colors.blue.c100 : '' };
  position: relative;
  ${cusTR('.2s')}
  cursor: pointer;
  
  &:hover {
    background: ${ ({theme}) => theme.colors.gray.c100 };
  }
`
const S_div_05 = styled.div`
  ${cusTR('.2s')}
  width: 18px;
  height: 18px;
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 18px;
  background: ${ ({theme, sel}) => sel ? theme.colors.blue.c600 : '' };
`
const S_div_06 = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  ${cusTR('.2s')}
`
const S_div_07 = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: solid 1px ${ ({theme, valid}) => valid ? theme.colors.white : theme.colors.red.c200 };
  margin: 16px;
  height: ${ ({valid}) => valid ? '16px' : 'fit-content' };
  overflow: hidden;
  ${cusTR('.2s')}
`


const S_h1 = styled.h1`
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  color: ${ ({theme}) => theme.colors.blue.c700 };
  ${cusTR('.2s')}
`
const S_h2 = styled.h2`
  ${cusTR('.2s')}
  font-size: 14px;
  color: ${ ({theme}) => theme.colors.gray.c600 };
  margin-bottom: 8px;
  text-align: center;
`
const S_p_01 = styled.p`
  font-weight: 500;
  color: ${ ({theme}) => theme.colors.blue.c700 };
  ${cusTR('.2s')}
`
const S_p_02 = styled.p`
  /* text-align: center; */
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  text-transform: lowercase;
  opacity: ${ ({valid}) => valid ? '0' : '1' };
  color: ${ ({theme}) => theme.colors.red.p500 };
  ${cusTR('.2s')}
`

const S_btn_01 = styled.button`
  ${cusTR('.2s')}
  padding: 8px 16px 8px 16px;
  font-weight: 600;
  border: none;
  width: 40%;
  background: ${ ({theme}) => theme.colors.aqua.c600 };
  color: ${ ({theme}) => theme.colors.green.p300 };
  border-radius: 8px;
  box-shadow: 2px 4px 8px ${ ({theme}) => theme.colors.blackShadow3 };
  cursor: ${ ({opa}) => opa ? 'pointer' : 'not-allowed' };
  
  opacity: ${ ({opa}) => opa ? '1' : '.4' };
  &:hover {
    background: ${ ({theme}) => theme.colors.aqua.c700 };
  }
`

const Register = () => {
  const router = useRouter()

  const [selecionado, setSelecionado] = useState('r')

  const hdl_entregador = () => setSelecionado('e')
  const hdl_restaurante = () => setSelecionado('r')

  const [email, setEmail]               = useState('')
  const [emailValid, setEmailValid]     = useState(false)

  const [pass, setPass]                 = useState('')
  const [passValid, setPassValid]       = useState(false)

  const [cPass, setCPass]               = useState('')
  const [cPassValid, setCPassValid]     = useState(false)

  const [validAll, setValidAll]         = useState(false)

  const pass_regex      = /^[\S]{6,}$/i
  const email_regex = /^[a-z0-9_.-]+[@][a-z0-9-]+[\.][a-z0-9-]+[\.]?[a-z0-9-]+$/i
  
  
  const isEmailValid = (valor) => {
    if (valor.match(email_regex)) {
      setEmail(valor)
      setEmailValid(true)
    } else {
      setEmailValid(false)
    }
  }
  const isPassValid = (valor) => {
    if(valor.match(pass_regex)) {
      setPass(valor)
      setPassValid(true)
    } else {
      setPassValid(false)
    }
  }
  const isCPassValid = (valor) => {
    if(valor.match(pass_regex)) {
      if(valor === pass) {
        setCPass(valor)
        setCPassValid(true)
      } else { setCPassValid(false) }
    } else {
      setCPassValid(false)
    }
  }

  const hdl_inpt_email            = (e) => {
    let value = e.target.value
    isEmailValid(value)
  }

  const hdl_inpt_senha            = (e) => {
    let value = e.target.value
    isPassValid(value)
  }

  const hdl_inpt_confirmarSenha   = (e) => {
    let value = e.target.value
    isCPassValid(value)
  }

  useEffect(() => {
    let contador = 0
    emailValid  ? ++contador : ''
    passValid   ? ++contador : ''
    cPassValid  ? ++contador : ''
    contador === 3 ? setValidAll(true) : setValidAll(false)
    console.log('email: ', emailValid);
    console.log('pass: ', passValid);
    console.log('cPass: ', cPassValid);
    console.log('TUDO: ', validAll);
  }, [emailValid, passValid, cPassValid])

  useEffect(() => {
    console.log(selecionado);
  }, [selecionado])
  
  const focus_email     = (e) => {
    isEmailValid(e.target.value)
    isPassValid(pass)
    isCPassValid(cPass)
  }
  const focus_pass      = (e) => {
    isEmailValid(email)
    isPassValid(e.target.value)
    isCPassValid(cPass)
  }
  const focus_cPass     = (e) => {
    isEmailValid(email)
    isPassValid(pass)
    isCPassValid(e.target.value)
  }

  const hdl_click_01 = (e) => {
    e.preventDefault()
    if (validAll) {
      Cookies.set('email', email)
      Cookies.set('pass', pass)
      if(selecionado === 'r') {
        router.push('/cadastroR')
      }
      if(selecionado === 'e') {
        router.push('/cadastroE')
      }
    }
  }

  // const ofEmail = () => 

  return (
  <>
    <S_main>

      <S_section_01>

        <S_div_01>
          <S_h1> {`Registrar`} </S_h1>
        </S_div_01>
        <S_div_02>
          <S_h2>{`Você é entregador ou representa um restaurante?`}</S_h2>
          <S_div_03 onClick={hdl_entregador} sel={selecionado === 'e'}>
            <S_p_01> {`Entregador`} </S_p_01>
            <S_div_05 sel={selecionado === 'e'} />
          </S_div_03>
          <S_div_04 onClick={hdl_restaurante} sel={selecionado === 'r'}>
            <S_p_01> {`Restaurante`} </S_p_01>
            <S_div_05 sel={selecionado === 'r'} />
          </S_div_04>
        </S_div_02>

        <S_div_06>
          <Input_01
            oc={hdl_inpt_email}
            txtLabel="E-mail"
            txtPh="Digite aqui seu e-mail"
            name="email"
            type="text"
            valid={emailValid}
            focus={focus_email}
            />
          <Input_01
            oc={hdl_inpt_senha}
            txtLabel="Senha"
            txtPh="Digite aqui sua senha"
            name="senha"
            type="password"
            valid={passValid}
            focus={focus_pass}
            />
          <Input_01
            oc={hdl_inpt_confirmarSenha}
            txtLabel="Confirmar Senha"
            txtPh="Confirme a senha digitada acima"
            name="confirmar"
            type="password"
            valid={cPassValid}
            focus={focus_cPass}
          />
        </S_div_06>
        <S_div_07 valid={validAll}>
          
          <S_p_02 valid={emailValid}> {`Por favor, fornecer um email válido!`} </S_p_02>
          <S_p_02 valid={passValid}> {`A senha deve ter mais de 6 caracteres!`} </S_p_02>
          <S_p_02 valid={cPassValid}> {`A senha de confirmação está incorreta!`} </S_p_02>
        </S_div_07>

        <S_btn_01 opa={validAll} onClick={hdl_click_01}>Próximo</S_btn_01>

      </S_section_01>
    </S_main>
  </>
);

}

export default Register;