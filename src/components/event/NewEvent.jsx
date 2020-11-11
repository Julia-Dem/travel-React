import React from "react";
import {convertDate, NAME_DATE_TYPE} from "../../utils/dateUtils";
import {getEventTitle} from './eventForm/DestinationsEdit'
import Offer from '../Offer'
import EventForm from "./eventForm/EventForm";
import {pointsReducer} from "../../redux/point-reducer";


const NewEvent = (props) => {
    console.log(props)
    const initialValuesOffersAll = props.offers.reduce((object, off) => {
        const offers = off.offers.reduce((obj, offer) => {
            let name = offer.title.split(' ').join('_');
            return {...obj, [name]: false}
        }, {});

        return {...object, [off.type]: offers}
    }, {});

    const templatePoint = {
        id: props.points.length,
        type: 'drive'
    }
    const initialValues = {
        type: 'drive',
        eventTown: props.towns[0].name,
        date_from: new Date(),
        date_to: new Date(),
        base_price: '',
        is_favorite: false,
        offers: {...initialValuesOffersAll}
    }

    const onSubmitForm = (data) => {
        props.addPoint(templatePoint.id, data)
    }
    const onResetForm = () => {
        props.newEventToggle(false);
    }

    return (
        <EventForm initialValues={initialValues} onSubmitForm={onSubmitForm} onResetForm={onResetForm} isSendingData={props.isSendingData} point={templatePoint} towns={props.towns} offers={props.offers} />
    )
}
export default NewEvent
