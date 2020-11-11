import React from "react";
import {Field} from "formik";


const EventType = (props) => {
    const eventType = {
        transfer: ['Bus','Drive','Flight','Ship','Taxi','Train','Transport'],
        activity:['Check-in', 'Sightseeing', 'Restaurant']
    };

    const getMarkupTypesFormik = (array)=>{
        return array.map((type, index)=>{
            return(
                <div className="event__type-item" key={index}>
                    <Field id={`event-type-${type.toLowerCase()}-${index+props.id}`}
                           value={type.toLowerCase()}
                           className="event__type-input  visually-hidden"
                           type="radio"
                           name="type" />
                    <label className={`event__type-label  event__type-label--${type.toLowerCase()}`}
                           htmlFor={`event-type-${type.toLowerCase()}-${index+props.id}`}>{type}</label>
                </div>
            )
        })
    }
    return (
        <div className="event__type-wrapper">
            <label className="event__type  event__type-btn" htmlFor={`eventDay-type-toggle-${props.id}`}>
                <span className="visually-hidden">Choose eventDay type</span>
                <Field>
                    {({form}) => {
                            return <img className="event__type-icon" width="17" height="17"
                                         src={`img/icons/${form.values.type}.png`} alt="Event type icon"/>
                        }}
                </Field>
            </label>
            <input name='eventTypeToggle' className="event__type-toggle  visually-hidden" id={`eventDay-type-toggle-${props.id}`}
                   type="checkbox"/>
            <div className="event__type-list">
                <fieldset className="event__type-group">
                    <legend className="visually-hidden">Transfer</legend>
                    {getMarkupTypesFormik(eventType.transfer)}
                </fieldset>
                <fieldset className="event__type-group">
                    <legend className="visually-hidden">Activity</legend>
                    {getMarkupTypesFormik(eventType.activity)}
                </fieldset>
            </div>
        </div>
    )
}
export default EventType;
