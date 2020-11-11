import React from "react";
import EventType from "./EventType";
import DestinationsEdit from "./DestinationsEdit";
import DestinationDescription from "./DestinationDescription";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import OffersEdit from "./OffersEdit";
import {TextError} from '../../TextError';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'


const EventForm = (props) => {
    const submitHandle = (obj) => {
        const destination = props.towns.find(town => town.name === obj.eventTown);
        const offersPoint = props.offers.find(offer => offer.type === obj.type);
        const selectedOffers = offersPoint.offers.filter((offer) => {
            return obj.offers[obj.type][offer.title.split(' ').join('_')]
        });
        return {
            base_price: Number(obj.base_price),
            date_from: new Date(obj.date_from).toISOString(),
            date_to: new Date(obj.date_to).toISOString(),
            destination,
            id: props.point.id.toString(),
            is_favorite: obj.is_favorite,
            offers: selectedOffers,
            type: obj.type
        }
    }
    return (
        <Formik
            initialValues={props.initialValues}
            validationSchema={Yup.object({
                eventTown: Yup.string()
                    .required('Required'),
                date_from: Yup.date()
                    /*.min(new Date(),"This day is already in the past")*/
                    .required('Required')
                    .nullable(),
                date_to: Yup.date()
                    .min(Yup.ref('date_from'), 'End date cannot be earlier than start date')
                    .required('Required')
                    .nullable(),
                base_price: Yup.number()
                    .min(1,'Indicate the price')
                    .required('Required'),
            })}
            onSubmit={(values, {setSubmitting}) => {

                props.onSubmitForm(submitHandle(values));
                setSubmitting(false)
            }}
            onReset={() => props.onResetForm()}
        >
            <Form className="trip-events__item  event  event--edit" id="form">
                <header className="event__header">
                    <EventType type={props.point.type} id={props.point.id}/>
                    <DestinationsEdit towns={props.towns} id={props.point.id}/>
                    <div className="event__field-group  event__field-group--time">
                        <label className="visually-hidden" htmlFor={`eventDay-start-time-${props.point.id}`}>
                            From
                        </label>
                        <div className={'error_container'}>
                            <Field className="event__input  event__input--time"
                                   id={`eventDay-start-time-${props.point.id}`}
                                   name="date_from" type="text">
                                {({form, field}) => {
                                    const {setFieldValue} = form;
                                    const {value} = field;
                                    return (
                                        <DatePicker
                                            id="date_from"
                                            {...field}
                                        selected={value}
                                            onChange={val=> setFieldValue(field.name, val)}
                                            dateFormat="yyyy/MM/dd hh:mm aa"
                                        />
                                    )
                                }

                                }
                            </Field>
                            <ErrorMessage name="date_from" component={TextError}/>
                        </div>
                        &mdash;
                        <label className="visually-hidden" htmlFor={`eventDay-end-time-${props.point.id}`}>
                            To
                        </label>
                        <div className={'error_container'}>
                            <Field className="event__input  event__input--time"
                                   id={`eventDay-end-time-${props.point.id}`}
                                   type="text"
                                   name="date_to">
                                {({form, field}) => {
                                    const {setFieldValue} = form;
                                    const {value} = field;
                                    return (
                                        <DatePicker
                                            id="date_to"
                                            {...field}
                                            selected={value}
                                            onChange={val=> setFieldValue(field.name, val)}
                                            dateFormat="yyyy/MM/dd hh:mm aa"
                                        />
                                    )
                                }
                                }

                            </Field>
                            <ErrorMessage name="date_to" component={TextError}/>
                        </div>
                    </div>
                    <div className="event__field-group  event__field-group--price">
                        <label className="event__label" htmlFor={`eventDay-price-${props.point.id}`}>
                            <span className="visually-hidden">Price</span>
                            &euro;
                        </label>
                        <div className={'error_container'}>
                            <Field className="event__input  event__input--price" id={`eventDay-price-${props.point.id}`}
                                   type="text"
                                   name="base_price"/>
                            <ErrorMessage name="base_price" component={TextError}/>
                        </div>
                    </div>
                    <button className="event__save-btn  btn  btn--blue" type="submit"
                            disabled={props.isSendingData.some(id => id === props.point.id)}>{props.isSendingData.some(id => id === props.point.id) ? 'Saving...' : 'Save'}</button>
                    <button className="event__reset-btn" type="reset"
                            disabled={props.isSendingData.some(id => id === props.point.id)}>Cancel
                    </button>
                    <Field id={`eventDay-favorite-${props.point.id}`}
                           className="event__favorite-checkbox  visually-hidden"
                           type="checkbox" name="is_favorite"/>
                    <label className="event__favorite-btn" htmlFor={`eventDay-favorite-${props.point.id}`}>
                        <span className="visually-hidden">Add to favorite</span>
                        <svg className="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                            <path
                                d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                        </svg>
                    </label>
                </header>
                <section className="event__details">
                    <OffersEdit point={props.point} offers={props.offers}/>
                    <DestinationDescription towns={props.towns}/>
                </section>
            </Form>
        </Formik>
    )
}
export default EventForm

