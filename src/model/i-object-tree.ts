import {IObjectNode} from './i-object-node';
import {IRestEntity} from './i-rest-entity';
export interface IObjectTree extends IRestEntity {
  children?: IObjectTree[];
  parentTree?: IObjectTree;
  treeNode?: IObjectNode;
}
