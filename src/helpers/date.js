const weekdays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const d = new Date();

const weekday = d.getDay();
let day = d.getDate();
let month = d.getMonth() + 1;

if (day < 10) {
  day = `0${day}`;
}

if (month < 10) {
  month = `0${month}`;
}

const date = {
  weekDay: weekdays[weekday],
  day: `${day}/${month}`,
};

export default date;
