import React from 'react'
import './Campous.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';

const Campous = () => {
  return (
    <div>
      <div className="campous">
        <div className="campous-content">
          <div className="campous-img">
            <img src={gallery_1} alt="gallery img" />
          </div>
          <div className="campous-img">
            <img src={gallery_2} alt="gallery img" />
          </div>
          <div className="campous-img">
            <img src={gallery_3} alt="gallery img" />
          </div>
          <div className="campous-img">
            <img src={gallery_4} alt="gallery img" />
          </div>
        </div>
      <button className="btn">See more here <img src={white_arrow} /> </button>
      </div>
    </div>
  );
}

export default Campous
