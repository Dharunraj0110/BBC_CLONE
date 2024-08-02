// import  '../src/App.css';
// import Navbar1 from "./Components/Navbar1/Navbar1";


// function App(){
//   return(
//     <div className='app1'>
//      <Navbar1 />

//     </div>
//   )
// }

// export default App;

import './App1.css';
import '../src/Components/Aboutkalam/Aboutkalam.js'
import Navbar1 from './Components/Navbar1/Navbar1';
import Home from './Components/Home/Home.js';
import { Route,Routes } from 'react-router-dom';
import News from './Components/News/News';
import Aboutkalam from '../src/Components/Aboutkalam/Aboutkalam.js';
import Aboutmodiputin from './Components/Aboutmodiputin/Aboutputin.js';
import Aboutarmy from './Components/Aboutarmy/Aboutarmy.js';
import Aboutpandya from './Components/Aboutpandya/Aboutpandya.js';
import Aboutmicrosoft from './Components/Aboutmicrosoft/Aboumicrosoft.js';
import Footer from './Components/Footer/Footer.js';
import Sports from './Components/Sports/Sports.js';
import Buisness from './Components/Buisness/Buisness.js';
import innovation from './Components/Innovation/Innovation.js';
import Culture from './Components/Culture/Culture.js';
function app1(){
return(
  <div>
    <Navbar1/>
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/news' Component={News}></Route>
      <Route path='/aboutkalam' Component={Aboutkalam}></Route>
      <Route path='/' Component={Home}></Route>  
      <Route path='/Aboutmodiputin'Component={Aboutmodiputin}></Route> 
      <Route path='/Aboutarmy' Component={Aboutarmy} />
      <Route path='Aboutpandya' Component={Aboutpandya} />
      <Route path='Aboutmicrosoft' Component={Aboutmicrosoft} />
      <Route path='/Emicroclic' Component={Home}/>
      <Route path='/home' Component={Home}></Route>
      <Route path='/sports' Component={Sports}/>
      <Route path='/buisness' Component={Buisness}/>
      <Route path='/innovation' Component={innovation} /> 
      <Route path='/culture' Component={Culture} />
    </Routes>
   
    <Footer/>
  </div>
)
}

export default app1;