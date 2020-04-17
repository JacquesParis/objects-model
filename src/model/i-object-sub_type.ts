import {IObjectType} from './i-object-type';

export interface IObjectSubType {
  name?: string;

  index?: number;

  min?: number;

  max?: number;

  exclusions?: string[];

  mandatories?: string[];

  subObjectTypeId: string;

  subObjectTypeUri?: string;
}
