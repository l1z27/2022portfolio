import './animatedtxt.sass'

const AnimatedTxt = ({ letterClass, strArray, idx }) => {
    return(
        <span>
            {
                strArray.map((char, i) =>(
                    <span key={`${letterClass}_${i + idx}`} className={`${letterClass}_${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedTxt