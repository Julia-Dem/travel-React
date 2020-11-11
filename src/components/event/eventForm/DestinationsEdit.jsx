import React from "react";
import {Field} from 'formik'

export const getEventTitle = (type) => {
    if(type==='sightseeing'||type==='check-in'||type==='restaurant'){
        return(type.charAt(0).toUpperCase() + type.slice(1) + ' in ')
    } else {
        return(type.charAt(0).toUpperCase() + type.slice(1) + ' to ')
    }
};


const DestinationsEdit = (props) => {


    const getDestination = (array) => {
        return array.map((town, index) => <option value={town.name} key={props.id + index}>{town.name}</option>)
    }
        return (
            <div>
                <Field>
                    {({form}) => {
                        return <label className="event__label  event__type-output" htmlFor={`eventDay-destination-${props.id}`}>
                            {getEventTitle(form.values.type)}
                        </label>
                    }}
                </Field>

                <Field name='eventTown' as='select'  className="event__input  event__input--destination" id={`eventDay-destination-${props.id}`}>
                    {getDestination(props.towns)}
                </Field>
            </div>
        )
}
export default  DestinationsEdit;
