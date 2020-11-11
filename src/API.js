import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://htmlacademy-es-10.appspot.com/big-trip/',
    headers: {
        "Authorization": "Basic dgddgjsakdlidjiednk",
        "Content-Type": `application/json`
    }
})
export const api = {
    getDestinations: () => {
        return instance.get('destinations')
    },
    getOffers: () => {
        return instance.get('offers')
    },
    getPoints: () => {
        return instance.get('points')
    },
    updatePoint: (id, data) => {
        return instance.put(`points/${id}`, data)
    },
    addPoint: (data) => {
        return instance.post(`points`, data)
    },
    deletePoint: (id) => {
        return instance.delete(`points/point${id}`)
    },
    createPoint: () => {
        return instance.post(`points/}`)
    }
}
