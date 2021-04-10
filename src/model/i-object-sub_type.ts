import {IObjectType} from './i-object-type';
import {IRestEntity} from './i-rest-entity';

export interface IObjectSubType extends IRestEntity {
  name?: string;

  title?: string;

  index?: number;

  min?: number;

  max?: number;

  exclusions?: string[];

  mandatories?: string[];

  subObjectTypeId: string;

  subObjectTypeUri?: string;

  objectType?: IObjectType;

  owner?: boolean;

  acl?: boolean;

  tree?: boolean;
  namespace?: boolean;
}
