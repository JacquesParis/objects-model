import {IRestEntity} from './i-rest-entity';
export type IMethodEntityResult = IRestEntity;
export type IMethodEntitiesResult = IRestEntity[];
export interface IMethodValuesResult {
  jsonResult: any;
  displayedResult: string;
}

export type IMethodResult = IMethodEntityResult | IMethodEntitiesResult | IMethodValuesResult | void;
