import exampleJSON from "../utils/examples.json"
import { PropertyData, UserData} from "../utils/property.types"

const BASE_URL = ""
const API_KEY = ""

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

export async function getTopUsers(): Promise<UserData[]> {
    
    let users: UserData[] = []
    fetch(BASE_URL + "something" + "&key=" + API_KEY)
        .then(response => response.json()
        .then(data => users = data));

    return users
}

export async function getUserData(username: string) {

    fetch(BASE_URL + "something" + username + "&key=" + API_KEY)
        .then(response => response.json()
        .then(data => localStorage.setItem("userData", data)));
}

export async function updateUserData() {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: localStorage.getItem("userData")
    };
    fetch(BASE_URL + "something?key=" + API_KEY, requestOptions)
        .then(response => response.json());
}