import { NavLink } from 'react-router-dom'
// import Me from '../../assets/images/me.jpg'
import './header.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return(
        <header>
            {/* <div className='hex'>
                <img src={Me} alt="profile pic of me in the shape of a hexagon" />
            </div> */}
            <nav className='nav-bar'>
                <NavLink exact='true' activeclassname='nav__link--active' className='nav__link' to='/'>Elizabeth Velasquez</NavLink>
                <NavLink exact='true' activeclassname='nav__link--active' className='nav__link' to='/portfolio'>portfolio</NavLink>
                <NavLink exact='true' activeclassname='nav__link--active' className='nav__link' to='/contact'>contact</NavLink>
            </nav>
            <a target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/velasquezliz/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4d' />
            </a>
            <a target='_blank'
                rel='noreferrer'
                href='https://github.com/l1z27'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4d' />
            </a>

        </header>
    )
}

export default Header