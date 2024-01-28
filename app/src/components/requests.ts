import exampleJSON from "../utils/examples.json"
import { PropertyData } from "../utils/property.types"

export async function getPropertyData(): Promise<PropertyData> {
    
    /*
    fetch("stuff goes here").then(response => {
        response.json().then(data => {
            return JSON.parse(data)
        })
    })
    */
    const index = Math.floor(Math.random() * 3)
    return exampleJSON.data[index]
}
