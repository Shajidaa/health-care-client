// import type { Role } from "../../../generated/prisma/browser";

import { Role } from "../../../../generated/prisma/enums";

export interface ILoginUserPayload {
  email: string;
  password: string;
}

export interface IRegisterPatientPayload {
  name: string;
  email: string;
  password: string;
  patient: any;
}
export interface IVerifyEmailPayload {
  email: string;
  otp: string;
}
export interface IRequestUser {
  userId: string;
  email: string;
  name: string;
  role: Role;
}

export interface IGoogleLoginPayload {
  idToken: string;
}

export interface IForgotPasswordPayload {
  email: string;
}
export interface IResetPasswordPayload {
  email: string;
  newPassword: string;
  otp: string;
}
