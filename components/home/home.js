import styled from 'styled-components';
import { cusMQ, cusTR, fontF, S_main_base } from "../../config/theme";



const S_main = styled(S_main_base)`
`
const S_section_01 = styled.section`
  width: 100%;
  background: ${ ({theme}) => theme.colors.white };
  border-left: solid 1px ${ ({theme}) => theme.colors.red.c300 };
  border-right: solid 1px ${ ({theme}) => theme.colors.red.c300 };
  box-shadow: 0 8px 16px ${ ({theme}) => theme.colors.blackShadow };
  padding: 16px;
  display: flex;
  flex-direction: column;

  ${cusMQ(1024)} {
    width: 960px;
  }
`
const S_div_01 = styled.div`
  width: 100%;
  padding: 16px;
  border-bottom: solid 2px ${ ({theme}) => theme.colors.skin.c400 };
  border-top: solid 2px ${ ({theme}) => theme.colors.skin.c400 };
  background: ${ ({theme}) => theme.colors.skin.p300 };
  border-radius: 16px;
  ${cusMQ(768)} {
    width: 50%;
    
  }
  ${cusMQ(1024)} {
    
  }
`
const S_h1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: right;
  display: flex;
  gap: 8px;
  flex-direction: column;
  line-height: 1.4;
  align-items: flex-end;
  color: ${ ({theme}) => theme.colors.brown.c800 };
  font-style: italic;
  ${cusMQ(375)} {
    font-size: 26px;
  }
  ${cusMQ(425)} {
    font-size: 30px;
  }
  ${cusMQ(768)} {
    font-size: 32px;
  }
  ${cusMQ(1024)} {
    font-size: 48px;
  }
`
const S_div_02 = styled.div`
  width: 112px;
  
  ${cusMQ(1024)} {
    width: 168px;
  }
`
const S_img_01 = styled.img`
`
const S_img_02 = styled.img`
  width: 224px;
  ${cusMQ(425)} {
    width: 288px;
    
  }
  ${cusMQ(768)} {
    width: 360px;
  }
  ${cusMQ(1024)} {
    width: 440px;
  }
`
const S_div_03 = styled.div`
  max-width: 666px;
  padding: 16px;
`
const S_div_04 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 40px 0;
  margin-top: 40px;
  border-bottom: solid 1px ${ ({theme}) => theme.colors.gray.c100 };
  
  ${cusMQ(768)} {
    flex-direction: ${ ({r}) => r === 'y' ? 'row-reverse': 'row' };
    justify-content: space-between;
  }

`
const S_div_05 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  gap: 8px;
  border-bottom: solid 1px ${ ({theme}) => theme.colors.gray.c100 };
  background: ${ ({theme}) => theme.colors.aqua.c100 };
`
const S_p_01 = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
  color: ${ ({theme}) => theme.colors.brown.c600 };
  
  ${cusMQ(425)} {
    font-size: 18px;
  }
`
const S_btn_01 = styled.button`
  ${cusTR('.2s')}
  padding: 8px 16px 8px 16px;
  font-weight: 600;
  border: none;
  width: fit-content;
  background: ${ ({theme}) => theme.colors.aqua.c600 };
  color: ${ ({theme}) => theme.colors.green.p300 };
  border-radius: 8px;
  box-shadow: 2px 4px 8px ${ ({theme}) => theme.colors.blackShadow3 };
  cursor: pointer;
  
  &:hover {
    background: ${ ({theme}) => theme.colors.aqua.c700 };

  }
`
const S_h3_01 = styled.h3`
  font-size: 18px;
  font-weight: 800;
  color: ${ ({theme}) => theme.colors.brown.c600 };
  border-bottom: solid 2px ${ ({theme}) => theme.colors.brown.c600 } ;
  line-height: 1.4;
  padding: 0 8px 8px 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;

  ${cusMQ(375)} {
    font-size: 20px;
  }
  ${cusMQ(425)} {
    font-size: 24px;
  }
  ${cusMQ(768)} {
    font-size: 26px;
  }
  ${cusMQ(1024)} {
    font-size: 32px;
  }
`
const S_p_02 = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
  color: ${ ({theme}) => theme.colors.blue.c700 };
  padding: 16px;
  
  ${cusMQ(425)} {
    font-size: 18px;
  }
