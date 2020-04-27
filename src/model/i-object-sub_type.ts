import {IObjectType} from './i-object-type';
import {IRestEntity} from './i-rest-entity';

export interface IObjectSubType extends IRestEntity {
  name?: string;

  index?: number;

  min?: number;

  max?: number;

  exclusions?: string[];

  mandatories?: string[];

  subObjectTypeId: string;

  subObjectTypeUri?: string;

  objectType?: IObjectType;
}
