import React from 'react'
import {Parallax} from 'react-scroll-parallax'
import Me from '../assets/images/me2.jpg'
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return(
        <header className='header' name="top">
                    <Parallax speed={10} scale={[1, .4, 'easeInQuad']} translateX={[0, 0]} translateY={[-70, 0]}>
                        <div className='header__ghost'>Hello Internet Friends!</div>
                    </Parallax>
                        <div className='hex'>
                            <img src={Me} alt="profile pic of me in the shape of a hexagon" />
                        </div>
                    

                    <div className='header__social'>
                        <a target='_blank'
                            className='icons'
                            rel='noreferrer'
                            href='https://www.linkedin.com/in/velasquezliz/'>
                                <FontAwesomeIcon icon={faLinkedin} color='#454a54' />
                        </a>
                        <a target='_blank'
                            className='icons'
                            rel='noreferrer'
                            href='https://github.com/l1z27'>
                                <FontAwesomeIcon icon={faGithub} color='#454a54' />
                        </a>
                    </div>
                    <h1 className='header__title'>Elizabeth Velasquez</h1>
                    <h2 className='header__title-sub'>Web Developer | Designer | Adventurer </h2>

                    <div className='header__content'>
                    <div className='header__txt'>Designing, coding, and troubleshooting websites that reach a vast audience is truly a passion of mine and I hope I can share what I've learned with you. Checkout my latest projects and feel free to <Link className='link'
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >message me</Link> below. </div>

                    
                    </div>
        </header>
    )
}

export default Header