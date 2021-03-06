import React from "react";


const Sort = (props) => {
    const sortTypes = ['Event', 'Time', 'Price'];

    const sortFormMarkup = sortTypes.map((type, index)=>{
        return (
            <div key={index} className={`trip-sort__item  trip-sort__item--${type.toLowerCase()}`}>
                <input id={`sort-${type.toLowerCase()}`} className="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
                       value={`sort-${type.toLowerCase()}`} defaultChecked={type === props.sortType} onChange={()=> props.sortTypeToggle(type)}/>
                <label className="trip-sort__btn" htmlFor={`sort-${type.toLowerCase()}`}>
                    {type}
                    <svg className="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                        <path
                            d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
                    </svg>
                </label>
            </div>
        )
    })
    return (
        <form className="trip-events__trip-sort  trip-sort">
            <span className="trip-sort__item  trip-sort__item--day">Day</span>

            {sortFormMarkup}

            <span className="trip-sort__item  trip-sort__item--offers">Offers</span>
        </form>
    )
};

export default Sort
