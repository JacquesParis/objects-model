import {IDataEntity} from './i-data-entity';
import {IJsonSchema} from './i-json-schema';

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
  handlebarsMethodSampling?: string;
  icon?: string;
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
        typeTitle?: string;
      }
    | undefined;
}

export interface ICreationContext {
  schema: IJsonSchema;
  icon?: string;
  typeTitle?: string;
}

export interface IPreviewContext {
  icon?: string;
  html?: string;
  typeTitle?: string;
}

export interface IEntityContext {
  entityType: 'objectTree' | 'objectNode' | 'objectType' | 'objectSubType' | string;
  jsonSchema?: IJsonSchema;
  aclCtx?: IAclCtx;
  loaded?: boolean;
  preview?: IPreviewContext;
  actions?: {
    creations?: {[id: string]: ICreationContext};
    reads?: string[];
    methods?: IEntityMethod[];
    moveTo?: IMoveToAction[];
  };
}
export interface IRestEntity extends IDataEntity {
  uri?: string;
  aliasUri?: string;
  entityCtx?: IEntityContext;
  entityDefinition?: IJsonSchema;
  [key: string]: any;
}
