import styled from 'styled-components';
import { cusMQ, cusTR, fontF, theme } from "../../config/theme";

const S_path = styled.path`
  fill: ${ ({theme, cor}) => cor || theme.colors.black };
`

const AddUser_ico = (props) => {
  const { color } = props
  return (
  <>
    <svg width="100%" height="100%" className="addUser" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" {...props} className='fillAddUser'>
      <S_path cor={color} d="M14 10c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4zM5 6V3H3v3H0v2h3v3h2V8h3V6H5zM14 8a4 4 0 10-2.83-1.17A4 4 0 0014 8z" />
    </svg>
  </>
);

}

export default AddUser_ico;