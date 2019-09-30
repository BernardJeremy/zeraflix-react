const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

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

  videoObj.length = video.duration;
  videoObj.thumbnail_url = video.thumbnail_url.replace('%{width}', '320').replace('%{height}', '180');
  videoObj.recorded_at = dateToString(new Date(video.published_at));

  return videoObj;
}

export default formatVideoData;