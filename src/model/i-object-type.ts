import {IObjectSubType} from './i-object-sub_type';
import {IRestEntity} from './i-rest-entity';
import {ObjectContentType} from './object-content-type';

export interface IObjectType extends IRestEntity {
  name: string;
  contentType: ObjectContentType;
  definition: any;
  objectSubTypes: IObjectSubType[];
}
