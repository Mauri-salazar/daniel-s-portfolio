import React, { Fragment, useContext  } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/Header.css';
import icons from '../icons/icons';
import { Context } from "./Wrapper";
import { FormattedMessage } from "react-intl";



export const Header = (props) => {

  const context = useContext(Context);


  return (
    <Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home"> <FormattedMessage  id="app.header.home"/></a></li>
                <li><a className="smoothscroll" href="#skills"> <FormattedMessage  id="app.header.skills"/></a></li>
                <li><a className="smoothscroll" href="#resume"> <FormattedMessage  id="app.header.resume"/></a></li>
                <li><a className="smoothscroll" href="#portfolio"> <FormattedMessage  id="app.header.works"/></a></li>
                <li><a className="smoothscroll" href="#contact"> <FormattedMessage  id="app.header.contact"/></a></li>
            </ul>
            <select
              value={context.locale}
              onChange={context.selectLanguage}
              className='international'
            >
              <option value='en'>English</option>
              <option value='es'>Spanish</option>
          </select>
        </nav>

        <div className="row banner">
          <div className="banner-text">
              <h1 className="responsive-headline"><FormattedMessage  id="app.header.name"/></h1>
              <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>
                <FormattedMessage  id="app.header.role"/><FormattedMessage  id="app.header.roleDescription"/>
              </h3>
              <hr/>
              <ul className="social">
              {
                  icons.socialLinks && icons.socialLinks.map(item => {
                    return(
                            <li key={item.name}>
                              <a href={item.url} target="blank"><i className={item.className}></i></a>
                            </li>
                          )
                        }
                  )
                }
              </ul>
          </div>
        </div>
        </header>
    </Fragment>

  )
};
