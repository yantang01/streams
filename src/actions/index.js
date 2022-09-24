// can only change states in action creators
import { SIGN_IN } from "./types";
import { SIGN_OUT } from "./types";

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
