export default function getFullResponseFromAPI(statusBool) {
  const newPromise = new Promise((resolve, reject) => {
    if (statusBool) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return newPromise;
}
