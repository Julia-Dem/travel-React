import React from "react";
import {Field} from 'formik';


const OffersEdit = (props) => {
        return (
            <section className="event__section  event__section--offers">
                <h3 className="event__section-title  event__section-title--offers">Offers</h3>
                <div className="event__available-offers">
                    <Field>
                        {({field, form}) => {
                            const offers = props.offers.find(off => off.type === form.values.type).offers;
                            field.name = `offers`;
                            if (offers.length){
                            return offers.map((offer, index) => {
                                return (
                                    <div className="event__offer-selector" key={index}>
                                        <Field className="event__offer-checkbox  visually-hidden"
                                               id={offer.title.split(' ').join('_') + props.point.id}
                                               type="checkbox"
                                               name={`offers.${form.values.type}.${offer.title.split(' ').join('_')}`}/>
                                        <label className="event__offer-label" htmlFor={offer.title.split(' ').join('_') + props.point.id}>
                                            <span className="event__offer-title">{offer.title}</span>
                                            &#43;
                                            &euro;&nbsp;<span className="event__offer-price">{offer.price}</span>
                                        </label>
                                    </div>
                                )
                            })} else {
                                return <span>No available offers</span>
                            }

                        }}
                    </Field>
                </div>
            </section>
        )

}
export default OffersEdit;

