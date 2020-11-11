import React from "react";



const Offer = (props) => {
        return (
            <li className="event__offer">
                <span className="event__offer-title">{props.title} </span>
                    &#43;
                &euro;&nbsp;<span className="event__offer-price">{props.price}</span>
            </li>
        )
}
export default Offer;
