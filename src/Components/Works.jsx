import React from 'react';
import { FormattedMessage } from 'react-intl';
import '../css/Works.css';

import img from '../assets/images/card.jpeg';


export const Works = () => {
  return(
    <div className='all-cont'>
      <section id='portfolio' className='principal'>
        <div className="container">
          <div className='cont-one'>
              <div className='card-one cards'>
                    <div className='img-title'>
                      <img
                        src={img}
                        alt='img not found'
                      />
                      <h1><FormattedMessage id='app.works.oneTitle' /></h1>
                    </div>
                    <div className='description'>
                          <p><FormattedMessage id='app.works.oneDescription' /></p>
                    </div>
                    <div className='icons-btn'>
                        <button>See project</button>
                        <a href='https://github.com/Mauri-salazar'><i className="bi bi-github"></i></a>
                    </div>
              </div>


              <div className='card-two cards'>
                    <div className='img-title'>
                        <img
                          src={img}
                          alt='img not found'
                        />
                        <h1><FormattedMessage id='app.works.twoTitle' /></h1>
                    </div>
                    <div className='description'>
                        <p><FormattedMessage id='app.works.twoDescription' /></p>
                    </div>
                    <div className='icons-btn'>
                        <button>See project</button>
                        <a href='https://github.com/Mauri-salazar'><i className="bi bi-github"></i></a>
                    </div>
              </div>
          </div>


          <div className='cont-two'>
              <div className='card-three cards'>
                    <div className='img-title'>
                        <img
                          src={img}
                          alt='img not found'
                        />
                        <h1><FormattedMessage id='app.works.threeTitle' /></h1>
                    </div>
                    <div className='description'>
                        <p><FormattedMessage id='app.works.threeDescription' /></p>
                    </div>
                    <div className='icons-btn'>
                        <button>See project</button>
                        <a href='https://github.com/Mauri-salazar'><i className="bi bi-github"></i></a>
                    </div>
              </div>

              <div className='card-four cards'>
                    <div className='img-title'>
                        <img
                          src={img}
                          alt='img not found'
                        />
                        <h1><FormattedMessage  id='app.works.fourTitle' /></h1>
                    </div>
                    <div className='description'>
                          <p><FormattedMessage id='app.works.fourDescription'/></p>
                    </div>
                    <div className='icons-btn'>
                        <button>See project</button>
                        <a href='https://github.com/Mauri-salazar'><i className="bi bi-github"></i></a>
                    </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};
