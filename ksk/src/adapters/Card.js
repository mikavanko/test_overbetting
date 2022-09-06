import moment from 'moment';

export default function CardAdapter(data) {
  return data
    ? {
      id: data.id,
      number: data.number,
      type: data.type,
      creationDate: moment(data.creationDate).format('DD.MM.YYYY hh:mm:ss'),
    }
    : null;
}
