import {IObjectSubType} from './i-object-sub_type';
import {IRestEntity} from './i-rest-entity';

export interface IObjectType extends IRestEntity {
  name: string;
  contentType: string;
  inheritedTypesIds: string[];
  definition: any;
  contentDefinition?: any;
  objectSubTypes: IObjectSubType[];
}
