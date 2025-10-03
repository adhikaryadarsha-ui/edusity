import React, { useRef } from 'react'
import './Testimonials.css';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';
import next_icon from '../../assets/next-icon.png';
import prev_icon from '../../assets/back-icon.png';

const Testimonials = () => {

const slider = useRef()
let Tx = 0;
const next = ()=>{
if(Tx> -50)
{
    Tx -= 25
}
slider.current.style.transform=`translateX(${Tx}%)`
}

const Previous = () => {
if(Tx < 0);
{
  Tx += 25;
}
slider.current.style.transform = `translateX(${Tx}%)`;
};
  return (
    <div>
      <div className="testimonials">
        <img src={next_icon} alt="Next" className="next-icon" onClick={next} />
        <img
          src={prev_icon}
          alt="Previous"
          className="prev-icon"
          onClick={Previous}
        />

        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <img src={user1} alt="User 1" className="user-image" />
                    <div className="testimonial-user">
                      <p className="user-name">John Doe</p>
                      <p className="user-feedback">
                        "Great experience! Learned a lot."
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      Choosing to pursue my degree at Edusity was one of the
                      best decisions I've ever made. The supportive community,
                      state-of-the-art facilities, and commitment to academic
                      excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <img src={user2} alt="User 1" className="user-image" />
                    <div className="testimonial-user">
                      <p className="user-name">John Doe</p>
                      <p className="user-feedback">
                        "Great experience! Learned a lot."
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      Choosing to pursue my degree at Edusity was one of the
                      best decisions I've ever made. The supportive community,
                      state-of-the-art facilities, and commitment to academic
                      excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <img src={user3} alt="User 1" className="user-image" />
                    <div className="testimonial-user">
                      <p className="user-name">John Doe</p>
                      <p className="user-feedback">
                        "Great experience! Learned a lot."
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      Choosing to pursue my degree at Edusity was one of the
                      best decisions I've ever made. The supportive community,
                      state-of-the-art facilities, and commitment to academic
                      excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <img src={user4} alt="User 1" className="user-image" />
                    <div className="testimonial-user">
                      <p className="user-name">John Doe</p>
                      <p className="user-feedback">
                        "Great experience! Learned a lot."
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      Choosing to pursue my degree at Edusity was one of the
                      best decisions I've ever made. The supportive community,
                      state-of-the-art facilities, and commitment to academic
                      excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Testimonials
