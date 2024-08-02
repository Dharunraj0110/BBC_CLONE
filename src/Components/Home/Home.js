import '../Home/Home.css';
import '../Aboutkalam/Aboutkalam.js'
// import Aboutkalam from '../Aboutkalam/Aboutkalam.js'
import kalamimg from '../../Assests/Images/kalam.jpg'
import Armypic from '../../Assests/Images/modiputin.jpg'
import indinarmypic from '../../Assests/Images/Indianarmy.jpg'
import { useNavigate } from 'react-router-dom';
import '../Aboutmodiputin/Aboutputin.js'
import '../Aboutarmy/Aboutarmy.js'
import HPimg from '../../Assests/Images/Hardikpandya.jpg'
import microsoftimg from '../../Assests/Images/Microsoft.jpg'
import '../Aboutpandya/Aboutpandya.js'
import '../Aboutmicrosoft/Aboumicrosoft.js'


function Home(){
    const navigate = useNavigate();
    const kalam = () =>{
        navigate('Aboutkalam');
    }  
 
    const DOCS = useNavigate();
    const abmppage = () =>{
        navigate('Aboutmodiputin');
    }

    const armynavigate = useNavigate();
    const armyclick = () =>{
        navigate('Aboutarmy')
    }

    const HP = useNavigate();
    const HPclick = () =>{
        navigate('Aboutpandya')
    }

    const microclic = useNavigate();
    const microclick = () =>{
        navigate('Aboutmicrosoft')
    }
    return(
        <div>
        <div className='home-main'>
        <img src={kalamimg} className='kalam11' onClick={kalam} alt='kalamimg'/>
        <h1> <a href='#' className='h1' onClick={kalam}>Why Is Dr APJ Abdul Kalam’s<br/> Birthday Chosen as World<br/>  Student's Day? </a></h1>
        <p className='para1'> A politician, a scientist and a teacher <br/>in each of these roles</p>
        
        <img src={Armypic} className='armypic1' onClick={abmppage}></img>
        <h1 ><a href='#' className='para11' onClick={abmppage}>Encouraged India to utilise its unique<br/> position:US asksIndia to urge Russia to <br/>stop the Ukraine war</a></h1>
        <p className='para111'>US State Department Mathew Miller said during<br/> his daily briefing on Monday that India has the<br/> unique position to urge President Vladimir Putin<br/> to stop the war.</p>
        
        <img src={indinarmypic} className='indianarmypic' onClick={armyclick} ></img>
        <h1> <a href='#' className='head1' onClick={armyclick}>At least 4 Indian soldiers killed<br/> during firefight in Kashmir</a></h1>
        <div>
        <p className='para12'>Government forces were conducting search operations when the shooting began in<br/> the forests of Doda in Jammu area.</p>
        </div>
        
        </div>

        <div>
        <hr className='line1' />
        </div>

        <div className='home-main1'>
        <img src={HPimg} className='HPimg' onClick={HPclick}/>
        <h1 className='head2' onClick={HPclick}>Hardik Pandya storms Instagram with ‘difficult journey’ <br/>post as India T20I captaincy speculations run wild</h1>
        <p className='HPpara'>Hardik Pandya shared his transformation journey since the freak injury he endured<br/> during the ODI World Cup last year.</p>
       
       <img src={microsoftimg} className='microsoftimg' onClick={microclick} />
       <h1 className='microhead' onClick={microclick}>Biggest IT outage in history? Microsoft glitch hits <br/>flights,banks, broadcasters</h1>
        <p className='micropara'>A major IT outage affecting systems globally, including in India, Australia, Germany <br/>and other countries was reported on Friday</p>
        </div>

        <div>
            <hr className='line2' />
        </div>
        
        </div>
    )
}

export default Home;