import {IObjectType} from './i-object-type';
import {IRestEntity} from './i-rest-entity';
export interface IObjectNode extends IRestEntity {
  name: string;
  objectType?: IObjectType;
  parentNode?: IObjectNode;
  parentTree?: IObjectNode;
  parentNamespace?: IObjectNode;
  parentOwner?: IObjectNode;
  parentACL?: IObjectNode;
  owner?: boolean;
  acl?: boolean;
  tree?: boolean;
  namespace?: boolean;
}
