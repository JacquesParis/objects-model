import {IDataEntity} from './i-data-entity';
import {IJsonSchema} from './i-json-shema';

export interface IAccessRightCRUD {
  delete: boolean;
  create: boolean;
  read: boolean;
  update: boolean;
}
export interface IAclCtx {
  rights: IAccessRightCRUD;
}

export interface IEntityMethod {
  methodName: string;
  methodId: string;
  parameters: IJsonSchema;
  actionName: string;
}
export interface IEntityContext {
  entityType: 'objectTree' | 'objectNode' | 'objectType' | 'objectSubType' | string;
  jsonSchema?: IJsonSchema;
  aclCtx?: IAclCtx;
  loaded?: boolean;
  actions?: {creations?: {[id: string]: IJsonSchema}; reads?: string[]; methods?: IEntityMethod[]};
  implementedTypes?: string[];
}
export interface IRestEntity extends IDataEntity {
  uri?: string;
  aliasUri?: string;
  entityCtx?: IEntityContext;
  entityDefinition?: IJsonSchema;
  [key: string]: any;
}
