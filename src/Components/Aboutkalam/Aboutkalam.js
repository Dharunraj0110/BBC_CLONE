import '../Aboutkalam/Aboutkalam.css'
import akimg from '../../Assests/Images/kalam.jpg'
import Home  from '../Home/Home';
import { useNavigate } from 'react-router-dom'


function Aboutkalam(){
    const navigate = useNavigate();
    const akpb = () => {
        navigate('/')
    }
    return(
        <div className='aboutkalam-main'>

       <img src={akimg} className='akimg' />
       <p className='akpara'> October 15 marks the celebration of World Students’ Day. commemorate the birthday of India’s Missile Man and former President Dr APJ Abdul Kalam. A politician, a scientist and a teacher in each of these roles, Dr Kalam always emphasized on the role of students into the bright future of the world. World Students’ Day is one of the ways to honour his love for students and at the same time, also make all students realize, the larger responsible role they play in the society. Ahead of this celebration, we tell you why Dr APJ Abdul Kalams birthday is celebrated as World Students Day every year.</p>
       <button className='akbutton' onClick={akpb}>Go back</button> 

        </div>
    )
}

export default Aboutkalam;