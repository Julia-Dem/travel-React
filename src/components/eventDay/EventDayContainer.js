import React from 'react';
import EventDay from "./Event-day";
import {convertDate, NAME_DATE_TYPE} from '../../utils/dateUtils';
import {offEditMode, offSendingData, onSendingData} from "../../redux/point-reducer";

const EventDayContainer = (props) => {
    let sortingDates = [...props.dates].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    let days = sortingDates.map((day, index) => {
        const sortingPoints = [...props.points]
        let points = sortingPoints.filter((point) => {
            return convertDate(point.date_from, NAME_DATE_TYPE.DATETIME) === day.dateTime;
        })
        return <EventDay key={index}
                         countDay={index + 1}
                         dateText={day.text}
                         dateTime={day.dateTime}
                         points={points}
                         towns={props.towns}
                         offers={props.offers}
                         editMode={props.editMode}
                         isSendingData={props.isSendingData}
                         updatePoint={props.updatePoint}
                         onEditMode={props.onEditMode}
                         offEditMode={props.offEditMode}/>
    })
    return <ul className="trip-days">{days}</ul>
}

export default EventDayContainer;
