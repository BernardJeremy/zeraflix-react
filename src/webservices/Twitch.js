const TWITCH_CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;

const getVideosListFromChannel = (channel, offset = 0, limit = 12, sort = 'time') => {
  const twitchApiRequest = new Request(`https://api.twitch.tv/kraken/channels/${channel}/videos?limit=${limit}&offset=${offset}&broadcast_type=archive&sort=${sort}`, {
    headers: new Headers({
      'client-id': TWITCH_CLIENT_ID,
    }),
  });
  return fetch(twitchApiRequest)
    .then(res => res.json());
}

const getChannelData = (channel) => {
  const twitchApiRequest = new Request(`https://api.twitch.tv/kraken/channels/${channel}`, {
    headers: new Headers({
      'client-id': TWITCH_CLIENT_ID,
    }),
  });
  return fetch(twitchApiRequest)
    .then(res => res.json());
}

export default {
  getVideosListFromChannel,
  getChannelData,
};