export const NAME_DATE_TYPE = {
    DATETIME: 'DATETIME',
    MONTH_DAY: 'MONTH DAY',
    MONTH_DAY_YEAR: 'MONTH DAY YEAR',
    TIMESTAMP: 'TIMESTAMP',
    DURATION: 'DURATION',
    DURATION_TIMESTAMP:'DURATION TIMESTAMP',
    TIME: 'TIME',
    FULL_DATE: 'FULL DATE'

}
const castTimeFormat = (value) => {
    return value < 10 ? `0${value}` : value;
};

export const MONTH = [`jan`, `feb`, `mar`, `apr`, `may`, `jun`, `jul`, `aug`, `sep`, `oct`, `nov`, `dec`];

export const convertDate = (date, type, date2='') => {
    switch (type) {
        case 'DATETIME': {
            return `${new Date(date).getUTCFullYear()}/${new Date(date).getUTCMonth() + 1}/${new Date(date).getUTCDate()}`
        }
        case 'TIME': {
            return `${castTimeFormat(new Date(date).getUTCHours())}:${castTimeFormat(new Date(date).getUTCMinutes())}`
        }
        case 'TIMESTAMP': {
            return `${new Date(date).getTime()}`
        }
        case 'MONTH DAY': {
            return `${MONTH[new Date(date).getUTCMonth()]} ${new Date(date).getUTCDate()}`;
        }
        case 'FULL DATE': {
            return `${new Date(date).getUTCDate()}/${MONTH[new Date(date).getUTCMonth()]}/${new Date(date).getUTCFullYear()}`;
        }
        case 'DURATION': {
            let duration = new Date(date2) - new Date(date);
            let days = new Date(duration).getUTCDate()-1;
            let hours = new Date(duration).getUTCHours();
            let minutes = new Date(duration).getUTCMinutes()
            return `${days? days+'D':''} ${hours? hours+'H':''} ${minutes? minutes+'M':''}`
        }
        case 'DURATION TIMESTAMP': {
            return  (new Date(date2).getTime() - new Date(date).getTime());


        }
    }
}


