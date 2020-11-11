import React from "react";



export default class Nav extends React.Component {
    render() {
        return (
            <div className="container">
                <h2 className="visually-hidden">Switch trip view</h2>
                <nav className="trip-controls__trip-tabs  trip-tabs">
                    <a className="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
                    <a className="trip-tabs__btn" href="#">Stats</a>
                </nav>
            </div>
        )
    }
}
