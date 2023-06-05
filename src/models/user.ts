import { ChangeEvent, FocusEvent } from "react";

export interface User {
  id: number;
  name?: string;
  email: string;
  password: string;
}

export interface UserState {
  user: User | null;
}

export interface BaseFormControlProps {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
  validateFn?: (value: string) => boolean;
  isValid: boolean;
  touched: boolean;
  username?: string;
}

export interface FormState {
  email: string;
  password: string;
  username: string;
}

export interface TouchedState {
  email: boolean;
  password: boolean;
  username: boolean;
}

export interface ValidState {
  email: boolean;
  password: boolean;
  username: boolean;
}

export interface UseInputReturn {
  formState: FormState;
  touched: TouchedState;
  isValid: ValidState;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoginFormValid: boolean;
}
