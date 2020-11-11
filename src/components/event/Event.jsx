import React from "react";
import {convertDate, NAME_DATE_TYPE} from "../../utils/dateUtils";
import {getEventTitle} from './eventForm/DestinationsEdit'
import Offer from '../Offer'


const Event = (props) => {

    let offers = props.point.offers.map((offer, index) => {
        return <Offer title={offer.title} price={offer.price} key={index}/>
    })
    return (
        <div className="event">
            <div className="event__type">
                <img className="event__type-icon" width="42" height="42"
                     src={`img/icons/${props.point.type}.png`}
                     alt="Event type icon"/>
            </div>
            <h3 className="event__title">{getEventTitle(props.point.type)+' '+props.point.destination.name}</h3>

            <div className="event__schedule">
                <p className="event__time">
                    <time className="event__start-time"
                          dateTime={props.point['date_from']}>{convertDate(props.point['date_from'], NAME_DATE_TYPE.TIME)}</time>
                    &mdash;
                    <time className="event__end-time"
                          dateTime={props.point['date_to']}>{convertDate(props.point['date_to'], NAME_DATE_TYPE.TIME)}</time>
                </p>
                <p className="event__duration">{convertDate(props.point['date_from'], NAME_DATE_TYPE.DURATION, props.point['date_to'])}</p>
            </div>

            <p className="event__price">
                &euro;&nbsp;<span className="event__price-value">{props.point['base_price']}</span>
            </p>

            <h4 className="visually-hidden">Offers:</h4>
            <ul className="event__selected-offers">
                {offers}
            </ul>

            <button className="event__rollup-btn" type="button" onClick={() => props.onEditMode(props.point.id)}>
                <span className="visually-hidden" >Open event</span>
            </button>
        </div>
    )
}
export default Event
