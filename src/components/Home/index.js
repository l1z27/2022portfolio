import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedTxt from '../AnimatedTxt'
import Header from '../Header'


import './home.sass'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l', 'i', 'z']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r'
      ]

      useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])


    return (

        <div className='container home'>
            <Header />
            <div className='text-zone'>
                <h1> Hi, I'm <br /> 
                    <AnimatedTxt 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={1} />
                </h1>
                <h2>
                    <AnimatedTxt letterClass={letterClass}
                    strArray={jobArray}
                    idx={4} />
                </h2> 
            </div>
            <Link to='/contact' className='btn'> Contact</Link>

        </div>

    )
}

export default Home