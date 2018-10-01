import { TEST_DISPATCH } from './types';

export const registerUser = (userDate) => {
  return {
    type: TEST_DISPATCH,
    payload: userDate
  }
}
