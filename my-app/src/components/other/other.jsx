import React from 'react';
import './other.css'; 
import ViewButton from '../view_button/view_button.jsx';


const Other_section = () => {
  return (
    <section id="other_s">
      <h2 id="more_information">Here are some products from our shop</h2>
      <div className="image-row">
        <div className="image-containerr">
          <img 
            src="/img/IMG_2937.JPG" 
            alt="Commercial Jet" 
            className="other-immage"
          />
          <p className='el_name'>Tent</p>
        </div>

        <div className="image-containerr">
          <img 
            src="/img/IMG_2938.JPG" 
            alt="Regional Aircraft" 
            className="other-immage" 
          />
          <p className='el_name'>Blackpack</p>
        </div>

        <div className="image-containerr">
          <img 
            src="/img/IMG_2939.JPG" 
            alt="Cargo Plane" 
            className="other-immage" 
          />
          <p className='el_name'>Row</p>
        </div>
      <ViewButton /> 
      </div>
      <div className="image_container_fog">
        <img 
          src="/img/IMG_2202.jpg" 
          alt="placeholder" 
          className="imagee" 
        />
      </div>
    </section>
  );
};

export default Other_section;
