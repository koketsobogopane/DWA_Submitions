import airbnbLogo from "/images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} className="nav--logo"/>
        </nav>
    )
}