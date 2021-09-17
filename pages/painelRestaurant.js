
import Head from '../components/head'
import Header from '../components/header/header'
import PainelR from '../components/painelRestaurante/painelR'



const PainelRestaurant = () => {


  return (
    <>
      <Head title="Painel - Restaurante" />
      <Header hideNav={true} />
      <PainelR />
    </>
)}

export default PainelRestaurant
