import PhotoGrid from '/images/photo-grid.png'

export default function Hero() {
    // On scrim, a semantic "section" is used to cover the hero
    return (
        <div className="hero">
            <div  className='box' >
            <img src={PhotoGrid}  className='hero--image'/>
            </div>
            <div className='hero--text'>
                <h1>Online Experiences</h1>
                <p className='hero--paragraph'>Join unique interactive led by 
                    one-of-a-kind hosts-all without 
                    leaving home.
                </p>
            </div>
        </div>
    )
} 