import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    return (

        <div className='footer' name="contact">
           <Link className='footer__top'
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <FontAwesomeIcon icon={faArrowCircleUp} color='#f8da8b' />
            </Link> 
        </div>

    )
}

export default Footer