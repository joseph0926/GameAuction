import { ObjectSchema } from 'yup';

export interface IAuthUser {
  profilePublicId: string | null;
  country: string | null;
  createdAt: Date | null;
  email: string | null;
  emailVerificationToken: string | null;
  emailVerified: boolean | null;
  id: string | null;
  passwordResetExpires: Date | null;
  passwordResetToken: null | null;
  profileImage: string | null;
  updatedAt: Date | null;
  username: string | null;
}

export interface IAuthDocument {
  id?: string;
  profilePublicId?: string;
  username?: string;
  email?: string;
  password?: string;
  country?: string;
  profileImage?: string;
  emailVerified?: number;
  emailVerificationToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
}

export interface IUseAuthSchema {
  schema: ObjectSchema<ISignInPayload | ISignUpPayload | IResetPassword>;
  userInfo: ISignInPayload | ISignUpPayload | IResetPassword;
}

export const AUTH_FETCH_STATUS = {
  IDLE: '',
  SUCCESS: 'success',
  ERROR: 'error'
};

export interface ISignUpPayload {
  [key: string]: string;
  username: string;
  password: string;
  email: string;
  country: string;
  profileImage: string;
}

export interface ISignInPayload {
  [key: string]: string;
  username: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  [key: string]: string;
  password: string;
  confirmPassword: string;
}

export interface IReduxAuthPayload {
  authInfo?: IAuthDocument;
}

export interface IReduxAddAuthUser {
  type: string;
  payload: IReduxAuthPayload;
}

export interface IReduxLogout {
  type: string;
  payload: boolean;
}

export interface IAuthResponse {
  message: string;
}
