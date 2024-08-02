import '../Aboutarmy/Aboutarmy.css'
import armyimg from '../../Assests/Images/Indianarmy.jpg'

function Aboutarmy(){
    return(
        <div className='Aboutarmy-main'>
            <img src={armyimg} className='armyimg' />
            <p  className='aarmyp'>At least four Indian soldiers were killed in a gun battle with rebels fighting against Indian rule in Indian-administered<br/> Kashmir, the latest in a series of deadly attacks.</p>
            <p className='aarmyp1'>The troops were ambushed in the forests of the southern Doda district in the Jammu division late on Monday, the army <br/>said in a statement.</p>
            <br/><hr className='abahr1'/>
            <h2 className='abah'>KEEP READING</h2>
            <ul>
                <li className='abali'>Two Indian soldiers, six rebels killed in Kashmir gun battles</li>
                <li className='abali'>Indian court confirms end of special status for Kashmir</li>
                <li className='abali'>Modi visits Indian-administered Kashmir</li>
                <li className='abali'>Kashmir’s top pro-freedom cleric leads Friday prayers after four years</li>
            </ul>
        </div>
    )
}
export default Aboutarmy;