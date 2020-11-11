import React from "react";
import EventContainer from "../event/EventContainer";


const EventDay = (props) => {
    const sortingPoints = props.points.sort((a, b) => new Date(a.date_from) - new Date(b.date_from))
    let eventContainers = sortingPoints.map((point, index) => {
        return <EventContainer key={point.id + index}
                               point={point}
                               towns={props.towns}
                               offers={props.offers}
                               editMode={props.editMode}
                               isSendingData={props.isSendingData}
                               updatePoint={props.updatePoint}
                               onEditMode={props.onEditMode}
                               offEditMode={props.offEditMode}
                               onSendingData={props.onSendingData}
                               offSendingData={props.offSendingData}/>
    });
    return (
        <li className="trip-days__item  day">
            <div className="day__info">
                <span className="day__counter">{props.countDay}</span>
                <time className="day__date" dateTime={props.dateTime}>{props.dateText}</time>
            </div>
            <ul className="trip-events__list">
                {eventContainers}
            </ul>
        </li>
    )
}
export default EventDay
