import '../News/News.css'
import qaz from '../../Assests/Images/Neetimg.png'
import biden from'../../Assests/Images/joebiden.jpg'

function News(){

return(
    <div className='News-main' >
        <h2 className='newsmaim1'>NEWS</h2>
        <div>
        <hr className='newshr1'></hr>
        </div>
        <div>
         <img src={qaz} className='qazimg' />
       
        <h2 className='pp1111'>After Retest, Haryana NEET Centre<br/> With Most Top Scorers Gave This<br/> Result... </h2>
       <p className='news1para'>An analysis of NEET data revealed that<br/> Hardayal Public School in Haryana's<br/> Bahadurgarh had a total of 494 students<br/> appearing for the exam. Among them,<br/> the highest score was 682.</p>
     <div className='divnew'>
        <h2 className='newsh2'>Shoot-On-Sight Order In Bangladesh To Quell Student Protests As<br/> Death Count Mounts</h2>
        <p className='BViolence'>Bangladesh Violence: Nearly 1,000 Indian students have returned to India from<br/> Bangladesh through various land transit points or by flight.</p>

        <h2><a href='https://www.thehindu.com/news/international/' className='newsh2H'>'I took a bullet for democracy,' Trump says at first rally since<br/> shooting</a></h2>
        <p className='DonaldPara'>Donald Trump mocked the rival Democratic Party, roiled by unprecedented pressure<br/> for President Joe Biden to abandon the White House</p>
   
       <h2><a href='https://www.bbc.com/news/articles/c3g68g11445o' className='h2134'>Israel strikes Houthis in Yemen after drone hits Tel Aviv</a></h2>
       <p className='Israel'>Israel has carried out air strikes on the Houthi-controlled Red Sea port of Hodeidah in<br/> Yemen, a day after a drone launched by the group hit Tel Aviv.</p>
   
   <h2 className='Harris'>Biden has backed Harris.<br/> What happens next in <br/>US election?</h2>
   <p className='President'>President Joe Biden has dropped<br/> out of the US election race and <br/>announced his support for<br/> Vice-President Kamala Harris to <br/>take his place as the Democratic<br/> Party's nominee.</p>
   <p className='decision'>The decision throws the party into<br/> uncharted waters with just a month<br/> to go before the Democratic National <br/> Convention, when their choice will be <br/>confirmed.</p>
   <img src={biden} className='biden'/>
   <h2 className='World'>World leaders show support as Biden quits race</h2>
   <p className='Many'>Many of his allies paid tribute to his foreign policy achievements and acknowledged the difficulty of his decision.</p>
    <p className='also'>He also endorsed Vice-President Kamala Harris and said he would "focus all my energies on my duties as President" for the rest of his term.</p>
    <hr className='newslastl'></hr>
    </div>

   
    </div>
    </div> 
    
)
}

export default News;