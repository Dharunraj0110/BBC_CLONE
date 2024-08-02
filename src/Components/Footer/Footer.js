import '../Footer/Footer.css'
import BBClogo1 from '../../Assests/Images/bbc-logo-removebg-preview.png'
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import socialmediaicon from '../../Assests/Images/socialmedia.png'

function Footer(){

    return(
        <div>

            <div className='Footer-main'>
                <img src={BBClogo1} className='BBClogo1' />
                <footer className='footermain1'>
               <Link to='/' style={{textDecoration:"none"}}>
               <li className='FooterLi'><a href='#' className='FooterLiA'>Home</a></li>
               </Link>

               <Link to='/news' style={{textDecoration:"none"}}>
               <li className='FooterLi'><a href='#' className='FooterLiA'>News</a></li>
               </Link>

               <Link to='/sports'  style={{textDecoration:"none"}}>
               <li className='FooterLi'><a href='#' className='FooterLiA'>sports</a></li>
               </Link>

               <Link to='/buisness' style={{textDecoration:"none"}}>
               <li className='FooterLi'><a href='#' className='FooterLiA'>Buisness</a></li>
               </Link>

               <Link to='innovation' style={{textDecoration:"none"}}>
               <li className='FooterLi'><a href='#' className='FooterLiA'>Innovation</a></li>
               </Link>

               <Link to='culture' style={{textDecoration:"none"}}>
               <li className='FooterLi'><a href='#' className='FooterLiA'>Culture</a></li>
               </Link> 
              
               </footer>
               <hr className='line10'></hr>
               <h6 className='head66'>Follw us on :</h6>
               <img src={socialmediaicon} className='socialmediaicon' />

               <div className='sociallinks-main'>
               <li className='sociallinks'><a href='#' className='sociallinksA'>Terms of Use</a></li>
               <li className='sociallinks'><a href='#' className='sociallinksA'>About the BBC</a></li>
               <li className='sociallinks'><a href='#' className='sociallinksA'>Privacy Policy</a></li>
               <li className='sociallinks'><a href='#' className='sociallinksA'>Cookies</a></li>
               <li className='sociallinks'><a href='#' className='sociallinksA'>Contact the BBC</a></li>
               <li className='sociallinks'><a href='#' className='sociallinksA'>Advertice With Us</a></li>
            </div>
            <p className='copyrightbbc'>Copyright 2024 BBC.All rights reserved. The BBC is not responsibe for the content</p>
            <div>
                <hr className='lastlineinfooter'></hr>
            </div>
            </div>
        </div>
    )
}
export default Footer;