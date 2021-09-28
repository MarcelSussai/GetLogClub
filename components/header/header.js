import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from "../../config/theme";
import { useContext, useEffect } from "react";
import Link from 'next/link'

import Nav_01 from '../nav_01/nav_01';



const S_header = styled.header`
  width:${ ({hideActive}) => hideActive ? 'fit-content' : '100%' };
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  justify-content:${ ({hideActive}) => hideActive ? 'flex-start' : 'center' };
  padding-left: ${ ({hideActive}) => hideActive ? '8px' : '' };

  ${cusMQ(768)} {
    width:${ ({hideActive}) => hideActive ? 'fit-content' : '100%' };
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
  height: ${ ({hideActive}) => hideActive ? '40px' : '72px' };
  ${cusTR('.2s')}
  
  ${cusMQ(425)} {
    height: ${ ({hideActive}) => hideActive ? '56px' : '88px' };
  }
`
const S_div_02 = styled.div`
  width:${ ({hideActive}) => hideActive ? 'fit-content' : '100%' };
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left:${ ({hideActive}) => hideActive ? '' : '16px' };
  
  ${cusMQ(768)} {
  padding-left:${ ({hideActive}) => hideActive ? '' : '32px' };

  }
  ${cusMQ(1024)} {
    padding-left: unset;
    width:${ ({hideActive}) => hideActive ? 'fit-content' : '960px' };
    justify-content: space-between;
  }
`

const Header = (props) => {
  const { hideNav } = props

  return (
  <>
    <S_header hideActive={hideNav}>
      <S_div_02 hideActive={hideNav}>
        <Link href="/">
          <S_div_01>
            <S_img_01 hideActive={hideNav} src="/logoGetLogClub.svg" />
          </S_div_01>
        </Link>
        { hideNav ? '' : <Nav_01 /> }
        
      </S_div_02>
    </S_header>
  </>
);

}

export default Header;