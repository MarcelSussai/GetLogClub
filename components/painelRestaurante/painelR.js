// IMPORTS_________________________________________________________
import Cookies from 'js-cookie';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  cusMQ, cusTR, fontF,
  S_main_base, Input_01, Chk_01,
} from "../../config/theme";
import { axiosSimp } from '../services/axios';
import { useRouter } from 'next/router'
import GoogleMapReact from 'google-map-react'
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



// ESTILOS_________________________________________________________
const S_main = styled(S_main_base)`
`
const S_section_01 = styled.section`
  width: 100%;
  background: ${ ({theme}) => theme.colors.white };
  border-left: solid 1px ${ ({theme}) => theme.colors.red.c300 };
  border-right: solid 1px ${ ({theme}) => theme.colors.red.c300 };
  box-shadow: 0 8px 16px ${ ({theme}) => theme.colors.blackShadow };
  padding: 0 0 32px 0;
  margin: 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${cusTR('.2s')}

  ${cusMQ(1024)} {
    /* width: 960px; */
  }
`
const S_container_maps_div = styled.div`
  width: 80%;
  height: 400px;
  border: solid 1px;
`
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾


// ________________________________
const PainelR = () => {



  return (
  <>
    <S_main>
      <S_section_01>

        {`Teste`}

      </S_section_01>
    </S_main>
  </>
);

}
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

export default PainelR;