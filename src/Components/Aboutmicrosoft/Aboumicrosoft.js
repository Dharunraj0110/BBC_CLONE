import '../Aboutmicrosoft/Aboutmicrosoft.css'
import microimg1 from '../../Assests/Images/Microsoft1.jpg'
import { useNavigate } from 'react-router-dom';
import Home from '../Home/Home.js'

function Aboutmicrosoft () {

    // const Emicroclic = useNavigate();
    // const Emicroclick = () => {
    //     navigate ('/')
    // }
    

    return(
        <div className='Aboutmicrosoft-main'>
            <img src={microimg1} className='microimg1'  />
            <p className='Ehppara'>A massive Microsoft outage unleashed havoc on computer systems across the world, grounding flights and crippling <br/>banks, stock exchanges, payment systems and emergency services. Microsoft, in a tweet approximately six hours after<br/> the outage was first reported, said "multiple services are continuing to see improvements in availability as our<br/> mitigation actions progress".</p>
             
        </div>
    )
}
export default Aboutmicrosoft;