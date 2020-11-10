import {IRestEntity} from './i-rest-entity';

export interface IAppUser extends IRestEntity {
  email: string;
  name?: string;
  firstname?: string;
  lastname?: string;
  password?: string;
  token?: string;
}
