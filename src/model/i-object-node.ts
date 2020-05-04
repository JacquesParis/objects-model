import {IObjectType} from './i-object-type';
export interface IObjectNode {
  objectType?: IObjectType;
  parentNode?: IObjectNode;
  parentOwner?: IObjectNode;
  parentACL?: IObjectNode;
}
