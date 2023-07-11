import Navbar from "./Navbar"
//import Hero from "./Hero"
import Card from "./Card"


export default function App() {
    return (
        <div>
            <Navbar />
            <Card 
                img = "katie-zaferes"
                rating = "5.0"
                reviewCount = {6}
                country = "USA"
                title = "Life Lessons with Katie Zaferes"
                price = {136}
                status = "Sold Out"
            />
        </div>
    )
}