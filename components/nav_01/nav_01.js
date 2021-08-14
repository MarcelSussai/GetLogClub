import styled from 'styled-components';
import { cusMQ, cusTR, fontF, theme } from "../../config/theme";
import Link from 'next/link'

import AddUser_ico from '../icons/addUser_ico';
import Contact_ico from '../icons/contact_ico';
import Enter_ico from '../icons/enter_ico';


// ________________________________________________________________
const piece_01 = `solid 2px `

const S_nav = styled.nav`
  ${cusTR('.2s')}
  ${fontF}
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  
  ${cusMQ(768)} {
    bottom: unset;
    left: unset;
    top: 0;
    right: 0;

    width: 50%;
  }
  ${cusMQ(1024)} {
    width: fit-content;
    top: unset;
    right: unset;
    position: unset;
  }
`
const S_div_01 = styled.div`
  ${cusTR('.2s')}
  /* padding: 8px 0 0 0; */
  background: linear-gradient(to bottom,  ${ ({theme}) => theme.colors.red.c800 },  ${ ({theme}) => theme.colors.red.c600 });
  width: 80%;
  display: flex;
  flex-direction: row;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top: ${ ({theme}) => piece_01 + theme.colors.red.p500 };
  box-shadow: 0 -4px 16px ${ ({theme}) => theme.colors.blackShadow3 };
  
  ${cusMQ(425)} {
    width: 320px;
  }
  ${cusMQ(768)} {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-top: unset;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-bottom: ${ ({theme}) => piece_01 + theme.colors.red.p500 };
    box-shadow: 0 4px 16px ${ ({theme}) => theme.colors.blackShadow3 };
    /* padding: 8px; */
    height: fit-content;
  }
`
const S_div_02 = styled.div`
  ${cusTR('.2s')}
  padding: 8px 0 0 0;
  width: 100%;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-left: ${ ({theme, start}) => start === 'y' ? piece_01 + theme.colors.red.p500 : 'none' };
  border-right: ${ ({theme, final}) => final !== 'y' ? piece_01 + theme.colors.red.p500 : 'none' };
  cursor: pointer;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  
  ${cusMQ(768)} {
    padding: 16px 0 8px 0;
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

  }

  &:hover {
    background: ${ ({theme}) => theme.colors.red.c800 };
  }
`
const S_p_01 = styled.div`
  /* height: 32px; */
  padding: 8px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 1;
  font-weight: 600;
  color: ${ ({theme}) => theme.colors.green.p300 };
  
  ${cusMQ(425)} {
    font-size: 14px;

  }
`
const S_div_03 = styled.div`
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 8px; */
  /* .addUser {
    width: 32px;
    height: 32px;
  } */

  ${cusMQ(425)} {
    width: unset;
    height: 24px;
  }
  ${cusMQ(768)} {
    height: 26px;
  }
`
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



const Nav_01 = () => {

  return (
  <>
    <S_nav>
      <S_div_01>

        <Link href="/loginPage">
          <S_div_02 start="y">
            <S_div_03>
              <Enter_ico color={theme.colors.green.p300} />
            </S_div_03>
            <S_p_01>{`Entrar`}</S_p_01>
          </S_div_02>
        </Link>

        <Link href="/registerPage">
          <S_div_02 >
            <S_div_03>
              <AddUser_ico color={theme.colors.green.p300} />
            </S_div_03>
            <S_p_01>{`Cadastrar`}</S_p_01>
          </S_div_02>
        </Link>

        <S_div_02 final="">
          <S_div_03>
            <Contact_ico color={theme.colors.green.p300} />
          </S_div_03>
          <S_p_01>{`Contato`}</S_p_01>
        </S_div_02>

      </S_div_01>
    </S_nav>
  </>
);

}

export default Nav_01;