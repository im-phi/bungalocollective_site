import React from 'react';
import NavButton from '../Components/NavButton';
import spinningBrick from '../Site_Assets/Spinning_Brick.webm'
import './Home.css';
import brickIcon from "../Site_Assets/PNGS/Brick_icon.png"
import brickIconComingSoon from "../Site_Assets/PNGS/Brick_icon_coming_soon.png"

const Home = () => {
  return (
    <React.Fragment>

      <div className='home-container'>

        <video className='earth-video' src={spinningBrick} loop={true} autoPlay muted/>
          <div className='center-pivot'>
            <div className="flex-grid">
              <NavButton label="BRICK BY BRICK" icon={brickIcon}/>
              <NavButton label="MUSIC" icon={brickIcon}/>
            </div>
            <div className="flex-grid">
              <NavButton label="MERCH" icon={brickIconComingSoon}/>
              <NavButton label="GALLERY" icon={brickIconComingSoon}/>
            </div>
          </div>

      </div>

    </React.Fragment> 
  );
};
  
export default Home;