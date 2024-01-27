import { useState } from "react"
import "./Property.css"
import { motion, useAnimationControls } from "framer-motion"
 
type PropertyData = {

}

const TEST_LAT = 33.6149
const TEST_LON = -117.8731

const MY_KEY = "AIzaSyAF6wI4shBdxCHqpcn0Sl5VFG8L57Kk7Eg"

export default function Property(props: any) {

    const [propertyData, setPropertyData] = useState({})

    return (
        <motion.div className="property-bg" style={{backgroundImage: 'url("https://maps.googleapis.com/maps/api/streetview?location=33.6149%2C-117.8731&size=800x1200&key=AIzaSyAF6wI4shBdxCHqpcn0Sl5VFG8L57Kk7Eg")'}}>
            <div className="property-overlay">
                <Title address="420 Pluh Ave" year="2013" price={1000000} priceShown={true}/>
                <StreetPreview lat={TEST_LAT} lon={TEST_LON} mode=""></StreetPreview>
            </div>
        </motion.div>
    )
}

function Title(props: {address: string, year: string, price: number, priceShown: boolean}) {    

    return (
        <div className="property-title">
            <h1>{props.address}</h1>
            <h2 className="year-text">Sold in <strong>{props.year}</strong> for</h2>
            <h2>${props.priceShown ? props.price : "??????"}</h2>
        </div>
    )
}

function StreetPreview(props: {lat: number, lon: number, mode: string}) {
    return (
        <>
            {
            props.mode == "static" ? 
                <img width="450" height="350" src={"https://maps.googleapis.com/maps/api/streetview?location=" + props.lat + "%2C" + props.lon + "&size=450x350&key=" + MY_KEY}></img>
                :
                <iframe width="450" height="350" loading="lazy" src={"https://www.google.com/maps/embed/v1/streetview?location=" + props.lat + "%2C" + props.lon + "&key=" + MY_KEY}></iframe>
            }
        </>
    )
}