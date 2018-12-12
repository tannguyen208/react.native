/**
 * @author tanna
 * @format
 * @flow
 * @param {number} time 
 */
export const delay = time => new Promise(resolve => setTimeout(resolve, time));
