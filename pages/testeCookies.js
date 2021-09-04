
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { axiosSimp } from '../components/services/axios';
import { v4 } from 'uuid'



const dev = false
const urlSocket =  dev ? 'http://localhost:3001/' : 'https://app.getlogclub.com.br/'
const myID = v4()
const socket = io(urlSocket, 
  {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    },
    transports: ["websocket", "polling"],
  }
)

const sty01 = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}

const sty02 = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}


const TesteCookies = () => {

  
  // const val = []

  const [v01, setV01] = useState('')
  const [v02, setV02] = useState({})
  const [v03, setV03] = useState('')
  const [v04, setV04] = useState('')

  const [vez, setVez] = useState(0)

  const [coo, setCoo] = useState([])

  useEffect(() => {
    const fnConnect = () => console.log('[IO] - conectado => nova conexão com sucesso! - ', socket.id)
    socket.on('connect', fnConnect)
    return socket.on('disconnect', fnConnect)
  }, [])

  const hdlV01 = () => {
    
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
  
  useEffect(() => {
  console.log(socket);
  const hdlListenTeste = (dados) => { setCoo(coo => [...coo, dados]) }
  socket.on("receiveM", hdlListenTeste)
  }, [])
  
  useEffect(() => { console.log(coo) }, [coo])

  const hdlV03 = () => {
    setVez(vez + 1)
    let obj = {
      socket: `[AUTOR] - id => ${socket.id}`,
      autor: myID,
      mensagem: `[MENSAGEM] - ${vez}`,
    }
    setCoo(coo => [...coo, obj])
    socket.emit('sendM', obj)
  }

  return (
  <>
    <div styles={sty01}>
      <div styles={sty02}>
        <p styles={{textAlign: 'center', width: '100%'}}>{`Valor 01: ${v01}`}</p>
        <p styles={{textAlign: 'center', width: '100%'}}>{`Valor 01: ${v02}`}</p>
        <p styles={{textAlign: 'center', width: '100%'}}>{`Valor 01: ${v03}`}</p>
        <p styles={{textAlign: 'center', width: '100%'}}>{`Valor 01: ${v04}`}</p>
      </div>
      <div styles={sty02}>
        <button onClick={hdlV01}> btn01 </button>
        <button onClick={hdlV02}> btn02 </button>
        <button onClick={hdlV03}> btn03 </button>
        <button> btn04 </button>
      </div>

      {
        coo.map((v, i) => {
          return (
            <h3 key={i} style={{textAlign: myID === v.autor ? 'right' : '',}}>
              {`Valor ${i} - ${v.mensagem}`}
            </h3>
          )
        })
      }
    </div>
  </>
);

}


export default TesteCookies;