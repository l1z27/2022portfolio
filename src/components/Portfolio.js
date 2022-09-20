import React from 'react'
import { Parallax} from 'react-scroll-parallax'
import portfolioData from '../data/portfolio.json';

const Portfolio = () => {


    const renderPortfolio = (portfolio) => {
        return (
            <div className="project">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="project__item" key={idx}>
                                <img 
                                    src={port.img}
                                    className="project__img"
                                    alt={port.title} />
                                <Parallax speed={-45} translateY={[-5, 80]} >
                                    <div className="project__content">
                                        <h3 className="project__caption">{port.caption}</h3>
                                        <h3 className="project__title">{port.title}</h3>
                                        <h4 className="project__tech">{port.tech}</h4>
                                        {/* <p className="project__company">{port.company}</p> */}
                                        <p className="project__txt">{port.description}</p>
                                        <button
                                            className="project__btn"
                                            rel='noreferrer'
                                            onClick={() => window.open(port.url)}
                                        >View Live</button>
                                    </div>
                                </Parallax>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (

        <div className='portfolio'>
            <h1 className='portfolio__title'> Projects</h1>
            <div className='portfolio__container'>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>

    )
}

export default Portfolio