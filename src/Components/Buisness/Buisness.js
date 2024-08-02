import '../../Components/Buisness/Buisness.css';
import spanishbeach from '../../Assests/Images/spanish beach.jpg'
import errorimg from '../../Assests/Images/error.png';
import labimg from '../../Assests/Images/lab.png'
import agriculture from '../../Assests/Images/Agriculture.png'

function Buisness() {


    return(
        <div className='Buisness-main'>
        <h4 className='h4'>The Spanish fightback against record tourism</h4>
        <img src={spanishbeach} className='spanishbeach'/>
        <p className='spanishbeachpara'>If you can elbow your way onto one of Majorca’s sunspots<br/> this summer, you will witness two unstoppable forces.</p>
       <img src={errorimg} className='errorimg'/>
       <h4 className='How'>How China swerved worst of global tech meltdown</h4>
       <p className='While'>While most of the world was grappling with the blue screen of death<br/> on Friday, one country that managed to escape largely unscathed<br/> was China.</p>
       <p className='Very'>Very few organisations will buy software from an American firm that,<br/> in the past, has been vocal about the cyber-security threat posed by<br/> Beijing.</p>
        <h4 className='Modi'>Modi's new budget faces jobs crisis test in India</h4>
    <img src={labimg} className='labimg' />
    <p className='Tuesday'>On Tuesday, India's Prime Minister Narendra Modi's<br/> coalition government will present its first federal budget<br/> following a narrow election victory.</p>
    <p className='weakened'>A weakened Mr Modi, reliant for the first time on coalition<br/> partners, is widely expected to usher in a reset in his spending <br/>policies, while maintaining fiscal prudence.</p>
    <img src={agriculture} className='agriculture' />
    <h4 className='Indians'>More than 60% of Indians are engaged in agriculture and allied activities</h4>
    <p className='Wages'>Wages have stagnated, household savings have dropped and well<br/>-paying jobs remain out of reach for most Indians.</p>
     <p className='cars'>BMW cars have logged their highest sales ever in the first half of this<br/> year even as overall consumption growth has been the lowest in two decades.</p>
     <div>
        <hr className='buisnesshr'></hr>
     </div>
        </div>
    )
}

export default Buisness;