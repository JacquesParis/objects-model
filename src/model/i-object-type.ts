import { IRestEntity } from "./i-rest-entity";
import { IObjectSubType } from "./i-object-sub_type";

export interface IObjectType extends IRestEntity {

    name: string;
    type: string;
    definition: any;
    objectSubTypes: IObjectSubType[];
  }