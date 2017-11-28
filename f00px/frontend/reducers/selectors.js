import { values } from 'lodash'; 

export const selectPhotos = ({ photos }) => {
  return values(photos);
};