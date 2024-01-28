import "./Property.css"
import { PropertyData } from "../utils/property.types"

const TEST_LAT = 33.6149
const TEST_LON = -117.8731

const MY_KEY = "AIzaSyAF6wI4shBdxCHqpcn0Sl5VFG8L57Kk7Eg"

export default function Property(props: {priceShown: boolean, propertyData: PropertyData}) {

    const data = props.propertyData
    console.log(props.propertyData)

    return (
        <div className="property-bg" style={{backgroundImage: 'url("https://maps.googleapis.com/maps/api/streetview?location=' + data.latitude + '%2C' + data.longitude + '&size=800x1200&key=' + MY_KEY + '")'}}>
            <div className="property-overlay">
                <Title address={data.address} year={data.last_sale_date} price={data.assessed_total} priceShown={props.priceShown}/>
                <StreetPreview lat={data.latitude} lon={data.longitude} mode="static"></StreetPreview>
            </div>
        </div>
    )
}

function Title(props: {address: string, year: string, price: string, priceShown: boolean}) {    

    return (
        <div className="property-title">
            <p className="address-text">{props.address}</p>
            <h2 className="year-text">Assesed Value</h2>
            <p className="price-text">${props.priceShown ? props.price : "??????"}</p>
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