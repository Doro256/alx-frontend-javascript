export default function handleResponseFromAPI(promise) {
  /* eslint-disable no-unused-vars */
  promise.then((value) => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  }).catch((err) => {
    console.error(err);
  });
}
