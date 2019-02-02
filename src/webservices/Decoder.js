const DECODER_API_HOST = process.env.REACT_APP_DECODER_API_HOST || 'https://api.zeraflix.bernard.sh';

const getDecodedContentUrl = (twitchUrl) => {
  const decoderRequest = new Request(`${DECODER_API_HOST}/decode?twitchUrl=${twitchUrl}`);
  return fetch(decoderRequest)
    .then(res => res.json());
}
export default {
  getDecodedContentUrl,
};