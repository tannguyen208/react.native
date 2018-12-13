import { delay } from '../utils';

/**
 * time delay
 * @param {number} time 
 */
export const decrement = async (time) => {
  await delay(time);
  console.log('decrement service');

  return true;
}

/**
 * time delay
 * @param {number} time 
 */
export const increment = async (time) => {
  await delay(time);
  console.log('increment service');

  return true;
}
