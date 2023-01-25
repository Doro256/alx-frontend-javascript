export default function handleResponseFromAPI(promise) {
  promise.then((resp = 'Got a response from the API') => {
    console.log(resp);
    return { status: 200, body: 'success' };
  }).catch((err) => {
    console.error(err);
  });
}
