import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from "../../config/theme";
import { useContext, useEffect } from "react";
import Link from 'next/link'

import { AppCtx } from "../contexts/ctxGlobal";
import Nav_01 from '../nav_01/nav_01';



const S_header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  justify-content: center;

  ${cusMQ(768)} {
    width: 50%;
  }
  ${cusMQ(1024)} {
    width: 100%;
  }
`
const S_div_01 = styled.div`
  width: fit-content;
  background: ${ ({theme}) => theme.colors.whiteOpacity };
  padding: 0 0 8px 0;
  border-radius: 32px;
  cursor: pointer;
`
const S_img_01 = styled.img`
  height: 72px;
  ${cusTR('.2s')}
  
  ${cusMQ(425)} {
    height: 88px;
  }
`
const S_div_02 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  ${cusMQ(768)} {
  }
  ${cusMQ(1024)} {
    width: 960px;
    justify-content: space-between;
  }
`

const Header = () => {

  const {testeCtx} = useContext(AppCtx)

  return (
  <>
    <S_header>
      <S_div_02>
        <Link href="/">
          <S_div_01>
            <S_img_01 src="/logoGetLogClub.svg" />
          </S_div_01>
        </Link>
        <Nav_01 />
      </S_div_02>
    </S_header>
  </>
);

}

export default Header;