// 0-promise.js
function getResponseFromAPI() {
  const promise = new Promise((resolve) => {
    // Simulate an asynchronous API response
    setTimeout(() => {
      resolve('API response data');
    }, 1000); // Simulating a delay of 1 second
  });

  return promise;
}

export default getResponseFromAPI;

