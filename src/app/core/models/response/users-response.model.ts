import { AccountModel } from "../account.model";

export interface UsersResponseModel extends AccountModel {
    id: string;
    torre: number;
    apartamento: number;
}