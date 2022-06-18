
import Header from '../Header'
import portfolioData from '../../data/portfolio.json';

import './portfolio.sass'

const Portfolio = () => {


    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.img}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <p className="tech">{port.tech}</p>
                                    <p className="company">{port.company}</p>

                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (

        <div className='container portfolio'>
            <Header />
            <h1> Portfolio</h1>
            <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>

    )
}

export default Portfolio