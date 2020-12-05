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
export interface IRestEntity extends IDataEntity {
  uri?: string;
  entityCtx?: {
    entityDefinition?: IJsonSchema;
    aclCtx?: IAclCtx;
    loaded?: boolean;
    actions?: {creations?: {[id: string]: IJsonSchema}; reads?: string[]};
  };
  entityDefinition?: IJsonSchema;
}
