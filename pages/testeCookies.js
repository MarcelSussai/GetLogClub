import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { axiosSimp } from '../components/services/axios';



const sty01 = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const sty02 = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const TesteCookies = () => {
  const [v01, setV01] = useState('')
  const [v02, setV02] = useState({})
  const [v03, setV03] = useState('')
  const [v04, setV04] = useState('')

  const [coo, setCoo] = useState({})

  useEffect(() => {
    const cookies = parseCookies()
    console.log('[COOKIES]');
    console.log(cookies);
    console.log('[_______]');
    cookies.v01 ? setV01(cookies.v01) : ''
  }, [])

  const hdlV01 = () => {
    setCookie(null, 'v01', 'teste02', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/testeCookies',
    })
  }

  const hdlV02 = async () => {
    const result = await axiosSimp({
      method: 'get',
      url: '/users',
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Authorization", 
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
          "Content-Type": "application/json;charset=UTF-8"
      }
    }).then(res => res.data)
    console.log(result);
  }

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     hdlV02()
  //   }, 2000)
  //   return () => clearInterval(id)
  // }, [])
  
  useEffect(() => {
    const socket = io('http://app.getlogclub.com.br/')
    // const socket = io('http://localhost:3001/')
    socket.on('connect', () => console.log('[IO] - conectado => nova conexão com sucesso! - ', socket.id))
  }, [])



  return (
  <>
    <div styles={sty01}>
      <div styles={sty02}>
        <p>{`Valor 01: ${v01}`}</p>
        <p>{`Valor 01: ${v02}`}</p>
        <p>{`Valor 01: ${v03}`}</p>
        <p>{`Valor 01: ${v04}`}</p>
      </div>
      <div styles={sty02}>
        <button onClick={hdlV01}> btn01 </button>
        <button onClick={hdlV02}> btn02 </button>
        <button> btn03 </button>
        <button> btn04 </button>
      </div>
    </div>
  </>
);

}


export default TesteCookies;