import '../Sports/Sports.css';
import Cards from '../Cards/Cards';
import one from '../../Assests/Images/woakes.png'
import Marseille from '../../Assests/Images/Marseilleimg.png';

function Sports(){

    return(
      

        <div className='sports-main'>
            <h3 className='cricketh3'>Cricket</h3>
            <div>
            <hr  className='sportsline1'></hr>
            </div>

        <Cards img={one}  />
        <div>
            <h3 className='sports123'>'England have to "kick on", says Woakes'</h3>
        {/* <Cards tittle='England have to "kick on", says Woakes' para='England have to “kick on” from their strong end to the third day in order to take control of the second Test against West Indies, according to Chris Woakes.'/> */}
        <p className='sportspara1'>'England have to “kick on” from their strong end to the third day in order to take control of the second Test against West Indies, according<br/>  to Chris Woakes.'</p>
       
      
       <h3 ><a href='https://www.bbc.com/sport/cricket/articles/c4ng0nl4xxpo' className='h3para' >Root and Brook build England lead over West Indies</a></h3>
       <p className='root'>The hosts ended the day on 248-3, taken to an advantage of 207 runs<br/> by a classy unbroken partnership of 108 between Joe Root and <br/>Harry Brook.</p>
       
       <h3 className='Berrington'>Berrington reaches landmark as Scotland beat Namibia</h3>
       <p className='caption'>Captain Richie Berrington passed 3,000 one-day international career runs<br/> as Scotland edged out Namibia in a rain-affected World Cup League<br/> 2 match.</p>
        </div>

        <div className='Football-main'>
            <h3 className='Football'>Football</h3>
        </div>
        
        <div>
        <hr className='Footballline'></hr>
        </div>

        <h3 className='Marseilleh3'>Marseille close in on £17m deal for<br/> Tottenham's Hojbjerg</h3>
        <img src={Marseille} className='Marseilleimg' />
        <p className='Marseillepara'>The 28-year-old is believed to be ready <br/>to leave north London and is available <br/>for about £17m.</p>
       
       <h3 className='Brightonh3'>Brighton have turned down an £8m bid from Italian side Napoli <br/>for Scotland midfielder Billy Gilmour.</h3>
       <p className='Sourcespara'>Sources say the offer was regarded as an initial approach, suggesting Napoli will<br/> be back as they believe they can complete a transfer.</p>
       <p className='Thepara'>The 23-year-old has flown to Japan with the Seagulls for the start of a two-match<br/> tour.</p>
       <p className='Theypara'>They will face Kashima Antlers on 24 July before meeting Tokyo Verde on 28 July <br/>as they look to build on the popularity of Kaoru Mitoma, the Japan international<br/> who has made such a huge impression at the club.</p>
       
       <div>
        <hr className='lastlinesports'></hr>
       </div>
       
        </div>

       
    )
}

export default Sports;