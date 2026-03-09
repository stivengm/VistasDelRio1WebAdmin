import { AccountModel } from "../account.model";
import { ApartamentModel } from "../apartaments.model";

export interface LoginResponseModel extends AccountModel {
    id: string;
    lastLogin: string;
    token: string
}