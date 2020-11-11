import React from "react";
import EventForm from "./eventForm/EventForm";



const EventEdit = (props) => {
    console.log(props)

    const initialValuesOffersAll = props.offers.reduce((object, off) => {
        const offers = off.offers.reduce((obj, offer) => {
            let name = offer.title.split(' ').join('_');
            let value = props.point.offers.some(pointOffer => pointOffer.title === offer.title);
            return {...obj, [name]: value}
        }, {});

        return {...object, [off.type]: offers}
    }, {});


    const initialValues = {
        type: props.point.type,
        eventTown: props.point.destination.name,
        date_from: new Date(props.point.date_from),
        date_to: new Date(props.point.date_to),
        base_price: props.point.base_price,
        is_favorite: props.point.is_favorite,
        offers: {...initialValuesOffersAll}
    }

    const onSubmitForm = (data) => {
        props.updatePoint(props.point.id, data);
    }
    const onResetForm = () => {
        props.offEditMode(props.point.id);
    }


    return <EventForm {...props} onSubmitForm={onSubmitForm} onResetForm={onResetForm} initialValues={initialValues}/>
}
export default EventEdit
