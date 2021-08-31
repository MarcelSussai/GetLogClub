import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { axiosSimp } from '../components/services/axios';
import { v4 } from 'uuid'

const dev = false
const urlSocket =  dev ? 'http://localhost:3001/' : 'http://app.getlogclub.com.br/'
const myID = v4()
const socket = io(urlSocket, {transports: ['polling', 'websocket']})

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

  const [coo, setCoo] = useState([])
  const [vez, setVez] = useState(0)

  useEffect(() => {
    socket.on('connect', () => console.log('[IO] - conectado => nova conexão com sucesso! - ', socket.id))
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
    const hdlTesteSocket = dado => {
      setCoo([...coo, dado])
      console.log(dado);
    }
    socket.onAny('teste.one', hdlTesteSocket)
    return socket.offAny('teste.one', hdlTesteSocket)
  }, [coo])
  
  const hdlV03 = () => {
    setVez(vez + 1)
    socket.emit('teste.one', { id: myID, message: 'teste', vez: vez, coo: coo })
  }

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
        <button onClick={hdlV03}> btn03 </button>
        <button> btn04 </button>
      </div>
      {coo}
    </div>
  </>
);

}


export default TesteCookies;