import React from 'react'
import {Field} from "formik";


const DestinationDescription = (props) => {
    return (
        <section className="event__section  event__section--destination">
            <h3 className="event__section-title  event__section-title--destination">Destination</h3>
            <Field>
                {({form}) => {
                    let town = props.towns.find(town => town.name === form.values.eventTown );
                    return <p className="event__destination-description">{town.description}</p>
                }}
            </Field>
            <div className="event__photos-container">
                <div className="event__photos-tape">
                    <Field>
                        {({form}) => {
                            let town = props.towns.find( town => town.name === form.values.eventTown );

                            return town.pictures.map((photo, index) => {
                                return <img className="event__photo" src={photo.src} alt={photo.description}
                                            key={index}/>
                            })
                        }}
                    </Field>
                </div>
            </div>
        </section>
    )
}

export default DestinationDescription
