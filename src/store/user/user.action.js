import { CreateAction } from "../../utils/reducer/reducer.util";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) =>
  CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
/*
  CHECK_USER_SESSION: "user/CHECK_USER_SESSION",
  GOOGLE_SING_IN_START: "user/GOOGLE_SING_IN_START",
  EMAIL_SING_IN_START: "user/EMAIL_SING_IN_START",
  SIGN_IN_SUCCESS: "user/SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "user/SIGN_IN_FAILURE",
  */

export const checkUserSession = () =>
  CreateAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  CreateAction(USER_ACTION_TYPES.GOOGLE_SING_IN_START);

export const emailSignInStart = (email, password) =>
  CreateAction(USER_ACTION_TYPES.EMAIL_SING_IN_START);

export const signInSuccess = (user) =>
  CreateAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  CreateAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  CreateAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user, additionalDetails) =>
  CreateAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  CreateAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const singOutStart = () =>
  CreateAction(USER_ACTION_TYPES.SING_OUT_START);

export const signOutSuccess = () =>
  CreateAction(USER_ACTION_TYPES.SING_OUT_SUCCESS);

export const signOutFailed = (error) =>
  CreateAction(USER_ACTION_TYPES.SING_OUT_FAILED, error);
