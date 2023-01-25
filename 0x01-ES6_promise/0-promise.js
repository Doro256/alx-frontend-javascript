export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const error = false;

    if (!error) {
      resolve();
    } else {
      reject();
    }
  });
}
