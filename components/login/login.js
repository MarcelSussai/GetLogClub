// ________________________________________________________________
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  cusMQ, cusTR, fontF, theme,
  S_main_base, Input_01, Chk_01,
} from "../../config/theme"
import { axiosSimp } from '../services/axios'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import Cookies from 'js-cookie'
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query'
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

  ${cusMQ(768)} {
    width: 480px;
  }
`
const S_h1 = styled.h1`
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  color: ${ ({theme}) => theme.colors.blue.c700 };
`
const S_div_01 = styled.div`
  width: 100%;
  padding: 16px;
  background: ${ ({theme}) => theme.colors.green.c200 };
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${ ({theme}) => theme.colors.red.c300 };
`
const S_div_02 = styled.div`
  width: 100%;
  padding: 16px 8px;
  margin-top: ${ ({br}) => br === 'y' ? '8px' : '0' };
  border-bottom: ${ ({theme, br}) => br ==='y' ? 'solid 1px' + theme.colors.gray.c300 : 'none' };
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${cusMQ(375)} {
    width: 96%;
  }
  ${cusMQ(425)} {
    width: 88%;
  }
  ${cusMQ(768)} {
    border-bottom: unset;
    border-right: ${ ({theme, br}) => br ==='y' ? 'solid 1px' + theme.colors.gray.c300 : 'none' };
    width: ${ ({br}) => br === 'y' ? '50%' : '100%' };
  }
`
const S_div_03 = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  
  ${cusMQ(375)} {
    /* flex-direction: row;
    justify-content: space-between; */
  }
  ${cusMQ(768)} {
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
  }
  .form {
    width: 100%;
    padding: 0;
    display: flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${cusMQ(768)} {
      flex-direction: row;
      justify-content: space-between;
      padding: 16px;
    }
  }
`
const S_div_04 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const S_div_05 = styled.div`
  ${fontF}
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 16px;
`
const S_a_01 = styled.a`
  ${cusTR('.2s')}
  line-height: 1;
  font-weight: 600;
  font-size: 12px;
  color: ${ ({theme}) => theme.colors.aqua.c500 };
  padding: 4px 8px;
  border-bottom: solid 1px ${ ({theme}) => theme.colors.aqua.c500 };
  /* border-top: solid 1px ${ ({theme}) => theme.colors.aqua.c500 }; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${ ({theme}) => theme.colors.aqua.c600 };
    border-bottom: solid 1px ${ ({theme}) => theme.colors.aqua.c600 };
    background: ${ ({theme}) => theme.colors.aqua.c200 };
  }
`
const S_btn_01 = styled.button`
  ${cusTR('.2s')}
  grid-area: ${ ({ga}) => ga };
  padding: 8px 16px 8px 16px;
  font-weight: 600;
  border: none;
  width: 240px;
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
const S_btn_02 = styled.button`
  ${cusTR('.2s')}
  padding: 8px 16px 8px 16px;
  font-weight: 600;
  border: none;
  width: 128px;
  background: ${ ({theme}) => theme.colors.aqua.c600 };
  color: ${ ({theme}) => theme.colors.green.p300 };
  border-radius: 8px;
  box-shadow: 2px 4px 8px ${ ({theme}) => theme.colors.blackShadow3 };
  cursor: pointer;
  
  /* ${cusMQ('1024')} {
    position: absolute;
    bottom: 16px;
  } */
`
const S_h2_01 = styled.h2`
  font-size: 20px;
  color: ${ ({theme}) => theme.colors.red.c600 };
