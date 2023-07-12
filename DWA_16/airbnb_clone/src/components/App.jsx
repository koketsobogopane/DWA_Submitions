import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"


export default function App() {
    const usedData = data.map(element => {
   return <Card 
        key = {element.id}
       element = {element}
            />})


    return (
        <div>
            <Navbar />
            <Hero />
            <section className="card-list">
            {usedData}
            </section>
        </div>
    )
}