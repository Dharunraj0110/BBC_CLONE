import '../Culture/Culture.css';
import Cultureimg from '../../Assests/Images/Culture.jpg';
import tajmahalimg from '../../Assests/Images/tajmahal.jpg' 

function Culture(){

    return(
        <div className='Culture-main'>
        <h6 className='Colonial'>In photos: Colonial India through the eyes of<br/> foreign artists</h6>
        <img src={Cultureimg} className='cultureimg' />
        <p className='exhibition'>A new exhibition in Delhi showcasing rare artworks by<br/> European artists gives insights into how the British ruled<br/> the country.</p>
        <h6 className='work'>The work above is another watercolour painting of the Jama Masjid by William Simpson in 1864.</h6> 
        <img src={tajmahalimg} className='tajmahalimg'/>
        <p className='Mainly'>Mainly a war artist, Simpson was sent to India in 1859 by a publishing company to illustrate the aftermath of the violent uprising two years earlier.</p>
      <div>
        <hr className='cultureline'></hr>
      </div>
       </div>
    )
}
 export default Culture;