`

// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



// ________________________________________________________________
const r_email = /^[a-z0-9_.-]+[@][a-z0-9-]+[\.][a-z0-9-]+[\.]?[a-z0-9-]+$/i
const r_senha = /^[\S]{6,}$/i
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



// ________________________________
const Login = () => {

  const router = useRouter()
  // ________________________________________________
  const media_1024 = useMediaQuery('(min-width: 1024px)')
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________________________
  const [email, setEmail]               = useState('')
  const [emailValid, setEmailValid]     = useState(false)
  const [senha, setSenha]               = useState('')
  const [senhaValid, setSenhaValid]     = useState(false)
  const [valDados, setValDados]         = useState(false)
  const [isOpenModal, setIsOpenModal]   = useState(false)
  const [wModal, setWModal]             = useState(80)
  const [hModal, setHModal]             = useState(40)
  const [lModal, setLModal]             = useState((100 - wModal) / 2)
  const [tModal, setTModal]             = useState((100 - hModal) / 2)
  const [msgErro, setMsgErro]           = useState('Mensagem de erro padrão!')
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________________________
  useEffect(() => {
    if(media_1024) {
      setWModal(48)
      setLModal((100 - 48) / 2)
    } else {
      setWModal(80)
      setLModal((100 - 80) / 2)
    }
  }, [media_1024])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________________________
  useEffect(() => {
    validando()
  }, [email, senha])
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________________________
  const is_email_valid = (v) => {
    setEmail(v)
    v.match(r_email) ? setEmailValid(true) : setEmailValid(false) 
  }
  const is_senha_valid = (v) => {
    setSenha(v)
    v.match(r_senha) ? setSenhaValid(true) : setSenhaValid(false) 
  }
  const handle_01 = (e) => is_email_valid(e.target.value)
  const handle_02 = (e) => is_senha_valid(e.target.value)
  const validando = () => {
    let c = 0
    is_email_valid(email)
    is_senha_valid(senha)
    emailValid ? ++c : ''
    senhaValid ? ++c : ''
    c === 2 ? setValDados(true) : setValDados(false)
  }
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________________________
  const modal_open      = () => setIsOpenModal(true)
  const modal_close     = () => {
    setIsOpenModal(false)
    // document.location.reload()
    setSenha('')
    setEmail('')
  }
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________________________
  const submitHdl = async () => {

    // console.log('________________________________')
    // console.log('começa o envio do login para api')
    // console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')
    validando()
    if(valDados) {
      await axiosSimp({
        method: 'post',
        url: '/login',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Authorization", 
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
          "Content-Type": "application/json;charset=UTF-8"
        },
        data: {
          email: email,
          pass: senha
        }
      }).then(res => res.data).then(async (r) => {
        if (r.hasOwnProperty('error')) {
          setMsgErro(r.error)
          // Cookies.remove('token')
          // Cookies.remove('nome')
          // Cookies.remove('email')
          modal_open()
        } else {
          // console.log('________________________________')
          // console.log('retorno do envio do login')
          // console.log('validando se retornou um token')
          // console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')
          console.log('________________________________')
          console.log(r)
          console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')
          console.log(r.admin)
          let adm = JSON.parse(r.admin)
          console.log(adm)

          Cookies.set('token', r.token)
          Cookies.set('nome', r.name)
          Cookies.set('email', r.name)
          if(adm.hasOwnProperty('isRepresentant')) {
            if(adm.isRepresentant) {
              router.push('/painelRestaurant')
            }
          }
          if(adm.hasOwnProperty('isEntregador')) {
            if(adm.isEntregador) {
              router.push('/painelEntragador')
            }
          }
        }
  
        
      })
    }
  }
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  const estilo_modal_content = {
    width: `${wModal}%`,
    height: `${hModal}%`,
    left: `${lModal}%`,
    top: `${tModal}%`,
    padding: 0,
    zIndex: 200,
    border: `solid 1px ${theme.colors.red.c300}`,
    boxShadow: `0 0 32px ${theme.colors.red.c200}`,
  }

  return (
  <>
    <Modal
      onRequestClose={modal_close} isOpen={isOpenModal} ariaHideApp={false}
      shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true}
      style={{ content: estilo_modal_content }}
    >
      <S_div_05>
        <S_h2_01> {msgErro} </S_h2_01>
        <S_btn_02 onClick={modal_close}>ok</S_btn_02>
      </S_div_05>
    </Modal>
    <S_main>
      <S_section_01>
        <S_div_01>
          <S_h1> {`Entrar`} </S_h1>
        </S_div_01>
        <S_div_03>
          <form className="form">
            <S_div_02>
              <Input_01 focus={handle_01} value={email} valid={emailValid} oc={handle_01} txtLabel="E-mail" name="email" txtPh="Digite aqui seu e-mail" />
              <Input_01 focus={handle_02} value={senha} valid={senhaValid} oc={handle_02} txtLabel="Senha" name="senha" txtPh="Digite aqui sua senha" type="password" />
              <S_div_04>
                <S_a_01> {`Esqueci a senha`} </S_a_01>
              </S_div_04>
            </S_div_02>
          </form>
        </S_div_03>
        <S_btn_01 disa={valDados} disabled={!valDados} onClick={submitHdl}> {`Entrar`} </S_btn_01>
      </S_section_01>
    </S_main>
  </>
);

}
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾


// ________________
export default Login;
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