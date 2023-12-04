import './App.css';
import ReservationVol from './Flight';
import Navbar from './Navbar'
import Flight from './delta';
import FlightComponent from './flightcard';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reserver from './Destination';


function App() {
  return (
    <div style={{ backgroundColor: '#fafbfe', minHeight: '100vh'}}>
      <Navbar/>
    <div style={{ backgroundColor:'#022d5c',display:'flex', justifyContent:'center'}}><p style={{color:'white', fontSize:'2.5rem',textDecoration:'none', fontWeight:'500',lineHeight:'46px', paddingTop:'20px',paddingBottom:'20px'}}>
    Réservez des vols pas chers sur plus de 500 compagnies</p></div>
    <div style={{backgroundColor: '#022d5c',
    position: 'absolute',
    display: 'flex',
    height: '16rem',
    width: '100%',
    justifyContent:'center'
    }}>
      <div style={{backgroundColor: '#ffffff', paddingBottom: '25px', width: '75%', height:'300px', borderRadius:'10px', marginTop:'4px'}}><ReservationVol/></div></div> 
      <div style={{backgroundColor:'#002144'}}>
      <div style={{marginTop:'250px', display:'flex',justifyContent:'flex-end'}}>
        <img src="flight.jpg" alt="" style={{width:'100%',}}/>
      </div> 
        </div> 
    <div className='flex flex-wrap justify-center mt-5'>
    <Reserver/>
      <div className='flex flex-Wrap justify-center'>
      <FlightComponent/>
      <Flight/>
    </div>

    </div>
    <Footer/>
    </div>
  )
}
export default App;