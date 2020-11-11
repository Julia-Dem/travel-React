import React from "react";
import Header from "./components/Header";
import {connect} from "react-redux";
import {
    getDestinations,
    getOffers,
    getPoints,
    updatePoint,
    addPoint,
    onEditMode,
    offEditMode,
    newEventToggle
} from "./redux/point-reducer";
import NoEvents from "./components/No-events";
import EventsContainer from "./components/EventsContainer";

class App extends React.Component {
    componentDidMount() {
        this.props.getPoints();
        this.props.getOffers();
        this.props.getDestinations();
    }

    render() {
        return (
            <div className="App">
                <Header {...this.props}/>
                <main className="page-body__page-main  page-main">
                    <div className="page-body__container">
                        <section className="trip-events">
                            <h2 className="visually-hidden">Trip events</h2>
                            {(this.props.dates && this.props.towns && this.props.offers) ?
                                <EventsContainer {...this.props}/> : <NoEvents/>}
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        points: state.eventsPage.points,
        dates: state.eventsPage.dates,
        towns: state.eventsPage.destinations,
        offers: state.eventsPage.offers,
        isSendingData: state.eventsPage.isSendingData,
        editMode: state.eventsPage.editMode,
        newEventEdit: state.eventsPage.newEventEdit
    }
}


export default connect(mapStateToProps, {
    getPoints,
    getDestinations,
    getOffers,
    updatePoint,
    addPoint,
    onEditMode,
    offEditMode,
    newEventToggle
})(App);
