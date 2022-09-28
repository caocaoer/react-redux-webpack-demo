import Request from './base.service';
import { Base64 } from 'js-base64';

// export function getInfo() {
//   const patient = 'https://covid19-test.oth.io/clinician/api/patients/94';
//   return Request.get(
//     '/results/results',
//     {
//       max: 800,
//       patient,
//     },
//     'get'
//   );
// }

export function login(username: string, password: string) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + Base64.encode(`${username}:${password}`),
  };
  return Request.get('/idp2/users/auth', {}, headers);
}
