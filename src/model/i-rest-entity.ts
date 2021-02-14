import {IDataEntity} from './i-data-entity';
import {IJsonSchema} from './i-json-shema';

export interface IAccessRightsCRUD {
  delete: boolean;
  create: boolean;
  read: boolean;
  update: boolean;
}
export interface IAclCtx {
  rights: IAccessRightsCRUD;
}

export interface IEntityMethod {
  methodName: string;
  methodId: string;
  parameters: IJsonSchema;
  actionName: string;
}

export interface IMoveToAction {
  id: string;
  uri: string;
  nodeName: string;
  nodeType: string;
  preview:
    | {
        icon?: string;
        html?: string;
      }
    | undefined;
}
export interface IEntityContext {
  entityType: 'objectTree' | 'objectNode' | 'objectType' | 'objectSubType' | string;
  jsonSchema?: IJsonSchema;
  aclCtx?: IAclCtx;
  loaded?: boolean;
  preview?: {
    icon?: string;
    html?: string;
  };
  actions?: {
    creations?: {[id: string]: IJsonSchema};
    reads?: string[];
    methods?: IEntityMethod[];
    moveTo?: IMoveToAction[];
  };
  implementedTypes?: string[];
}
export interface IRestEntity extends IDataEntity {
  uri?: string;
  aliasUri?: string;
  entityCtx?: IEntityContext;
  entityDefinition?: IJsonSchema;
  [key: string]: any;
}
