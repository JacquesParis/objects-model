import {IDataEntity} from './i-data-entity';
import {IObjectType} from './i-object-type';

export interface IObjectSubType extends IDataEntity {
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
