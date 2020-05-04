import {IObjectType} from './i-object-type';
export interface IObjectNode {
  name: string;
  objectType?: IObjectType;
  parentNode?: IObjectNode;
  parentOwner?: IObjectNode;
  parentACL?: IObjectNode;
}
