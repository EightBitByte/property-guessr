import exampleJSON from "../utils/examples.json"
import { PropertyData, UserData, SAMPLE_PROPERTY } from "../utils/property.types"

const BASE_URL = ""
const API_KEY = ""

export async function getPropertyData(): Promise<PropertyData> {
    
    let propertyData: PropertyData = SAMPLE_PROPERTY
    fetch(BASE_URL + "api/get_property_info?key=" + API_KEY).then(response => {
        response.json().then(data => {
            propertyData = JSON.parse(data)
        })
    })
    
    //const index = Math.floor(Math.random() * 3)
    // return exampleJSON.data[index]

    return propertyData
}

export async function getTopUsers(): Promise<UserData[]> {
    
    let users: UserData[] = []
    fetch(BASE_URL + "api/get_leaderboard_info&key=" + API_KEY)
        .then(response => response.json()
        .then(data => users = data));

    return users
}

export async function getUserData(username: string) {

    fetch(BASE_URL + "api/get_user_info?username=" + username + "&key=" + API_KEY)
        .then(response => response.json()
        .then(data => localStorage.setItem("userData", data)));
}

export async function updateUserData() {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: localStorage.getItem("userData")
    };
    fetch(BASE_URL + "api/send_user_info?key=" + API_KEY, requestOptions)
        .then(response => response.json());
}