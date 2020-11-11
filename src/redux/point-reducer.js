import {api} from "../API";
import {NAME_DATE_TYPE, convertDate} from "../utils/dateUtils";


const SET_POINTS = 'SET POINTS';
const ADD_POINT = 'ADD POINT';
const UPDATE_POINT = 'UPDATE POINT';
const SET_DATES = 'SET DATES';
const SET_DESTINATIONS = 'SET DESTINATIONS';
const SET_OFFERS = 'SET OFFERS';
const ON_SENDING_DATA = 'ON SENDING DATA';
const OFF_SENDING_DATA = 'OFF SENDING DATA';
const ON_EDIT_MODE = 'ON EDIT MODE';
const OFF_EDIT_MODE = 'OFF EDIT MODE';
const SET_NEW_EVENT = 'SET NEW EVENT';


const initialState = {
    points: null,
    dates: null,
    destinations: null,
    offers: null,
    newEventEdit: false,
    isSendingData: [],
    editMode: [],
    serverError: []
}


const setPoints = (points) => ({type: SET_POINTS, points});
const setNewPoint = (point) => ({type: ADD_POINT, point});
const setUpdatePoint = (id, data) => ({type: UPDATE_POINT, id, data});
const setDestinations = (destinations) => ({type: SET_DESTINATIONS, destinations});
const setOffers = (offers) => ({type: SET_OFFERS, offers});
const setDates = () => ({type: SET_DATES});
const onSendingData = (id) => ({type: ON_SENDING_DATA, id});
const offSendingData = (id) => ({type: OFF_SENDING_DATA, id});
export const onEditMode = (id) => ({type: ON_EDIT_MODE, id});
export const offEditMode = (id) => ({type: OFF_EDIT_MODE, id});
export const newEventToggle = (mode) => ({type: SET_NEW_EVENT, mode});


export const pointsReducer = (state = initialState, action) => {
    if (!state) {
        return {};
    }
    switch (action.type) {
        case 'SET POINTS': {
            let copyState = {...state, points: [...action.points]};
            copyState.points.forEach((p, index) => {
                p = {...action.points[index]};
                p.destination = {...action.points[index].destination}
            });
            return copyState;
        }
        case 'ADD POINT': {
            return {...state, points: [...state.points.concat(action.point)]};
        }
        case 'UPDATE POINT': {
            return {...state, points: [...state.points.filter(point => point.id !== action.id).concat(action.data)]};
        }
        case 'SET DATES':
            let datetime = Array.from(new Set(state.points.map((p) => {
                return convertDate(p['date_from'], NAME_DATE_TYPE.DATETIME);
            })));
            let dates = Array.from(new Set(state.points.map((p) => {
                return convertDate(p['date_from'], NAME_DATE_TYPE.MONTH_DAY);
            })));
            let copyState = {...state};
            copyState.dates = dates.map((d, i) => {
                return {text: d, dateTime: datetime[i]}
            });
            return copyState;
        case 'SET DESTINATIONS':
            return {...state, destinations: action.destinations};
        case 'SET OFFERS':
            return {...state, offers: action.offers};
        case 'ON SENDING DATA':
            return {...state, isSendingData: state.isSendingData.concat(action.id)};
        case 'OFF SENDING DATA':
            return {...state, isSendingData: state.isSendingData.filter(id => id !== action.id)};
        case 'ON EDIT MODE':
            return {...state, editMode: state.editMode.concat(action.id)};
        case 'OFF EDIT MODE':
            return {...state, editMode: state.editMode.filter(id => id !== action.id)};
        case 'SET NEW EVENT':
            return {...state, newEventEdit: action.mode}
        default:
            return state;
    }
}

export const getPoints = () => async (dispatch) => {
    const response = await api.getPoints();
    dispatch(setPoints(response.data));
    dispatch(setDates())
}
export const getDestinations = () => async (dispatch) => {
    const response = await api.getDestinations()
    dispatch(setDestinations(response.data))
}
export const getOffers = () => async (dispatch) => {
    const response = await api.getOffers()
    dispatch(setOffers(response.data))
}
export const updatePoint = (id, data) => async (dispatch) => {
    dispatch(onSendingData(id))
    const response = await api.updatePoint(id, data)
    if (response.status === 200) {
        dispatch(setUpdatePoint(id, response.data));
        dispatch(setDates());
        dispatch(offSendingData(id))
        dispatch(offEditMode(id))
    }
}
export const addPoint = (id, data) => async (dispatch) => {
    dispatch(onSendingData(id))
    const response = await api.addPoint(data);
    if (response.status === 200) {
        dispatch(setNewPoint(response.data));
        dispatch(setDates());
        dispatch(offSendingData(id))
        dispatch(newEventToggle(false))
    }
}

