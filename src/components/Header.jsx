import React from "react";
import Info from "./Info";


const Header =(props)=> {
    console.log(props)
        return (
            <header className="page-header">
                <div className="page-body__container  page-header__container">
                    <img className="page-header__logo" src="img/logo.png" width="42" height="42" alt="Trip logo"/>

                    <div className="trip-main">
                        {(props.dates && props.towns && props.offers) ? <Info {...props}/>: ''}
                        <button className="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button"
                                onClick={()=> props.newEventToggle(true)} disabled={props.newEventEdit}
                        >New event</button>
                    </div>
                </div>
            </header>
        )

}
export default Header
