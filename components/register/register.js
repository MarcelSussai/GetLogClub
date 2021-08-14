import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { cusMQ, cusTR, fontF, Input_01, S_main_base } from "../../config/theme";



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
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
`

const S_div_03 = styled.div`
  padding: 4px 16px;
  border-bottom: solid 1px ${ ({theme}) => theme.colors.blue.c400 };
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
  border-bottom: solid 1px ${ ({theme}) => theme.colors.white };
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
const S_p_01 = styled.p`
  font-weight: 500;
  color: ${ ({theme}) => theme.colors.blue.c700 };
`
const S_div_06 = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
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
  cursor: pointer;
  
  &:hover {
    background: ${ ({theme}) => theme.colors.aqua.c700 };

  }
`


const Register = () => {

  const [selecionado, setSelecionado] = useState('r')

  const hdl_entregador = () => setSelecionado('e')
  const hdl_restaurante = () => setSelecionado('r')

  const hdl_inpt_email = (e) => console.log(e.target.value);
  const hdl_inpt_senha = (e) => console.log(e.target.value);
  const hdl_inpt_confirmarSenha = (e) => console.log(e.target.value);

  useEffect(() => {
    console.log(selecionado);
  }, [selecionado])

  return (
  <>
    <S_main>

      <S_section_01>

        <S_div_01>
          <S_h1> {`Registrar`} </S_h1>
        </S_div_01>

        <S_div_02>
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
          />
          <Input_01
            oc={hdl_inpt_senha}
            txtLabel="Senha"
            txtPh="Digite aqui sua senha"
            name="senha"
            type="password"
          />
          <Input_01
            oc={hdl_inpt_confirmarSenha}
            txtLabel="Confirmar Senha"
            txtPh="Confirme a senha digitada acima"
            name="confirmar"
            type="password"
          />
        </S_div_06>

        <S_btn_01>Próximo</S_btn_01>

      </S_section_01>

    </S_main>
  </>
);

}

export default Register;