
import cardIcon from "../assets/images/star.png"
/**
 * 
 * @param {object} props 
 * @returns {XmlElememts}
 */
export default function Card(props){
    const {img, rating, reviewCount, country, title, price, status} = props
    console.log(img)
    return (
        <div className="card">
            <div className="image">
            <div className="card--status">{status}</div>
            <img src={`../assets/images/${img}.png`} className="card--image" />
            
            </div>
            <div className="card--text">
                <div className="card--text--hearder">
                <img src={cardIcon} />{rating}<span className="gray">({reviewCount})•{country}</span>
                </div>
                <p>{title}
</p>
                <p><span className="bold">From ${price}</span> / person
</p>
            </div>
            
        </div>
    )
}