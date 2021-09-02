
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { axiosSimp } from '../components/services/axios';
import { v4 } from 'uuid'



const dev = false
const urlSocket =  dev ? 'http://localhost:3001/' : 'http://app.getlogclub.com.br/'
const myID = v4()
const socket = io(urlSocket, {
  transports: ["polling", "websocket"],
})

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

  

  const [v01, setV01] = useState('')
  const [v02, setV02] = useState({})
  const [v03, setV03] = useState('')
  const [v04, setV04] = useState('')

  const [coo, setCoo] = useState([])
  const [vez, setVez] = useState(0)

  useEffect(() => {
    socket.on('connect', () => console.log('[IO] - conectado => nova conexão com sucesso! - ', socket.id))
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

    const hdlListenTeste = (data) => {
      setCoo([...coo, data])
      console.log(coo);
    }

    console.log(socket);
    socket.on("teste.one", hdlListenTeste)
    // return socket.off('teste.one', hdlListenTeste)
    // return socket.off('teste.one', hdlTesteSocket)
  }, [coo])
  
  const hdlV03 = () => {
    setVez(vez + 1)
    socket.emit('teste.one', { id: myID, message: 'teste', vez: vez, socketId: socket.id})
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
            <h3 key={i} style={{textAlign: myID === v ? 'right' : '',}}>
              {`Valor ${i} - ${v}`}
            </h3>
          )
        })
      }
      <br />
      {vez}
    </div>
  </>
);

}


export default TesteCookies;