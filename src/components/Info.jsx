import {convertDate, NAME_DATE_TYPE} from "../utils/dateUtils";

const Info = (props) => {
    const uniqueTowns = Array.from(new Set(props.points.map(point => point.destination.name)));
    let totalPrice= 0;
    props.points.forEach(point => {
       point.offers.forEach(offer =>  totalPrice+= offer.price)
        return  totalPrice += point.base_price;
    });
const sortedEvents  = [...props.points].sort((a, b) => convertDate(a.date_from, NAME_DATE_TYPE.TIMESTAMP) > convertDate(b.date_from, NAME_DATE_TYPE.TIMESTAMP) ? 1 : -1);
const firstDate = convertDate(sortedEvents[0].date_from, NAME_DATE_TYPE.MONTH_DAY);
const lastDate = convertDate(sortedEvents[sortedEvents.length-1].date_from, NAME_DATE_TYPE.MONTH_DAY);
    return(
        <section className="trip-main__trip-info  trip-info">
            <div className="trip-info__main">
                <h1 className="trip-info__title">{uniqueTowns.join(` - `)}</h1>

                <p className="trip-info__dates">{firstDate}&nbsp;&mdash;&nbsp;{lastDate}</p>
            </div>

            <p className="trip-info__cost">
                Total: &euro;&nbsp;<span className="trip-info__cost-value">{totalPrice}</span>
            </p>
        </section>
    )
}
export default Info

