export default function handleResponseFromAPI(promise) {
  promise.then((value = 'Got a response from the API') => {
    console.log(value);
    return { status: 200, body: 'success' };
  }).catch(new Error());
}
