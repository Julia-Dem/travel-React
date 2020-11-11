import React from 'react';
import {convertDate, NAME_DATE_TYPE} from '../../utils/dateUtils';
import EventContainer from "./EventContainer";


const SortingEvents = (props) => {
    let sortedEvents;

    if (props.sortType === 'Time') {
        sortedEvents = [...props.points].sort((a, b) =>  convertDate(a.date_from, NAME_DATE_TYPE.DURATION_TIMESTAMP,a.date_to) < convertDate(b.date_from, NAME_DATE_TYPE.DURATION_TIMESTAMP,b.date_to) ? 1 : -1);
    } else if (props.sortType === 'Price') {
        sortedEvents = [...props.points].sort((a, b) => a.base_price > b.base_price ? 1 : -1);
    }


    const eventContainers = sortedEvents.map((point) => {
        return <EventContainer key={point.id}
                               point={point}
                               towns={props.towns}
                               offers={props.offers}
                               updatePoint={props.updatePoint}
                               isSendingData={props.isSendingData}
                               editMode={props.editMode}
                               onEditMode={props.onEditMode}/>
    })

    return (
        <ul className="trip-days">
        <li className="trip-days__item  day">
            <div className="day__info">
            </div>
            <ul className="trip-events__list">
                {eventContainers}
            </ul>
        </li>
    </ul>
    )}

export default SortingEvents;
