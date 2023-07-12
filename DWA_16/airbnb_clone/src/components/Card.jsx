
import cardIcon from "/images/star.png"

/**
 * 
 * @param {object} props 
 * @returns {XmlElememts}
 */
export default function Card(props){
    
console.log (props.element.coverImg)
    let badgeText
    if (props.element.openSpots === 0) {
        badgeText = "SOLD OUT"

    } else if (props.element.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <div className="image">
            {badgeText && <div className="card--status">{badgeText}</div>}
            <img src={`/images/${props.element.coverImg}`} className="card--image" />
            
            </div>
            <div className="card--text">
                <div className="card--text--hearder">
                <img src= {cardIcon} alt="" />{props.element.stats.rating}<span className="gray">({props.element.stats.reviewCount})•{props.element.location}</span>
                </div>
                <p>{props.element.title}
</p>
                <p><span className="bold">From ${props.element.price}</span> / person
</p>
            </div>
            
        </div>
    )
}