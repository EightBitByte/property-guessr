import { useState } from "react"
import "./Property.css"
 
type PropertyData = {

}

const MY_KEY = "AIzaSyAF6wI4shBdxCHqpcn0Sl5VFG8L57Kk7Eg"

export default function Property(props: any) {

    const [propertyData, setPropertyData] = useState({})

    return (
        <div className="propertyCard">
            <Title address="420 Pluh Ave" year="2013" price={1000000} priceShown={true}/>
            <StreetPreview lon={33.6149} lat={-117.8731} mode=""></StreetPreview>
        </div>
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

function StreetPreview(props: {lon: number, lat: number, mode: string}) {
    return (
        <>
            {
            props.mode == "static" ? 
                <img width="450" height="350" src={"https://maps.googleapis.com/maps/api/streetview?location=" + props.lon + "%2C" + props.lat + "&size=450x350&key=" + MY_KEY}></img>
                :
                <iframe width="450" height="350" loading="lazy" src={"https://www.google.com/maps/embed/v1/streetview?location=" + props.lon + "%2C" + props.lat + "&key=" + MY_KEY}></iframe>
            }
        </>
    )
}