const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

//https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
const formatSecondsToTime = (sec_num) => {
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return `${hours}:${minutes}:${seconds}`;
}

const padZero = integer => (
  integer < 10 ? '0' + integer : '' + integer
);

const dateToString = date => (
  MONTH_NAMES[date.getMonth()] + 
  ' ' +
  padZero(date.getDate()) +
  ', ' +
  date.getFullYear() +
  ' - ' +
  padZero(date.getHours()) +
  ':' +
  padZero(date.getMinutes())
);

const formatVideoData = video => {
  const videoObj = {...video};

  videoObj.length = formatSecondsToTime(video.length);
  videoObj.recorded_at = dateToString(new Date(video.recorded_at));

  return videoObj;
}

export default formatVideoData;