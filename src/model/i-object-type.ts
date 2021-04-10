import {IObjectSubType} from './i-object-sub_type';
import {IRestEntity} from './i-rest-entity';

export interface IObjectType extends IRestEntity {
  name: string;
  title?: string;
  contentType: string;
  inheritedTypesIds: string[];
  definition: any;
  templateView?: string;
  iconView?: string;
  contentDefinition?: any;
  objectSubTypes: IObjectSubType[];
}
