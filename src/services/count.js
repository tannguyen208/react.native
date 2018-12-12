import { delay } from '../utils';

export const increment = async () => {
  await delay(1000);
  console.log('increment++ service');

  return true
}

export const decrement = async () => {
  await delay(1000);
  console.log('decrement-- service');

  return true
}
