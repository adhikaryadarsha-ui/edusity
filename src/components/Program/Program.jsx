import React from 'react'
import './Program.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import icon_1 from '../../assets/program-icon-1.png'
import icon_2 from '../../assets/program-icon-2.png'
import icon_3 from '../../assets/program-icon-3.png'


const Program = () => {
  return (
    <div>
      <div className="program">
        <div className="program-card">
          <img src={program_1} alt="Program 1" />
          <div className="caption">
            <div className="program-icon">
              <img src={icon_1} alt="Icon 1" />
            </div>
          </div>
        </div>
        <div className="program-card">
          <img src={program_2} alt="Program 1" />
          <div className="caption">
            <div className="program-icon">
              <img src={icon_2} alt="Icon 2" />
            </div>
          </div>
        </div>
        <div className="program-card">
          <img src={program_3} alt="Program 1" />
          <div className="caption">
            <div className="program-icon">
              <img src={icon_3} alt="Icon 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program
