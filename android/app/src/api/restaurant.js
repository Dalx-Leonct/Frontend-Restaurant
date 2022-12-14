import {API_HOST} from '../utils/constant'

export async function getRestaurantApi(){
try {
    const url = 'http://192.168.0.102:8000/category'
    const response = await fetch (url)
    const result = await response.json()
    return result
} catch (error) {
    throw error
}
}