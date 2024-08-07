import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const firstNamePromise = signUpUser(firstName, lastName);
  const fileNamePromise = uploadPhoto(fileName);
  return Promise.allSettled([firstNamePromise, fileNamePromise])
    .then((values) => values);
}
