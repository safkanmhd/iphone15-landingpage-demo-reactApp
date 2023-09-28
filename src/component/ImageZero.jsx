
import titVideo from '../img/large.mp4';
import './video.css';


const Imagezero = () => (
  <div>
    
   <video id="video" autoPlay loop muted>
        <source src={titVideo} type="video/mp4" />
      </video>
 
  </div>
);

export default Imagezero;