`
const S_img_03 = styled.img`
  width: 160px;
  ${cusMQ(425)} {
    width: 200px;
    
  }
  ${cusMQ(768)} {
    width: 240px;
  }
  ${cusMQ(1024)} {
    width: 320px;
  }
`
const S_div_06 = styled.div`
  width: 100%;
  padding: 16px;
  border-bottom: solid 2px ${ ({theme}) => theme.colors.skin.c400 };
  border-top: solid 2px ${ ({theme}) => theme.colors.skin.c400 };
  background: ${ ({theme}) => theme.colors.skin.p300 };
  border-radius: 16px;
  ${cusMQ(768)} {
    width: 80%;
    
  }
  ${cusMQ(1024)} {
    
  }
`

// ${ ({theme}) => theme.colors.gray.c100 }

const Home = () => {
  return (
  <>
    <S_main>

      <S_section_01>

        <S_div_04>

          <S_div_01>
            <S_h1>
              {`Contrate entregadores e gerencie suas entregas com a `}
              <S_div_02>
                <S_img_01 src="/logoContent.svg" />
              </S_div_02>
            </S_h1>
          </S_div_01>

          <S_div_03>
            <S_img_02 src="/img_01.svg" />
          </S_div_03>

        </S_div_04>

        <S_div_05>
          <S_p_01> {`Conheça nossos serviços e se cadastre!`} </S_p_01>
          <a href="/registerPage"><S_btn_01>{`Cadastre-se`}</S_btn_01></a>
        </S_div_05>

        <S_div_04>

          <S_div_03>
            <S_img_03 src="/img_02.svg" />
          </S_div_03>

          <S_div_06>
            <S_h3_01>
              {`Veja em tempo real o andamento de suas entregas!`}
            </S_h3_01>
            <S_p_02>
              {`Visualize em tempo real a localização dos seus entregadores no mapa, com um painel que lhe dá organização e mostra todas as informações pra gerir todo o processo de entrega`}

            </S_p_02>
          </S_div_06>


        </S_div_04>
        
        <S_div_04 r="y">

          <S_div_03>
            <S_img_03 src="/img_03.svg" />
          </S_div_03>

          <S_div_06>
            <S_h3_01>
              {`Tenha o cardápio digital personalizado para seus clientes`}
            </S_h3_01>
            <S_p_02>
              {`Edite e gerencie um cardápio digital personalizável para ser exibido aos seus clientes. Onde terão comodidade e facilidade para fazer seus pedidos de seus produtos! Tenha um pedaço do seu restaurante na internet!`}

            </S_p_02>
          </S_div_06>


        </S_div_04>

        <S_div_04>

          <S_div_03>
            <S_img_03 src="/img_04.svg" />
          </S_div_03>

          <S_div_06>
            <S_h3_01>
              {`E você entregador, ganhe mais entregando com a `}
              <S_div_02>
                <S_img_01 src="/logoContent.svg" />
              </S_div_02>
            </S_h3_01>
            <S_p_02>
              {`Se cadastre, baixe o app e trabalhe conosco! você sempre terá entregas, decida quando ficar online, tenha uma roteirização baseada em localidade. Aceite Pedidos e trabalhe com a nossa ajuda, ganhando e recebendo pelo app!`}

            </S_p_02>
          </S_div_06>

        </S_div_04>
        <S_div_05>
          <a href="/registerPage"><S_btn_01>{`Cadastre-se`}</S_btn_01></a>
        </S_div_05>

      </S_section_01>
    
    </S_main>
  </>
);

}

export default Home;