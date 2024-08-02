import '../../Components/Innovation/Innovation.css';
import error1img from '../../Assests/Images/error1.png'
import muskimg from '../../Assests/Images/musk.png';
import stadiumimg from '../../Assests/Images/staduim.png';

function Innovation(){


    return(
        <div className='innovation-main'>
        <h5 ><a href='' className='CrowdStrike'>CrowdStrike IT outage affected 8.5 million Windows devices, Microsoft says</a></h5>
       <div  className='list1'>       
         <li>Microsoft says it estimates that 8.5m computers around the world were disabled by the global<br/> IT outage.</li>
       <li className='list2'>It’s the first time a figure has been put on the incident and suggests it could be the worst cyber event in history.</li>
       <li className='list3'>The glitch came from a security company called CrowdStrike which sent out a corrupted software update to its huge number of customers.</li>
       <li className='list4'>Microsoft, which is helping customers recover said in a blog post: "We currently estimate that CrowdStrike’s update affected 8.5 million Windows devices."</li>
        <img src={error1img} className='error1img' />
        <h5 className='Tesla'>Musk says Tesla to use humanoid robots next year</h5>
       <div className='list-list1'>
        <li className='li-1'>Tesla boss Elon Musk says the electric vehicle car maker will start producing and using humanoid robots from next year.</li>
       <li className='li-2'>In a social media post, Mr Musk said the robots will first be used by Tesla, which will start making them to sell in 2026.</li>
      <img src={muskimg} className='muskimg' />
      <li className='li-3'>The technology billionaire had previously said he expected the robot, called Optimus, to be ready for use in Tesla factories by the end of this year.</li>
       <li className='li-4'>Other firms, including Honda and Boston Dynamics, have also been developing their own humanoid robots.</li>
       </div>
       <h5 className='athletics'>What makes an athletics track fast?</h5>
       <img src={stadiumimg} className='stadiumimg'/>
       <h5 className='probably'>To the casual observer one athletics track probably looks much like another.</h5>
        <p className='when'>But when the Olympic Games open in Paris on Friday, it will be difficult to miss the purple track at the Stade de France.</p>
       <p className='Describing'>Describing its colour as "audacious", Maurizio Stroppiana, whose company made the track, says it will help people "instantly recognise" the Paris Games.</p>
        <p className='wet'>It took 10 wet and cold weeks to lay the track at the Stade de France after the Rugby World Cup ended in October of last year.</p>
        <div>
            <hr className='Innovationline'></hr>
        </div>
        </div>
        </div>

    )
}
export default Innovation;