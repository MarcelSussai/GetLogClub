import { useContext, useEffect } from "react";
import { AppCtx } from "../contexts/ctxGlobal";
import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from "../../config/theme";

const S_div_01 = styled.div`

`

const Header = () => {

const {testeCtx} = useContext(AppCtx)

  return (
  <>
    teste
  </>
);

}

export default Header;