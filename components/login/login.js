import styled from 'styled-components';
import {
  cusMQ, cusTR, fontF,
  S_main_base, Input_01, Chk_01,
} from "../../config/theme";


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



const Login = () => {
  
  const handle_01 = (e) => console.log(e.target.value)
  const handle_02 = (e) => console.log(e.target.value)

  return (
  <>
    <S_main>
      <S_section_01>
        <S_div_01>
          <S_h1> {`Entrar`} </S_h1>
        </S_div_01>
        <S_div_03>
          <form className="form">
            <S_div_02>
              <Input_01 oc={handle_01} txtLabel="E-mail" name="email" txtPh="Digite aqui seu e-mail" />
              <Input_01 oc={handle_02} txtLabel="Senha" name="senha" txtPh="Digite aqui sua senha" type="password" />
              <S_div_04>
                <S_a_01> {`Esqueci a senha`} </S_a_01>
                <Chk_01 />
              </S_div_04>
            </S_div_02>
          </form>
        </S_div_03>
        <S_btn_01> {`Entrar`} </S_btn_01>
      </S_section_01>
    </S_main>
  </>
);

}

export default Login;