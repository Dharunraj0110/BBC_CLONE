import '../Aboutmodiputin/Aboutmodiputin.css'
import Ampimg from '../../Assests/Images/modiputin.jpg'
import { useNavigate } from 'react-router-dom'

function Aboutmodiputin(){

    return(
        <div className='Aboutmodiputin-main'>
            
            <img src={Ampimg} className='Ampimg'/>

            
            <p className='ampp'>The US State Department has urged India to utilise its relationship with Russia to end the war against Ukraine. <br/>It observed that India has a longstanding relationship with Russia. </p>
            <p className='ampp1'>US State Department Spokesperson Mathew Miller said during his daily briefing on Monday that India has the unique position to urge President<br/> Vladimir Putin to stop the war. “India has a longstanding relationship with Russia. I think that’s well-known. And we have encouraged India to utilise<br/> that relationship with Russia, that longstanding relationship and the unique position that they have, to urge President Putin to end his illegal war and<br/> to find a just peace, a lasting peace to this conflict; to tell Putin to respect the UN Charter, to respect Ukraine’s territorial integrity and sovereignty,”<br/> he said.</p>
            
        </div>
    )
}

export default Aboutmodiputin;