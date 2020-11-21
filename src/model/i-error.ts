export enum ApplicationErrors {
  UNEXPECTED_ERROR = 'UNEXPECTED_ERROR',
  AUTHENTICATION_NEEDED = 'AUTHENTICATION_NEEDED',
  AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED',
  FORBIDEN = 'FORBIDEN',
  NOT_FOUND = 'NOT_FOUND',
  WRONG_VALUE = 'WRONG_VALUE',
  TOO_MANY_OBJECT_CONSTRAINT = 'TOO_MANY_OBJECT_CONSTRAINT',
  CORRUPTED_OBJECT = 'CORRUPTED_OBJECT',
  CONFLICT = 'CONFLICT',
  MISSING = 'MISSING',
  INCOMBATIBLE = 'INCOMBATIBLE',
  MISSING_PARAMETER = 'MISSING_PARAMETER',
  UNAUTHORIZED_VALUE = 'UNAUTHORIZED_VALUE',
  NOT_IMPLEMENTED = 'NOT_IMPLEMENTED',
}

export const APPLICATION_ERRORS: {
  [name in ApplicationErrors]: {statusCode: number; errorCode: string};
} = {
  [ApplicationErrors.UNEXPECTED_ERROR]: {
    errorCode: ApplicationErrors.UNEXPECTED_ERROR,
    statusCode: 424,
  },
  [ApplicationErrors.AUTHENTICATION_NEEDED]: {
    errorCode: ApplicationErrors.AUTHENTICATION_NEEDED,
    statusCode: 401,
  },
  [ApplicationErrors.AUTHENTICATION_FAILED]: {
    errorCode: ApplicationErrors.AUTHENTICATION_FAILED,
    statusCode: 401,
  },
  [ApplicationErrors.NOT_FOUND]: {
    errorCode: ApplicationErrors.NOT_FOUND,
    statusCode: 404,
  },
  [ApplicationErrors.WRONG_VALUE]: {
    errorCode: ApplicationErrors.WRONG_VALUE,
    statusCode: 422,
  },
  [ApplicationErrors.TOO_MANY_OBJECT_CONSTRAINT]: {
    errorCode: ApplicationErrors.TOO_MANY_OBJECT_CONSTRAINT,
    statusCode: 424,
  },
  [ApplicationErrors.CORRUPTED_OBJECT]: {
    errorCode: ApplicationErrors.CORRUPTED_OBJECT,
    statusCode: 424,
  },
  [ApplicationErrors.CONFLICT]: {
    errorCode: ApplicationErrors.CONFLICT,
    statusCode: 409,
  },
  [ApplicationErrors.MISSING]: {errorCode: ApplicationErrors.MISSING, statusCode: 424},
  [ApplicationErrors.INCOMBATIBLE]: {errorCode: ApplicationErrors.INCOMBATIBLE, statusCode: 424},
  [ApplicationErrors.MISSING_PARAMETER]: {errorCode: ApplicationErrors.MISSING_PARAMETER, statusCode: 400},
  [ApplicationErrors.UNAUTHORIZED_VALUE]: {errorCode: ApplicationErrors.UNAUTHORIZED_VALUE, statusCode: 424},
  [ApplicationErrors.FORBIDEN]: {errorCode: ApplicationErrors.FORBIDEN, statusCode: 403},
  [ApplicationErrors.NOT_IMPLEMENTED]: {errorCode: ApplicationErrors.NOT_IMPLEMENTED, statusCode: 501},
};
export interface IObjectError {
  statusCode: number;
  errorCode: string;
  name: string;
  message: string;
  errorArgs: {[key: string]: any};
}
