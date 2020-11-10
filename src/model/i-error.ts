export const ERROR_424_UNEXPECTED_ERROR = 'UNEXPECTED_ERROR';
export const ERROR_401_AUTHENTICATION_NEEDED = 'AUTHENTICATION_NEEDED';
export const ERROR_401_AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED';

export interface IObjectError {
  statusCode: number;
  errorCode: string;
  name: string;
  message: string;
  errorArgs: {[key: string]: any};
}
