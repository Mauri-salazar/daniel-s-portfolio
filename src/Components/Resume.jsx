import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/Resume.css';
import { FormattedMessage } from 'react-intl';

import MyPhoto from '../assets/cv/FTO_DANIEL.jpeg';
import MyCv from '../assets/cv/CV_Mauricio_Salazar_Web_Developer.pdf';

export const Resume = () => {
  return(
    <section id='resume'>
      <div className='port'>
            <div>
                <img src={MyPhoto} alt='Img not found'/>
                <h1><FormattedMessage  id='app.resume.titleName'/> </h1>
            </div>
            <div className='port-t'>
                <div className='info-titleName'>
                    <ul>
                      <li>
                        <FormattedMessage id='app.resume.subtitle'/>
                      </li>
                      <li>
                        <FormattedMessage id='app.resume.location'/>
                      </li>
                    </ul>
                </div>
                <div className='icons'>
                    <a href='https://www.linkedin.com/in/mauricio-alexandro-salazar-acu%C3%B1a-a402a5247/'><i className="bi bi-linkedin"></i></a>
                    <a href='https://github.com/Mauri-salazar'><i className="bi bi-github"></i></a>
                    <a href='https://mail.google.com/mail/u/1/#inbox'><i className="bi bi-envelope-fill"></i></a>
                    <a href={MyCv} download='cv.pdf'><i className="bi bi-filetype-pdf"></i></a>
                </div>
            </div>
      </div>
      <div className="row work">
            <div className="three columns header-col">
                    <h1><span><FormattedMessage id='app.resume.workTitle' /></span></h1>
            </div>

            <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <ul>
                                <li>
                                    <FormattedMessage id='app.resume.workOne' />
                                </li>
                                <li>
                                    <FormattedMessage id='app.resume.workTwo' />
                                </li>
                                <li>
                                    <FormattedMessage id='app.resume.workThree' />
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
      </div>
      <div className="row skill">
            <div className="three columns header-col">
                    <h1><span><FormattedMessage id='app.resume.skillsTitle' /></span></h1>
            </div>

            <div className="nine columns main-col">
                    <div className="bars">
                        <ul>
                            <li>
                                <FormattedMessage id='app.resume.skillsOne' />
                            </li>
                            <li>
                                <FormattedMessage id='app.resume.skillsTwo' />
                            </li>
                            <li>
                                <FormattedMessage id='app.resume.skillsThree' />
                            </li>
                        </ul>
                    </div>
                </div>
      </div>
      <div className='row-education'>
      <div className="three columns header-col">
              <h1><span><FormattedMessage id='app.resume.educationTitle' /></span></h1>
      </div>

      <div className="nine columns main-col">
              <div className="row item">
                  <div className="twelve columns">
                      <ul>
                        <li>
                            <FormattedMessage id='app.resume.educationOne' />
                        </li>
                         <li>
                            <FormattedMessage id='app.resume.educationTwo' />
                        </li>
                         <li>
                            <FormattedMessage id='app.resume.educationThree' />
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
      </div>
    </section>
  );
};
