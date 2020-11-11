import React, {useState} from 'react';
import EventDayContainer from "./eventDay/EventDayContainer";
import Sort from "./Sort";
import SortingEvents from "./event/SortingEvents";
import NewEvent from "./event/NewEvent";


const EventsContainer = (props) => {
const [sortType, setSortType] = useState('Event');

const sortTypeToggle = (type)=>{
    if (type === sortType) {
        return
    }
    setSortType(type)
}

    return (
        <>
            <Sort sortTypeToggle={sortTypeToggle} sortType={sortType}/>
            {props.newEventEdit? <NewEvent{...props}/> : null}
            {sortType === 'Event'? <EventDayContainer {...props}/> :  <SortingEvents {...props} sortType={sortType}/>}
        </>
    )
}

export default EventsContainer;
