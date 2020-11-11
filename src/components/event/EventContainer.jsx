import React, {useState} from "react";
import Event from "./Event";
import EventEdit from "./EventEdit";


const EventContainer = (props) => {

    return (
        <li className="trip-events__item">
            {props.editMode.some(id => id === props.point.id)? <EventEdit {...props} /> : <Event {...props}/>}
        </li>
    )
}
export default EventContainer
