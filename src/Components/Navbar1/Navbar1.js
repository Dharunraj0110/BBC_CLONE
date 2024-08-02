import '../Navbar1/Navbar1.css';
import { Link } from 'react-router-dom';
import  bbclogo from '../../Assests/Images/bbc-logo-removebg-preview.png'

function Navbar1(){
    return(     
<div>

{/* <header>
        <div className="container">
            <div className="logo">
                <a href="#"><img src={bbclogo} className='logobbc' ></img></a>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Sport</a></li>
                    <li><a href="#">Weather</a></li>
                    <li><a href="#">iPlayer</a></li>
                    <li><a href="#">More</a></li>
                </ul>
                <div className="hamburger">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
        </div>
    </header> */}
<div>
    <nav className='Navbar'>
        <div>
            <a href='#'><img src={bbclogo} className='logobbc'></img></a>
        </div>
        <ul className='ul'>
         <Link to="/" style={{textDecoration:"none"}} >
         <li className='li'> <a href='#'>Home</a></li>
         </Link>
         <Link to="/news" style={{textDecoration:"none"}} >
         <li className='li'> <a href='#'>News</a></li>
         </Link>
         <Link to="/sports" style={{textDecoration:"none"}} >
         <li className='li'> <a href='#'>sports</a></li>
         </Link>
         <Link to="/buisness" style={{textDecoration:"none"}}>
         <li className='li'> <a href='#'>Buisness</a></li>
         </Link>
         <Link to="/innovation" style={{textDecoration:"none"}} >
         <li className='li'> <a href='#'>Innovation</a></li>
         </Link>
         <Link to="/culture" style={{textDecoration:"none"}}>
         <li className='li'> <a href='#'>Culture</a></li>
         </Link>
        </ul>

    </nav>
</div>
    
    </div>
    )
}

export default Navbar1;