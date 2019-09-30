const TWITCH_CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;

const getVideosListFromChannel = (user_id, offset = 0, limit = 12, sort = 'time') => {
  const twitchApiRequest = new Request(`https://api.twitch.tv/helix/videos?user_id=${user_id}&first=${limit}&offset=${offset}&type=archive&sort=${sort}`, {
    headers: new Headers({
      'client-id': TWITCH_CLIENT_ID,
    }),
  });
  return fetch(twitchApiRequest)
    .then(res => res.json()).then(jsonRes => jsonRes.data);
}

const getChannelData = (channel) => {
  const twitchApiRequest = new Request(`https://api.twitch.tv/helix/users?login=${channel}`, {
    headers: new Headers({
      'client-id': TWITCH_CLIENT_ID,
    }),
  });
  return fetch(twitchApiRequest)
    .then(res => res.json()).then(jsonRes => jsonRes.data[0]);
}

export default {
  getVideosListFromChannel,
  getChannelData,
};