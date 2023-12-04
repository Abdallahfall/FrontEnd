import Navbar from "./Navbar";
import Destination from "./Destination";
import './App.css'
import Footer from "./footer";

const Page = () => {
    return (
        <div>
           <Navbar/>
           <div className='bg-[#022d5c] flex flex-wrap justify-center ' style={{width:'100%', height:'70vh'}}>
            <div className="flex flex-column justify-center">
            <p style={{color:'white', fontSize:'2rem',textDecoration:'none', fontWeight:'500',lineHeight:'46px', paddingTop:'20px',paddingBottom:'px'}}>Découvrez les meilleur destinations</p>  </div>
            <div className="flex flex-wrap image-container">
                <img src="vue.png" className="image" alt="" style={{width:'70vh',height:'210px', borderRadius:'20px', margin:'10px'}}/>
                <img src="house.png" className="image" alt="" style={{width:'70vh',height:'210px', borderRadius:'20px', margin:'10px'}}/>
                <img src="maldive.png"className="image"  alt="" style={{width:'70vh',height:'210px', borderRadius:'20px', margin:'10px'}}/>
            </div>
           </div>
           <Destination/>
           <div style={{marginTop:'40px'}}>
           <Footer/>
           </div>
        </div>
    )}
    export default Page;